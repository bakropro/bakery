import { useEffect, useState } from "react";
import { type CartItem } from "../cartStorage";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    const user = tg?.initDataUnsafe?.user;

    if (user) {
      if (user.first_name) setName(user.first_name);
      if (user.username) setTelegram("@" + user.username);
    }
  }, []);

  const total = cart.reduce(
    (sum, i) => sum + i.priceOption.price * i.quantity,
    0
  );

  function submit() {
    if (!name.trim()) return alert("Введите имя");
    if (!phone.trim()) return alert("Введите телефон");
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
    <div className="checkout-page">
      {/* Заголовок */}
      <div className="header">
        <div className="logo">Оформление заказа</div>
      </div>

      {/* Форма */}
      <div className="checkout-form">
        <div className="form-fields">
          <div className="form-block">
            <label className="label">Имя *</label>
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Телефон *</label>
            <input
              className="input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Telegram username</label>
            <input
              className="input"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Почта</label>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Комментарий</label>
            <input
              className="input"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          {/* Тип доставки */}
          <div className="form-block">
            <label>
              <input
                type="radio"
                checked={deliveryType === "pickup"}
                onChange={() => setDeliveryType("pickup")}
              />
              Самовывоз
            </label>
          </div>

          <div className="form-block">
            <label>
              <input
                type="radio"
                checked={deliveryType === "delivery"}
                onChange={() => setDeliveryType("delivery")}
              />
              Доставка
            </label>
          </div>

          {deliveryType === "delivery" && (
            <div className="form-block">
              <label className="label">Адрес *</label>
              <input
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="checkout-footer">
        <div className="checkout-total">Итого: {total} kr</div>
        <button
          className="button button-primary checkout-button"
          onClick={submit}
        >
          Оформить заказ
        </button>
      </div>
    </div>
  );
}