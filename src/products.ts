import { type Product } from "./cartStorage";

export const products: Product[] = [
  {
    id: "pelmeni-home",
    title: "Пельмени домашние",
    description: "Пельмени ручной работы с сочным домашним фаршем в тонком тесте — сытное блюдо в лучших традициях домашней кухни.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pelmeni-home.jpg",
  },
  {
    id: "pelmeni-beef",
    title: "Пельмени с говядиной",
    description: "Нежные пельмени с сочной говядиной в тонком тесте — насыщенный вкус и идеальный баланс текстур.",
    prices: [
      { label: "кг", price: 220 }
    ],
    image: "/products/pelmeni-beef.jpg",
  },
  {
    id: "pelmeni-sheep",
    title: "Пельмени с бараниной",
    description: "Сочные пельмени с ароматной начинкой из баранины в тонком тесте — выразительный вкус для ценителей мясных блюд.",
    prices: [
      { label: "кг", price: 250 }
    ],
    image: "/products/pelmeni-sheep.jpg",
  },
  {
    id: "pelmeni-chicken",
    title: "Пельмени с курицей",
    description: "Домашние пельмени с ароматной курицей — сытное, но нежное блюдо для любого повода.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pelmeni-chicken.jpg",
  },
  {
    id: "pelmeni-cheese",
    title: "Пельмени с сыром",
    description: "Нежные пельмени с тянущимся сыром— аппетитное блюдо с мягким вкусом, которое особенно любят дети.",
    prices: [
      { label: "кг", price: 200 }
    ],
    image: "/products/pelmeni-cheese.jpg",
  },
  {
    id: "vareniki-curd",
    title: "Вареники с творогом",
    description: "Домашние вареники с нежным натуральным творогом в тонком тесте — питательное и по-настоящему аппетитное блюдо с мягким сливочным вкусом.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/vareniki-curd.jpg",
  },
  {
    id: "vareniki-cherry",
    title: "Вареники с вишней",
    description: "Нежные вареники из тонкого теста, щедро наполненные сочной вишней с лёгкой кислинкой.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/vareniki-cherry.jpg",
  },
  {
    id: "vareniki-potato",
    title: "Вареники с картофелем",
    description: "Румяные вареники из тончайшего теста с нежной, тающей во рту картофельной начинкой.",
    prices: [
      { label: "кг", price: 100 }
    ],
    image: "/products/vareniki-potato.jpg",
  },
  {
    id: "vareniki-potato-mushrooms",
    title: "Вареники с картофелем и грибами",
    description: "Нежные вареники из тонкого теста с сочной начинкой из картофеля и ароматных грибов. Насыщенный, глубокий вкус и тёплый лесной аромат делают это блюдо особенно уютным и аппетитным.",
    prices: [
      { label: "кг", price: 140 }
    ],
    image: "/products/vareniki-potato-mushrooms.jpg",
  },
  {
    id: "manti",
    title: "Манты",
    description: "Сочные манты в тонком, эластичном тесте с насыщенной мясной начинкой. Приготовленные на пару, они сохраняют естественную сочность, глубокий вкус и аппетитный аромат традиционного татарского блюда.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/manti.jpg",
  },
  {
    id: "peppers",
    title: "Фаршированные перцы",
    description: "Мягкие фаршированные перцы с щедрой мясной начинкой и рассыпчатым рисом — сытное домашнее блюдо с ярким, выразительным вкусом.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/peppers.jpg",
  },
  {
    id: "golubci",
    title: "Голубцы",
    description: "Нежные голубцы с сочной мясной начинкой и рассыпчатым рисом, аккуратно завернутые в мягкие капустные листья — классика домашней кухни в аппетитном исполнении.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/golubci.jpg",
  },
  {
    id: "sirniki",
    title: "Сырники",
    description: "Воздушные сырники из натурального творога, обжаренные до золотистой корочки — классический завтрак с мягким сливочным вкусом.",
    prices: [
      { label: "кг", price: 220 }
    ],
    image: "/products/sirniki.jpg",
  },
  {
    id: "pancakes-meat",
    title: "Блины с мясом",
    description: "Румяные блины с ароматной мясной начинкой — сытное и аппетитное блюдо, которое отлично подойдёт для плотного перекуса.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-meat.jpg",
  },
  {
    id: "pancakes-cheese-ham",
    title: "Блины с ветчиной и сыром",
    description: "Нежные блины с сочной ветчиной и тянущимся сыром — сытное и аппетитное блюдо с гармоничным сочетанием вкусов.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-cheese-ham.jpg",
  },
  {
    id: "pancakes-chicken",
    title: "Блины с курицей",
    description: "Нежные блины с куриной начинкой — лёгкое, питательное блюдо с мягким вкусом, любимое и взрослыми, и детьми.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-chicken.jpg",
  },
  {
    id: "pancakes-potato-mushrooms",
    title: "Блины с картофелем и грибами",
    description: "Румяные блины с картофелем и грибами — аппетитный вариант для плотного обеда или перекуса.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-potato-mushrooms.jpg",
  },
  {
    id: "pancakes-curd",
    title: "Блины с творогом",
    description: "Мягкие блины с натуральным творогом — гармоничное сочетание нежности, пользы и домашнего вкуса.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-curd.jpg",
  },
  {
    id: "pancakes-apple",
    title: "Блины с яблоком",
    description: "Нежные блины с яблоками — тёплый и уютный вариант с приятной кисло-сладкой ноткой.",
    prices: [
      { label: "кг", price: 180 }
    ],
    image: "/products/pancakes-apple.jpg",
  },
  {
    id: "pie-cabbage-egg",
    title: "Пирожок с капустой и яйцом",
    description: "Румяный пирожок с сочной начинкой из капусты и яйца в мягком тесте — уютная классика домашней кухни.",
    prices: [
      { label: "шт", price: 20 }
    ],
    image: "/products/pie-cabbage-egg.jpg",
  },
  {
    id: "pie-potato",
    title: "Пирожок с картофелем",
    description: "Золотистый пирожок с ароматной картофельной начинкой в мягком тесте — сытная классика домашней кухни.",
    prices: [
      { label: "шт", price: 20 }
    ],
    image: "/products/pie-potato.jpg",
  },
  {
    id: "pie-potato-mushrooms",
    title: "Пирожок с картофелем и грибами",
    description: "Румяный пирожок с картофелем и ароматными грибами в мягком тесте — уютная классика домашней кухни.",
    prices: [
      { label: "шт", price: 20 }
    ],
    image: "/products/pie-potato-mushrooms.jpg",
  },
  {
    id: "pie-apple-cinnamon",
    title: "Пирожок с яблоком и корицей",
    description: "Золотистый пирожок с нежными яблоками и пряной корицей в мягком тесте — ароматное лакомство с уютным домашним вкусом.",
    prices: [
      { label: "шт", price: 20 }
    ],
    image: "/products/pie-apple-cinnamon.jpg",
  },
  {
    id: "kish-losos",
    title: "Киш с лососем и брокколи",
    description: "Нежный киш с лососем и брокколи: хрустящее песочное тесто, сливочная заливка и сочный лосось с яркой зеленью брокколи. Богатый вкус, идеальный баланс и никаких компромиссов.",
    prices: [
      { label: "шт", price: 300 }
    ],
    image: "/products/kish-losos.jpg",
  },
  {
    id: "cake-carrot",
    title: "Морковный торт",
    description: "Сочный пряный морковный бисквит с нежным сливочным кремом, тающий во рту с первого кусочка.",
    prices: [
      { label: "2,5 кг", price: 450 },
      { label: "порция", price: 25 }
    ],
    image: "/products/cake-carrot.jpg",
  },
  {
    id: "sharlik",
    title: "Шоколадный шарлик",
    description: "Воздушный шоколадный бисквит с густым, тающим кремом из тёмного шоколада, щедро покрытый кокосовой стружкой.",
    prices: [
      { label: "2,5 кг", price: 450 },
      { label: "порция", price: 25 }
    ],
    image: "/products/sharlik.jpg",
  },
  {
    id: "pickled-cabbage",
    title: "Квашеная капуста",
    description: "Хрустящая квашеная капуста с яркой кислинкой и натуральным вкусом — полезная закуска, богатая витаминами и пробиотиками.",
    prices: [
      { label: "кг", price: 70 }
    ],
    image: "/products/pickled-cabbage.jpg",
  },
];
