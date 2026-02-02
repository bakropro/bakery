import { useParams, useNavigate } from "react-router-dom";
import { products } from "../products";
import { type Product, type PriceOption } from "../cartStorage";

type Props = {
  addToCart: (product: Product, option: PriceOption) => void;
};

export function ProductPage({ addToCart }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container">
        <p>Товар не найден</p>
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
          ← Назад
        </button>
      </div>

      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          borderRadius: 16,
          marginBottom: 16,
        }}
      />

      {/* Title */}
      <h1 style={{ fontSize: 22, marginBottom: 8 }}>
        {product.title}
      </h1>

      {/* Description */}
      <p style={{ lineHeight: 1.5, marginBottom: 20 }}>
        {product.description}
      </p>

      {/* Prices */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {product.prices.map((opt) => (
          <button
            key={opt.label}
            className="button button-primary"
            onClick={() => addToCart(product, opt)}
          >
            Добавить — {opt.price} kr / {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
