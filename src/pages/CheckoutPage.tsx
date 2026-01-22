import { useState } from "react";
import { type CartItem } from "../cartStorage";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  cart: CartItem[];
  clearCart: () => void;
};

export function CheckoutPage({ cart, clearCart }: Props) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [email, setEmail] = useState("");
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "pickup"
  );
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");

  const total = cart.reduce(
    (sum, i) => sum + i.priceOption.price * i.quantity,
    0
  );


  function submit() {
    if (!name.trim()) return alert("Введите имя");
    if (!phone.trim() || !phone.startsWith("+46"))
      return alert("Введите телефон в формате +46...");
    if (!telegram.trim()) return alert("Введите ник в Telegram");
    if (deliveryType === "delivery" && !address.trim())
      return alert("Введите адрес доставки");

    const order = {
      name,
      phone,
      telegram,
      email,
      deliveryType,
      address,
      comment,
      cart,
      total,
    };

    fetch("http://localhost:3001/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then(() => {
        alert("Заказ отправлен!");
        clearCart();
        navigate("/");
      })
      .catch(() => {
        alert("Ошибка отправки заказа");
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Оформление заказа</div>
        <Link to="/cart">← В корзину</Link>
      </div>

      <div style={{ maxWidth: 500 }}>
        <div style={{ marginBottom: 12 }}>
          <label className="label">Имя *</label>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className="label">Телефон *</label>
          <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className="label">Telegram *</label>
          <input className="input" value={telegram} onChange={(e) => setTelegram(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className="label">Почта</label>
          <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className="label">Комментарий к заказу</label>
          <input className="input" value={comment} onChange={(e) => setComment(e.target.value)} />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            <input type="radio" checked={deliveryType === "pickup"} onChange={() => setDeliveryType("pickup")} /> Самовывоз
          </label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            <input type="radio" checked={deliveryType === "delivery"} onChange={() => setDeliveryType("delivery")} /> Доставка
          </label>
        </div>

        {deliveryType === "delivery" && (
          <div style={{ marginBottom: 12 }}>
            <label className="label">Адрес *</label>
            <input className="input" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        )}

        <div className="total">Итого: {total} ₽</div>

        <button className="button button-primary" style={{ marginTop: 20 }} onClick={submit}>
          Оформить заказ
        </button>
      </div>
    </div>
  );
}
