import { type CartItem, type Product, type PriceOption } from "../cartStorage";
import { Link, useNavigate } from "react-router-dom";
import { t, type Lang } from "../i18n";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
  removeOne: (id: string, label: string) => void;
  removeAll: (id: string, label: string) => void;
  clearCart: () => void;
  lang: Lang;
};

export function CartPage({
  cart,
  addToCart,
  removeOne,
  clearCart,
  lang,
}: Props) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, i) => sum + i.priceOption.price * i.quantity,
    0
  );

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <button
          className="button button-secondary"
          onClick={() => navigate("/")}
        >
          ← {t(lang, "back")}
        </button>

        <div className="logo" style={{ margin: 0 }}>
          {t(lang, "cart")} 🛒
        </div>
      </div>

      {cart.length === 0 ? (
        <p>{t(lang, "cartEmpty")}</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((i) => (
              <div
                key={i.product.id + i.priceOption.label[lang]}
                className="cart-item"
              >
                <img src={i.product.image} />

                <div style={{ flex: 1 }}>
                  <div className="cart-item-title">
                    {i.product.title[lang]}
                  </div>
                  <div>
                    {i.priceOption.price} kr / {i.priceOption.label[lang]}
                  </div>
                </div>

                <div className="cart-controls">
                  <button
                    className="button button-secondary"
                    onClick={() =>
                      removeOne(i.product.id, i.priceOption.label[lang])
                    }
                  >
                    -
                  </button>

                  <b>{i.quantity}</b>

                  <button
                    className="button button-secondary"
                    onClick={() => addToCart(i.product, i.priceOption)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-price">
                  {i.priceOption.price * i.quantity} kr
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            {t(lang, "total")}: {total} kr
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            <button className="button button-secondary" onClick={clearCart}>
              {t(lang, "clear")}
            </button>

            <Link className="button button-primary" to="/checkout">
              {t(lang, "placeOrder")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}