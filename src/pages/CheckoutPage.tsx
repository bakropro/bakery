import { useEffect, useState } from "react";
import { type CartItem } from "../cartStorage";
import { useNavigate } from "react-router-dom";
import { KeyboardHideButton } from "../components/KeyboardHideButton";

type Props = {
  cart: CartItem[];
  clearCart: () => void;
  keyboardOpen?: boolean; // текущее состояние клавиатуры
  setKeyboardOpen?: (open: boolean) => void;
};

export function CheckoutPage({
  cart,
  clearCart,
  keyboardOpen,
  setKeyboardOpen,
}: Props) {
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

    fetch("/api/order", {
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

  const onFocus = () => setKeyboardOpen?.(true);
  const onBlur = () => setKeyboardOpen?.(false);

  return (
    <div className="checkout-page">
      <div className="header">
        <div className="logo">Оформление заказа</div>
      </div>

      <div className="checkout-form">
        <div className="form-fields">
          {[
            { label: "Имя *", value: name, set: setName },
            { label: "Телефон *", value: phone, set: setPhone },
            { label: "Telegram username", value: telegram, set: setTelegram },
            { label: "Почта", value: email, set: setEmail },
            { label: "Комментарий", value: comment, set: setComment },
          ].map((field) => (
            <div className="form-block" key={field.label}>
              <label className="label">{field.label}</label>
              <input
                className="input"
                value={field.value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => field.set(e.target.value)}
              />
            </div>
          ))}

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
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      {/* Контейнер для суммы и кнопки */}
      <div style={{ padding: "0 14px", marginTop: 20, paddingBottom: 60 }}>
        {/* Сумма Итого всегда видна */}
        <div className="checkout-total">Итого: {total} kr</div>

        {/* Кнопка исчезает при открытой клавиатуре */}
        {!keyboardOpen && (
          <button
            className="button button-primary checkout-button"
            onClick={submit}
            style={{ width: "100%", marginTop: 10 }}
          >
            Оформить заказ
          </button>
        )}
      </div>

      {/* Стрелка для скрытия клавиатуры */}
      {keyboardOpen && <KeyboardHideButton onClick={() => setKeyboardOpen?.(false)} />}
    </div>
  );
}