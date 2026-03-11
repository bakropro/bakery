export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const order = req.body;

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const ADMIN_CHAT_IDS = process.env.ADMIN_CHAT_IDS.split(",");

  let text = "🧁 Новый заказ:\n\n";

  text += `Имя: ${order.name}\n`;
  text += `Телефон: ${order.phone}\n`;
  text += `Telegram: ${order.telegram}\n`;
  text += `Способ: ${order.deliveryType}\n`;

  if (order.address) {
    text += `Адрес: ${order.address}\n`;
  }

  text += "\n📦 Заказ:\n";

  for (const item of order.cart) {
    text += `- ${item.product.title} x${item.quantity}\n`;
  }

  text += `\n💰 Итого: ${order.total} kr`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {

    for (const chatId of ADMIN_CHAT_IDS) {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });
    }

    res.status(200).json({ ok: true });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Telegram send failed"
    });

  }
}