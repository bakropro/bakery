import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CatalogPage } from "./pages/CatalogPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { ProductPage } from "./pages/ProductPage";
import { BottomTabs } from "./components/BottomTabs";
import {
  loadCart,
  saveCart,
  type CartItem,
  type Product,
  type PriceOption,
} from "./cartStorage";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => loadCart());

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  function addToCart(product: Product, option: PriceOption) {
    setCart((prev) => {
      const found = prev.find(
        (i) =>
          i.product.id === product.id &&
          i.priceOption.label === option.label
      );

      if (found) {
        return prev.map((i) =>
          i.product.id === product.id &&
            i.priceOption.label === option.label
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { product, priceOption: option, quantity: 1 }];
    });
  }

  function removeOne(productId: string, label: string) {
    setCart((prev) =>
      prev
        .map((i) =>
          i.product.id === productId && i.priceOption.label === label
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  }

  function removeAll(productId: string, label: string) {
    setCart((prev) =>
      prev.filter(
        (i) =>
          !(
            i.product.id === productId &&
            i.priceOption.label === label
          )
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
  <BrowserRouter>
    <div className="app">
      {/* ЕДИНСТВЕННЫЙ container НА ВСЁ ПРИЛОЖЕНИЕ */}
      <div className="container">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route
            path="/product/:id"
            element={<ProductPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                addToCart={addToCart}
                removeOne={removeOne}
                removeAll={removeAll}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage cart={cart} clearCart={clearCart} />
            }
          />
        </Routes>
      </div>

      <BottomTabs />
    </div>
  </BrowserRouter>
);

}
