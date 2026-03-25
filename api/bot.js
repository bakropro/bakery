import { redis } from "../lib/redis.js";

const BOT_TOKEN = process.env.BOT_TOKEN;
const MINI_APP_URL = "https://bakery-chi-jet.vercel.app/";
const ADMIN_CHAT_IDS = process.env.ADMIN_CHAT_IDS.split(",").map((id) =>
    id.trim()
);

function isAdmin(chatId) {
    return ADMIN_CHAT_IDS.includes(String(chatId));
}

async function tg(method, body) {
    const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/${method}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    );

    return response.json();
}

async function sendMessage(chatId, text, extra = {}) {
    return tg("sendMessage", {
        chat_id: chatId,
        text,
        ...extra,
    });
}

async function answerCallbackQuery(callbackQueryId, text = "") {
    return tg("answerCallbackQuery", {
        callback_query_id: callbackQueryId,
        text,
        show_alert: false,
    });
}

export default async function handler(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(200).json({ ok: true, message: "bot endpoint works" });
        }

        const update = req.body;

        if (!update) {
            return res.status(200).json({ ok: true, message: "empty update" });
        }

        // ---------- CALLBACK BUTTONS ----------
        if (update.callback_query) {
            const callback = update.callback_query;
            const adminId = String(callback.from.id);
            const data = callback.data || "";

            if (!isAdmin(adminId)) {
                await answerCallbackQuery(callback.id, "Недоступно");
                return res.status(200).json({ ok: true });
            }

            const [action, orderNumber] = data.split(":");

            if (!action || orderNumber === undefined) {
                await answerCallbackQuery(callback.id, "Некорректная команда");
                return res.status(200).json({ ok: true });
            }

            const orderRaw = await redis.get(`order:${orderNumber}`);

            if (!orderRaw) {
                await answerCallbackQuery(callback.id, "Заказ не найден");
                return res.status(200).json({ ok: true });
            }

            const order =
                typeof orderRaw === "string" ? JSON.parse(orderRaw) : orderRaw;

            if (!order.customerChatId) {
                await answerCallbackQuery(
                    callback.id,
                    "У покупателя нет Telegram ID для связи"
                );
                await sendMessage(
                    adminId,
                    `Невозможно открыть диалог по заказу #${orderNumber}: у покупателя не найден Telegram ID.`
                );
                return res.status(200).json({ ok: true });
            }

            if (action === "contact") {
                const mode = {
                    orderNumber: String(orderNumber),
                    customerChatId: String(order.customerChatId),
                };

                await redis.set(`admin_reply_mode:${adminId}`, JSON.stringify(mode));
                await redis.sAdd(`order_active_admins:${orderNumber}`, adminId);
                await redis.set(
                    `customer_active_order:${order.customerChatId}`,
                    String(orderNumber)
                );

                await answerCallbackQuery(callback.id, "Диалог открыт");

                await sendMessage(
                    adminId,
                    `Открыт диалог по заказу #${orderNumber}.\nСледующее ваше сообщение будет отправлено покупателю.\n\nЧтобы закончить, нажмите «Завершить диалог» под заказом.`
                );

                return res.status(200).json({ ok: true });
            }

            if (action === "end") {
                const modeRaw = await redis.get(`admin_reply_mode:${adminId}`);

                if (modeRaw) {
                    const mode =
                        typeof modeRaw === "string" ? JSON.parse(modeRaw) : modeRaw;

                    if (String(mode.orderNumber) === String(orderNumber)) {
                        await redis.del(`admin_reply_mode:${adminId}`);
                    }
                }

                await redis.sRem(`order_active_admins:${orderNumber}`, adminId);

                const activeAdmins = await redis.sMembers(
                    `order_active_admins:${orderNumber}`
                );

                if (!activeAdmins || activeAdmins.length === 0) {
                    await redis.del(`customer_active_order:${order.customerChatId}`);
                }

                await answerCallbackQuery(callback.id, "Диалог завершён");
                await sendMessage(adminId, `Диалог по заказу #${orderNumber} завершён.`);

                return res.status(200).json({ ok: true });
            }

            await answerCallbackQuery(callback.id, "Неизвестная команда");
            return res.status(200).json({ ok: true });
        }

        // ---------- MESSAGES ----------
        const message = update.message;

        if (!message) {
            return res.status(200).json({ ok: true, message: "no message in update" });
        }

        const chatId = String(message.chat.id);
        const text = message.text || "";

        if (text === "/start") {
            await sendMessage(
                chatId,
                "Добро пожаловать в Elvira Food Studio!\nОткройте магазин и оформите заказ.\n\nWelcome to Elvira Food Studio!\nOpen the store and place the order.",
                {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Open",
                                    web_app: {
                                        url: MINI_APP_URL,
                                    },
                                },
                            ],
                        ],
                    },
                }
            );

            return res.status(200).json({ ok: true });
        }

        // ---------- ADMIN -> CUSTOMER ----------
        if (isAdmin(chatId)) {
            const modeRaw = await redis.get(`admin_reply_mode:${chatId}`);

            if (modeRaw && text) {
                const mode =
                    typeof modeRaw === "string" ? JSON.parse(modeRaw) : modeRaw;

                await sendMessage(
                    mode.customerChatId,
                    `💬 Сообщение по вашему заказу #${mode.orderNumber}:\n\n${text}`
                );

                await sendMessage(chatId, "Сообщение отправлено покупателю.");
            }

            return res.status(200).json({ ok: true });
        }

        // ---------- CUSTOMER -> ADMIN ----------
        const activeOrderNumber = await redis.get(`customer_active_order:${chatId}`);

        if (activeOrderNumber && text) {
            const orderNumber =
                typeof activeOrderNumber === "string"
                    ? activeOrderNumber
                    : String(activeOrderNumber);

            const activeAdmins = await redis.sMembers(
                `order_active_admins:${orderNumber}`
            );

            if (activeAdmins && activeAdmins.length > 0) {
                for (const adminId of activeAdmins) {
                    await sendMessage(
                        adminId,
                        `💬 Ответ покупателя по заказу #${orderNumber}:\n\n${text}`
                    );
                }
            } else {
                await sendMessage(
                    chatId,
                    "Сейчас диалог с администратором закрыт. Дождитесь нового сообщения от администратора."
                );
            }
        }

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error(error);
        return res.status(200).json({ ok: true });
    }
}