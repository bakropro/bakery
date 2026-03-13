import { useParams, useNavigate } from "react-router-dom";
import { products } from "../products";
import { type Product, type PriceOption } from "../cartStorage";
import { t, type Lang } from "../i18n";

type Props = {
  addToCart: (product: Product, option: PriceOption) => void;
  lang: Lang;
};

export function ProductPage({ addToCart, lang }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container">
        <p>{t(lang, "productNotFound")}</p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <div style={{ marginBottom: 12 }}>
        <button
          className="button button-secondary"
          onClick={() => navigate(-1)}
        >
          ← {t(lang, "back")}
        </button>
      </div>

      {/* Image */}
      <img
        src={product.image}
        alt={product.title[lang]}
        style={{
          width: "100%",
          borderRadius: 16,
          marginBottom: 16,
        }}
      />

      {/* Title */}
      <h1 style={{ fontSize: 22, marginBottom: 8 }}>
        {product.title[lang]}
      </h1>

      {/* Description */}
      <p style={{ lineHeight: 1.5, marginBottom: 20 }}>
        {product.description[lang]}
      </p>

      {/* Prices */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {product.prices.map((opt) => (
          <button
            key={opt.label[lang]}
            className="button button-primary"
            onClick={() => addToCart(product, opt)}
          >
            {t(lang, "add")} — {opt.price} kr / {opt.label[lang]}
          </button>
        ))}
      </div>
    </div>
  );
}