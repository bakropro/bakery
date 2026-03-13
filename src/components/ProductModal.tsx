import { type Product, type PriceOption, type Lang } from "../cartStorage";
import { t } from "../i18n";

type Props = {
  product: Product;
  onClose: () => void;
  addToCart: (p: Product, o: PriceOption) => void;
  lang: Lang;
};

export function ProductModal({
  product,
  onClose,
  addToCart,
  lang,
}: Props) {
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
            ✕ {t(lang, "close")}
          </button>
        </div>

        <img
          src={product.image}
          alt={product.title[lang]}
          style={{
            width: "100%",
            borderRadius: 16,
            marginBottom: 16,
          }}
        />

        <h2>{product.title[lang]}</h2>

        <p style={{ lineHeight: 1.5 }}>{product.description[lang]}</p>

        <h3>{t(lang, "options")}:</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {product.prices.map((opt) => (
            <button
              key={opt.label[lang]}
              className="button button-primary"
              onClick={() => addToCart(product, opt)}
            >
              {opt.price} kr / {opt.label[lang]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}