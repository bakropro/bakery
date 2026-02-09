import { useState } from "react";
import { products } from "../products";
import { CatalogCard } from "../components/CatalogCard";
import { type CartItem, type Product, type PriceOption } from "../cartStorage";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
};

export function CatalogPage({ cart, addToCart }: Props) {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      {/* Поиск */}
      <div style={{ marginBottom: 16 }}>
        <input
          className="input"
          placeholder="Поиск"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Сетка товаров */}
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
