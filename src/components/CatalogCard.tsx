import { useNavigate } from "react-router-dom";
import { type CartItem, type Product, type PriceOption, type Lang } from "../cartStorage";

type Props = {
  product: Product;
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
  lang: Lang;
};

export function CatalogCard({ product, cart, addToCart, lang }: Props) {
  const navigate = useNavigate();

  function getCount(option: PriceOption) {
    return (
      cart.find(
        (i) =>
          i.product.id === product.id &&
          i.priceOption.label[lang] === option.label[lang]
      )?.quantity ?? 0
    );
  }

  return (
    <div
      className="catalog-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title[lang]} />

      <div className="catalog-card-body">
        <div className="catalog-card-title">
          {product.title[lang]}
        </div>

        <div className="catalog-prices">
          {product.prices.map((p) => {
            const count = getCount(p);

            return (
              <div key={p.label[lang]} className="catalog-price-row">
                <div className="price-text">
                  {p.price} kr / {p.label[lang]}
                </div>

                <div className="price-plus-wrap">
                  {count > 0 && (
                    <span className="price-count">{count}</span>
                  )}

                  <button
                    className="price-plus"
                    onClick={(e) => {
                      e.stopPropagation();
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