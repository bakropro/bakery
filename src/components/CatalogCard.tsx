import { useNavigate } from "react-router-dom";
import { type CartItem, type Product, type PriceOption } from "../cartStorage";

type Props = {
  product: Product;
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
};

export function CatalogCard({ product, cart, addToCart }: Props) {
  const navigate = useNavigate();

  function getCount(option: PriceOption) {
    return (
      cart.find(
        (i) =>
          i.product.id === product.id &&
          i.priceOption.label === option.label
      )?.quantity ?? 0
    );
  }

  return (
    <div
      className="catalog-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />

      <div className="catalog-card-body">
        <div className="catalog-card-title">{product.title}</div>

        <div className="catalog-prices">
          {product.prices.map((p) => {
            const count = getCount(p);

            return (
              <div key={p.label} className="catalog-price-row">
                <div className="price-text">
                  {p.price} kr / {p.label}
                </div>

                <div className="price-plus-wrap">
                  {count > 0 && (
                    <span className="price-count">{count}</span>
                  )}

                  <button
                    className="price-plus"
                    onClick={(e) => {
                      e.stopPropagation(); // 🔥 ВАЖНО
                      addToCart(product, p);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
