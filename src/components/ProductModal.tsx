import { type Product, type PriceOption } from "../cartStorage";

type Props = {
  product: Product;
  onClose: () => void;
  addToCart: (p: Product, o: PriceOption) => void;
};

export function ProductModal({ product, onClose, addToCart }: Props) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          width: "100%",
          maxWidth: 600,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 16,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div style={{ textAlign: "right" }}>
          <button className="button button-secondary" onClick={onClose}>
            ✕ Закрыть
          </button>
        </div>

        <img
          src={product.image}
          style={{
            width: "100%",
            borderRadius: 16,
            marginBottom: 16,
          }}
        />

        <h2>{product.title}</h2>

        <p style={{ lineHeight: 1.5 }}>{product.description}</p>

        <h3>Варианты:</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {product.prices.map((opt) => (
            <button
              key={opt.label}
              className="button button-primary"
              onClick={() => addToCart(product, opt)}
            >
              {opt.price} kr / {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
