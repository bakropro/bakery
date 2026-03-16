const BOT_TOKEN = process.env.BOT_TOKEN;

const MINI_APP_URL = "https://bakery-chi-jet.vercel.app/";

export default async function handler(req, res) {
    try {
        const update = req.body;

        const message = update.message;

        if (!message) {
            return res.status(200).json({ ok: true });
        }

        const chatId = message.chat.id;
        const text = message.text;

        if (text === "/start") {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

                await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: "Добро пожаловать в пекарню 🧁\n\nОткройте меню и оформите заказ:",
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    {
                                        text: "Открыть меню",
                                        web_app: {
                                            url: MINI_APP_URL,
                                        },
                                    },
                                ],
                            ],
                        },
                    }),
                });
        }

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error(error);
        return res.status(200).json({ ok: true });
    }
}