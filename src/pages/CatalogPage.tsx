import { useState } from "react";
import { products } from "../products";
import { useNavigate } from "react-router-dom";

export function CatalogPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
          <div
            key={p.id}
            className="catalog-card"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <img src={p.image} alt={p.title} />

            <div className="catalog-card-body">
              <div className="catalog-card-title">{p.title}</div>

              <div className="catalog-card-price">
                от {p.prices[0].price} kr
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
