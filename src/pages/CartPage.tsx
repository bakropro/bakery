import { type CartItem, type Product, type PriceOption } from "../cartStorage";
import { Link } from "react-router-dom";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
  removeOne: (id: string, label: string) => void;
  removeAll: (id: string, label: string) => void;
  clearCart: () => void;
};

export function CartPage({
  cart,
  addToCart,
  removeOne,
  clearCart,
}: Props) {
  const total = cart.reduce(
    (sum, i) => sum + i.priceOption.price * i.quantity,
    0
  );

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Корзина 🛒</div>
        <Link to="/">← В каталог</Link>
      </div>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((i) => (
              <div
                key={i.product.id + i.priceOption.label}
                className="cart-item"
              >
                <img src={i.product.image} />

                <div className="cart-main">
                  <div className="cart-title">
                    {i.product.title}
                  </div>

                  <div className="cart-unit">
                    {i.priceOption.price} kr / {i.priceOption.label}
                  </div>

                  <div className="cart-bottom">
                    <div className="cart-controls">
                      <button
                        className="button button-secondary"
                        onClick={() =>
                          removeOne(i.product.id, i.priceOption.label)
                        }
                      >
                        −
                      </button>

                      <b>{i.quantity}</b>

                      <button
                        className="button button-secondary"
                        onClick={() =>
                          addToCart(i.product, i.priceOption)
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-price">
                      {i.priceOption.price * i.quantity} kr
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>

          <div className="total">Итого: {total} kr</div>

          <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
            <button className="button button-secondary" onClick={clearCart}>
              Очистить
            </button>
            <Link className="button button-primary" to="/checkout">
              Оформить заказ
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
