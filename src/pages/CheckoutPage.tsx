import { useEffect, useState } from "react";
import { type CartItem } from "../cartStorage";
import { useNavigate } from "react-router-dom";
import { KeyboardHideButton } from "../components/KeyboardHideButton";
import { t, type Lang } from "../i18n";

type Props = {
  cart: CartItem[];
  clearCart: () => void;
  keyboardOpen?: boolean;
  setKeyboardOpen?: (open: boolean) => void;
  lang: Lang;
};

export function CheckoutPage({
  cart,
  clearCart,
  keyboardOpen,
  setKeyboardOpen,
  lang,
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

  function submit() {
    if (!name.trim()) return alert(t(lang, "enterName"));

    if (!phone.trim()) return alert(t(lang, "phone"));

    if (deliveryType === "delivery" && !address.trim()) {
      return alert(t(lang, "enterAddress"));
    }

    const telegramUserId = window.Telegram?.WebApp?.initDataUnsafe?.user?.id ?? null;

    const order = {
      name,
      phone,
      telegram,
      telegramUserId,
      email,
      deliveryType,
      address: deliveryType === "delivery" ? address : "",
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
          throw new Error(t(lang, "orderError"));
        }

        alert(t(lang, "orderSent"));
        clearCart();
        navigate("/");
      })
      .catch(() => {
        alert(t(lang, "orderError"));
      });
  }

  const onFocus = () => setKeyboardOpen?.(true);
  const onBlur = () => setKeyboardOpen?.(false);

  return (
    <div className="checkout-page">
      <div className="header">
        <div className="logo">{t(lang, "checkout")}</div>
      </div>

      <div className="checkout-form">
        <div className="form-fields">
          <div className="form-block">
            <label className="label">{t(lang, "name")}</label>
            <input
              className="input"
              value={name}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">{t(lang, "phone")}</label>
            <input
              className="input"
              type="tel"
              autoComplete="tel"
              value={phone}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">{t(lang, "telegramUsername")}</label>
            <input
              className="input"
              value={telegram}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setTelegram(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">{t(lang, "email")}</label>
            <input
              className="input"
              value={email}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-block">
            <label className="label">{t(lang, "comment")}</label>
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
              {t(lang, "pickup")}
            </label>
          </div>

          <div className="form-block">
            <label>
              <input
                type="radio"
                checked={deliveryType === "delivery"}
                onChange={() => setDeliveryType("delivery")}
              />
              {t(lang, "delivery")}
            </label>
          </div>

          {deliveryType === "delivery" && (
            <div className="form-block">
              <label className="label">{t(lang, "address")}</label>
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
        <div className="checkout-total">
          {t(lang, "total")}: {total} kr
        </div>

        {!keyboardOpen && (
          <button
            className="button button-primary checkout-button"
            onClick={submit}
            style={{ width: "100%", marginTop: 10 }}
          >
            {t(lang, "placeOrder")}
          </button>
        )}
      </div>

      {keyboardOpen && (
        <KeyboardHideButton onClick={() => setKeyboardOpen?.(false)} />
      )}
    </div>
  );
}