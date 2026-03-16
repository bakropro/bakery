export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const order = req.body;

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const ADMIN_CHAT_IDS = process.env.ADMIN_CHAT_IDS.split(",");

    function getLocalized(value) {
      if (typeof value === "string") return value;
      if (value?.ru) return value.ru;
      if (value?.en) return value.en;
      return "";
    }

    const deliveryText =
      order.deliveryType === "delivery" ? "Доставка" : "Самовывоз";

    let text = "🧁 Новый заказ:\n\n";

    text += `Имя: ${order.name}\n`;
    text += `Телефон: ${order.phone}\n`;
    text += `Telegram: ${order.telegram || "-"}\n`;
    text += `Способ: ${deliveryText}\n`;

    if (order.email) {
      text += `Почта: ${order.email}\n`;
    }

    if (order.comment) {
      text += `Комментарий: ${order.comment}\n`;
    }

    if (order.address) {
      text += `Адрес: ${order.address}\n`;
    }

    text += "\n📦 Заказ:\n";

    for (const item of order.cart) {
      const title = getLocalized(item.product.title);
      const label = getLocalized(item.priceOption.label);
      const qty = item.quantity;
      const price = item.priceOption.price;
      const lineTotal = price * qty;

      text += `- ${title} — ${price} kr / ${label} × ${qty} = ${lineTotal} kr\n`;
    }

    text += `\n💰 Итого: ${order.total} kr`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    for (const chatId of ADMIN_CHAT_IDS) {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId.trim(),
          text,
        }),
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Telegram send failed",
    });
  }
}