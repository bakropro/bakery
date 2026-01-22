export type PriceOption = {
  label: string;   // например: "1 кг", "1 шт", "порция"
  price: number;   // цена в кронах
};

export type Product = {
  id: string;
  title: string;
  description: string;
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
