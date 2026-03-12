import { useEffect, useState } from "react";
import { type CartItem } from "../cartStorage";
import { useNavigate } from "react-router-dom";
import { KeyboardHideButton } from "../components/KeyboardHideButton";

type Props = {
  cart: CartItem[];
  clearCart: () => void;
  keyboardOpen?: boolean;
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
    const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

    if (user?.first_name) {
      setName(user.first_name);
    }

    if (user?.username) {
      setTelegram("@" + user.username);
    }
  }, []);

  const total = cart.reduce(
    (sum, i) => sum + i.priceOption.price * i.quantity,
    0
  );

  function formatSwedishPhone(value: string) {
    const digits = value.replace(/\D/g, "").slice(0, 9);

    const part1 = digits.slice(0, 3);
    const part2 = digits.slice(3, 6);
    const part3 = digits.slice(6, 9);

    let formatted = "+46";

    if (part1) formatted += " " + part1;
    if (part2) formatted += " " + part2;
    if (part3) formatted += " " + part3;

    return formatted;
  }

  function handlePhoneChange(rawValue: string) {
    let digits = rawValue.replace(/\D/g, "");

    if (digits.startsWith("46")) {
      digits = digits.slice(2);
    }

    digits = digits.slice(0, 9);
    setPhone(digits);
  }

  function submit() {
    if (!name.trim()) return alert("Введите имя");

    if (phone.length !== 9) {
      return alert("Введите телефон в формате +46 xxx xxx xxx");
    }

    if (deliveryType === "delivery" && !address.trim()) {
      return alert("Введите адрес доставки");
    }

    const order = {
      name,
      phone: formatSwedishPhone(phone),
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
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Ошибка отправки заказа");
        }

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
          <div className="form-block">
            <label className="label">Имя *</label>
            <input
              className="input"
              value={name}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Телефон *</label>
            <input
              className="input"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="+46 123 456 789"
              value={formatSwedishPhone(phone)}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Telegram username</label>
            <input
              className="input"
              value={telegram}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Почта</label>
            <input
              className="input"
              value={email}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">Комментарий</label>
            <input
              className="input"
              value={comment}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

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

      <div style={{ padding: "0 14px", marginTop: 20, paddingBottom: 60 }}>
        <div className="checkout-total">Итого: {total} kr</div>

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

      {keyboardOpen && (
        <KeyboardHideButton onClick={() => setKeyboardOpen?.(false)} />
      )}
    </div>
  );
}