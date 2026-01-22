import { useState } from "react";
import { ProductModal } from "../components/ProductModal";
import { products } from "../products";
import { Link } from "react-router-dom";
import { type CartItem, type Product, type PriceOption } from "../cartStorage";

type Props = {
  cart: CartItem[];
  addToCart: (p: Product, option: PriceOption) => void;
};

export function CatalogPage({ cart, addToCart }: Props) {
  const [openedProduct, setOpenedProduct] = useState<Product | null>(null);
  const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Моя пекарня 🍰</div>
        <Link className="cart-link" to="/cart">
          Корзина ({totalCount})
        </Link>
      </div>

      <div className="grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="card"
            onClick={() => setOpenedProduct(p)}
          >

            <img src={p.image} alt={p.title} />

            <div className="card-body">
              <div className="card-title">{p.title}</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {p.prices.map((opt) => (
                  <button
                    key={opt.label}
                    className="button button-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p, opt);
                    }}
                  >

                    {opt.price} kr / {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {openedProduct && (
        <ProductModal
          product={openedProduct}
          onClose={() => setOpenedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
