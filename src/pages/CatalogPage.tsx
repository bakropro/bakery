import { useState } from "react";
import { products } from "../products";
import { CatalogCard } from "../components/CatalogCard";
import { type CartItem, type Product, type PriceOption } from "../cartStorage";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
  setKeyboardOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const categories = [
  { key: "all", label: "Все" },
  { key: "frozen", label: "Заморозка" },
  { key: "bakery", label: "Выпечка" },
  { key: "desserts", label: "Десерты" },
  { key: "salads", label: "Салаты" },
] as const;

export function CatalogPage({ cart, addToCart, setKeyboardOpen }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]["key"]>("all");

  const filtered = products
    .filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    );

  return (
    <div className="container">
      <div style={{ marginBottom: 16 }}>
        <input
          className="input"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setKeyboardOpen(true)}
          onBlur={() => setKeyboardOpen(false)}
        />
      </div>

      <div className="catalog-categories-scroll">
        <div className="catalog-categories-row">
          {categories.map((c) => (
            <button
              key={c.key}
              className={"category-btn" + (category === c.key ? " active" : "")}
              onClick={() => setCategory(c.key)}
              type="button"
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-grid">
        {filtered.map((p) => (
          <CatalogCard
            key={p.id}
            product={p}
            cart={cart}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}