export type Lang = "ru" | "en";

export type LocalizedText = {
  ru: string;
  en: string;
};

export type PriceOption = {
  label: LocalizedText; // например: { ru: "кг", en: "kg" }
  price: number; // цена в кронах
};

export type ProductCategory =
  | "frozen"
  | "bakery"
  | "desserts"
  | "salads";

export type Product = {
  id: string;
  title: LocalizedText;
  category: ProductCategory;
  description: LocalizedText;
  image: string;
  prices: PriceOption[];
};

export type CartItem = {
  product: Product;
  priceOption: PriceOption;
  quantity: number;
};

export function loadCart(): CartItem[] {
  const saved = localStorage.getItem("cart");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  }
  return [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}