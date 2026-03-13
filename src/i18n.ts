export type Lang = "ru" | "en";

export const translations = {
  ru: {
    menu: "Меню",
    cart: "Корзина",
    search: "Поиск",
    all: "Все",
    frozen: "Заморозка",
    bakery: "Выпечка",
    desserts: "Десерты",
    salads: "Салаты",

    checkout: "Оформление заказа",
    name: "Имя *",
    phone: "Телефон *",
    telegramUsername: "Telegram username",
    email: "Почта",
    comment: "Комментарий",
    pickup: "Самовывоз",
    delivery: "Доставка",
    address: "Адрес *",
    total: "Итого",
    placeOrder: "Оформить заказ",

    clear: "Очистить",
    cartEmpty: "Корзина пуста",

    enterName: "Введите имя",
    enterPhone: "Введите телефон в формате +46 xxx xxx xxx",
    enterAddress: "Введите адрес доставки",
    orderSent: "Заказ отправлен!",
    orderError: "Ошибка отправки заказа",
    productNotFound: "Товар не на йден",
    back: "Назад",
    add: "Добавить",
    
  },

  en: {
    menu: "Menu",
    cart: "Cart",
    search: "Search",
    all: "All",
    frozen: "Frozen",
    bakery: "Bakery",
    desserts: "Desserts",
    salads: "Salads",

    checkout: "Checkout",
    name: "Name *",
    phone: "Phone *",
    telegramUsername: "Telegram username",
    email: "Email",
    comment: "Comment",
    pickup: "Pickup",
    delivery: "Delivery",
    address: "Address *",
    total: "Total",
    placeOrder: "Place order",

    clear: "Clear",
    cartEmpty: "Cart is empty",

    enterName: "Enter your name",
    enterPhone: "Enter phone in format +46 xxx xxx xxx",
    enterAddress: "Enter delivery address",
    orderSent: "Order sent!",
    orderError: "Order sending error",
    productNotFound: "Product not found",
    back: "Back",
    add: "Add",
    
  },
} as const;

export function t(lang: Lang, key: keyof typeof translations["ru"]) {
  return translations[lang][key];
}