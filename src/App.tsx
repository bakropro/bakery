import { useState, useEffect } from "react";
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
  type Lang,
} from "./cartStorage";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => loadCart());
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "ru" || saved === "en" ? saved : "ru";
  });

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  function addToCart(product: Product, option: PriceOption) {
    setCart((prev) => {
      const found = prev.find(
        (i) =>
          i.product.id === product.id &&
          i.priceOption.label.ru === option.label.ru &&
          i.priceOption.label.en === option.label.en
      );

      if (found) {
        return prev.map((i) =>
          i.product.id === product.id &&
            i.priceOption.label.ru === option.label.ru &&
            i.priceOption.label.en === option.label.en
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
          i.product.id === productId &&
            (i.priceOption.label.ru === label || i.priceOption.label.en === label)
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
            (i.priceOption.label.ru === label ||
              i.priceOption.label.en === label)
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
        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <CatalogPage
                  cart={cart}
                  addToCart={addToCart}
                  setKeyboardOpen={setKeyboardOpen}
                  lang={lang}
                  setLang={setLang}
                />
              }
            />

            <Route
              path="/product/:id"
              element={
                <ProductPage
                  addToCart={addToCart}
                  lang={lang}
                />
              }
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
                  lang={lang}
                />
              }
            />

            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  cart={cart}
                  clearCart={clearCart}
                  keyboardOpen={keyboardOpen}
                  setKeyboardOpen={setKeyboardOpen}
                  lang={lang}
                />
              }
            />
          </Routes>
        </div>

        {!keyboardOpen && <BottomTabs lang={lang} />}
      </div>
    </BrowserRouter>
  );
}