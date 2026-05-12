import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../products";
import { CatalogCard } from "../components/CatalogCard";
import { type CartItem, type Product, type PriceOption, type Lang } from "../cartStorage";
import { t } from "../i18n";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, o: PriceOption) => void;
  setKeyboardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

export function CatalogPage({
  cart,
  addToCart,
  setKeyboardOpen,
  lang,
  setLang,
}: Props) {
  const navigate = useNavigate();

  const categories = [
    { key: "all", label: t(lang, "all") },
    { key: "frozen", label: t(lang, "frozen") },
    { key: "hot", label: t(lang, "hot") },
    { key: "soups", label: t(lang, "soups") },
    { key: "semifinished", label: t(lang, "semifinished") },
    { key: "bakery", label: t(lang, "bakery") },
    { key: "desserts", label: t(lang, "desserts") },
    { key: "salads", label: t(lang, "salads") },
  ] as const;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]["key"]>("all");
  const [searchFocused, setSearchFocused] = useState(false);

  const filtered = products
    .filter((p) =>
      p.title[lang].toLowerCase().includes(query.toLowerCase())
    )
    .filter((p) =>
      category === "all" ? true : p.category === category
    );

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.priceOption.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="catalog-search-row">
        <input
          className="input catalog-search-input"
          placeholder={t(lang, "search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            setKeyboardOpen(true);
            setSearchFocused(true);
          }}
          onBlur={() => {
            setKeyboardOpen(false);
            setSearchFocused(false);
          }}
        />

        <div className="catalog-language-switcher">
          <button
            type="button"
            className={"catalog-language-btn" + (lang === "ru" ? " active" : "")}
            onClick={() => setLang("ru")}
          >
            RU
          </button>

          <button
            type="button"
            className={"catalog-language-btn" + (lang === "en" ? " active" : "")}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
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
            lang={lang}
          />
        ))}
      </div>

      {!searchFocused && totalCount > 0 && (
        <button
          type="button"
          className="catalog-cart-floating"
          onClick={() => navigate("/cart")}
        >
          🛒 {totalCount} · {totalPrice} kr
        </button>
      )}
    </div>
  );
}