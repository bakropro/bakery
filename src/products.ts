import { type Product } from "./cartStorage";

export const products: Product[] = [

  {
    id: "mushroom-cream-soup",
    title: {
      ru: "Грибной крем-суп",
      en: "Mushroom cream soup",
    },
    category: "soups",
    description: {
      ru: "Нежный, бархатистый суп с насыщенным грибным вкусом.",
      en: "A smooth and velvety soup with a rich mushroom flavor.",
    },
    prices: [
      { label: { ru: "0,5 л", en: "0.5 L" }, price: 60 }
    ],
    image: "/products/mushroom-cream-soup.jpg",
  },
  {
    id: "pancakes-mushrooms-cheese",
    title: {
      ru: "Блины с грибами и сыром",
      en: "Crepes with mushrooms and cheese",
    },
    category: "frozen",
    description: {
      ru: "Тонкие блинчики с сочной грибной начинкой и тянущимся сыром.",
      en: "Thin crepes with a juicy mushroom filling and melted stretchy cheese.",
    },
    prices: [
      { label: { ru: "кг", en: "kg" }, price: 180 }
    ],
    image: "/products/pancakes-mushrooms-cheese.jpg",
  },
  {
    id: "pancakes-plain",
    title: {
      ru: "Блины без начинки",
      en: "Plain crepes",
    },
    category: "frozen",
    description: {
      ru: "Тонкие, нежные и румяные — идеальная основа под любые начинки на ваш вкус.",
      en: "Thin, delicate and golden crepes — a perfect base for any fillings you like.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 50 }
    ],
    image: "/products/pancakes-plain.jpg",
  },
  {
    id: "vatrushki-curd",
    title: {
      ru: "Ватрушки с творогом",
      en: "Curd vatrushki (curd buns)",
    },
    category: "bakery",
    description: {
      ru: "Мягкое воздушное тесто и нежная творожная начинка.",
      en: "Soft fluffy dough with a delicate curd filling.",
    },
    prices: [
      { label: { ru: "шт", en: "pc" }, price: 25 }
    ],
    image: "/products/vatrushki-curd.jpg",
  },
  {
    id: "chicken-minced-meat",
    title: {
      ru: "Фарш куриный",
      en: "Chicken minced meat",
    },
    category: "semifinished",
    description: {
      ru: "Свежий фарш, приготовленный вручную из куриного мяса с добавлением лука. Идеальная основа для любимых домашних блюд.",
      en: "Fresh minced meat made by hand from chicken with added onions. A perfect base for your favorite homemade dishes.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 90 }
    ],
    image: "/products/chicken-minced-meat.jpg",
  },
  {
    id: "beef-minced-meat",
    title: {
      ru: "Фарш из говядины",
      en: "Beef minced meat",
    },
    category: "semifinished",
    description: {
      ru: "Свежий фарш, приготовленный вручную из отборной говядины с луком. Идеальная основа для любимых домашних блюд.",
      en: "Fresh minced meat made by hand from selected beef with onions. A perfect base for your favorite homemade dishes.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 100 }
    ],
    image: "/products/beef-minced-meat.jpg",
  },
  {
    id: "homemade-minced-meat",
    title: {
      ru: "«Домашний» фарш",
      en: "Homemade minced meat",
    },
    category: "semifinished",
    description: {
      ru: "Свежий фарш, приготовленный вручную из отборной говядины и свинины с луком. Идеальная основа для любимых домашних блюд.",
      en: "Fresh minced meat made by hand from selected beef and pork with onions. A perfect base for your favorite homemade dishes.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 90 }
    ],
    image: "/products/homemade-minced-meat.jpg",
  },
  {
    id: "homemade-noodles",
    title: {
      ru: "Лапша ручной работы",
      en: "Handmade noodles",
    },
    category: "semifinished",
    description: {
      ru: "Домашняя лапша ручной работы, бережно высушенная для сохранения вкуса. Основа для настоящих, домашних супов. Незаменимый запас для тёплых семейных обедов.",
      en: "Homemade handmade noodles, carefully dried to preserve their flavor. A perfect base for authentic homemade soups. An essential staple for warm family meals.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 100 }
    ],
    image: "/products/homemade-noodles.jpg",
  },
  {
    id: "noodle-soup",
    title: {
      ru: "Суп лапша",
      en: "Noodle soup",
    },
    category: "soups",
    description: {
      ru: "Ароматный бульон и нежная домашняя лапша. Вкус, как из детства — знакомый и настоящий.",
      en: "Aromatic broth with delicate homemade noodles. A familiar, comforting taste just like in childhood.",
    },
    prices: [
      { label: { ru: "0.5 л", en: "0.5 L" }, price: 60 }
    ],
    image: "/products/noodle-soup.jpg",
  },
  {
    id: "borscht",
    title: {
      ru: "Борщ",
      en: "Borscht",
    },
    category: "soups",
    description: {
      ru: "Традиционный борщ с богатым вкусом и ярким свекольным оттенком. Сытный, ароматный и по-настоящему домашний.",
      en: "Traditional borscht with a rich flavor and vibrant beetroot color. Hearty, aromatic, and truly homemade.",
    },
    prices: [
      { label: { ru: "0.5 л", en: "0.5 L" }, price: 60 }
    ],
    image: "/products/borscht.jpg",
  },
  {
    id: "home-cutlets-fried",
    title: {
      ru: "Домашние котлеты",
      en: "Homemade cutlets",
    },
    category: "frozen",
    description: {
      ru: "Сочные обжаренные домашние котлеты с аппетитной золотистой корочкой.",
      en: "Juicy homemade cutlets, pan-fried to a delicious golden crust.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 125 }
    ],
    image: "/products/home-cutlets-fried.jpg",
  },
  {
    id: "home-cutlets-raw",
    title: {
      ru: "Котлеты (не обжаренные)",
      en: "Raw homemade cutlets",
    },
    category: "frozen",
    description: {
      ru: "Домашние котлеты глубокой заморозки, сохраняющие сочность и натуральный вкус. Удобно хранить, легко готовить, вкусно кушать.",
      en: "Deep-frozen homemade cutlets that preserve their juiciness and natural flavor. Easy to store, simple to cook, and delicious to enjoy.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 100 }
    ],
    image: "/products/home-cutlets-raw.jpg",
  },
  {
    id: "meatballs-fried",
    title: {
      ru: "Мясные фрикадельки обжаренные",
      en: "Fried meatballs",
    },
    category: "frozen",
    description: {
      ru: "Сочные фрикадельки из отборного мяса, обжаренные до аппетитной корочки. Прекрасный выбор для быстрого и вкусного обеда.",
      en: "Juicy meatballs made from premium meat, pan-fried to a golden crust. A perfect choice for a quick and satisfying meal.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 125 }
    ],
    image: "/products/meatballs-fried.jpg",
  },
  {
    id: "meatballs-raw",
    title: {
      ru: "Мясные фрикадельки (не обжаренные)",
      en: "Raw meatballs",
    },
    category: "frozen",
    description: {
      ru: "Сочные фрикадельки из отборного мяса, без обжарки — полностью готовы к приготовлению. Готовьте их по своему вкусу и создавайте идеальное домашнее блюдо.",
      en: "Juicy meatballs made from premium meat, uncooked and ready to prepare. Cook them your way and create the perfect homemade dish.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 100 }
    ],
    image: "/products/meatballs-raw.jpg",
  },
  {
    id: "pelmeni-home",
    title: {
      ru: "Пельмени домашние",
      en: "Homemade pelmeni",
    },
    category: "frozen",
    description: {
      ru: "Пельмени ручной работы с сочным домашним фаршем в тонком тесте — сытное блюдо в лучших традициях домашней кухни.",
      en: "Handmade pelmeni with juicy homemade minced meat in thin dough — a hearty dish in the best traditions of home cooking.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 110 }],
    image: "/products/pelmeni-home.jpg",
  },
  {
    id: "pelmeni-beef",
    title: {
      ru: "Пельмени с говядиной",
      en: "Beef pelmeni",
    },
    category: "frozen",
    description: {
      ru: "Нежные пельмени с сочной говядиной в тонком тесте — насыщенный вкус и идеальный баланс текстур.",
      en: "Tender pelmeni with juicy beef in thin dough — rich flavor and a perfect balance of textures.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 125 }],
    image: "/products/pelmeni-beef.jpg",
  },
  {
    id: "pelmeni-sheep",
    title: {
      ru: "Пельмени с бараниной",
      en: "Lamb pelmeni",
    },
    category: "frozen",
    description: {
      ru: "Сочные пельмени с ароматной начинкой из баранины в тонком тесте — выразительный вкус для ценителей мясных блюд.",
      en: "Juicy pelmeni with flavorful lamb filling in thin dough — a bold taste for lovers of meat dishes.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 140 }],
    image: "/products/pelmeni-sheep.jpg",
  },
  {
    id: "pelmeni-chicken",
    title: {
      ru: "Пельмени с курицей",
      en: "Chicken pelmeni",
    },
    category: "frozen",
    description: {
      ru: "Домашние пельмени с ароматной курицей — сытное, но нежное блюдо для любого повода.",
      en: "Homemade pelmeni with flavorful chicken — a hearty yet delicate dish for any occasion.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 110 }],
    image: "/products/pelmeni-chicken.jpg",
  },
  {
    id: "pelmeni-cheese",
    title: {
      ru: "Пельмени с сыром",
      en: "Cheese pelmeni",
    },
    category: "frozen",
    description: {
      ru: "Нежные пельмени с тянущимся сыром — аппетитное блюдо с мягким вкусом, которое особенно любят дети.",
      en: "Tender pelmeni with melted cheese — an appetizing dish with a mild flavor, especially loved by children.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 110 }],
    image: "/products/pelmeni-cheese.jpg",
  },
  {
    id: "vareniki-curd",
    title: {
      ru: "Вареники с творогом",
      en: "Cottage cheese vareniki",
    },
    category: "frozen",
    description: {
      ru: "Домашние вареники с нежным натуральным творогом в тонком тесте — питательное и по-настоящему аппетитное блюдо с мягким сливочным вкусом.",
      en: "Homemade vareniki with delicate natural cottage cheese in thin dough — a nourishing and truly appetizing dish with a soft creamy taste.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 90 }],
    image: "/products/vareniki-curd.jpg",
  },
  {
    id: "vareniki-cherry",
    title: {
      ru: "Вареники с вишней",
      en: "Cherry vareniki",
    },
    category: "frozen",
    description: {
      ru: "Нежные вареники из тонкого теста, щедро наполненные сочной вишней с лёгкой кислинкой.",
      en: "Delicate vareniki made with thin dough, generously filled with juicy cherries and a slight tartness.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 90 }],
    image: "/products/vareniki-cherry.jpg",
  },
  {
    id: "vareniki-potato",
    title: {
      ru: "Вареники с картофелем",
      en: "Potato vareniki",
    },
    category: "frozen",
    description: {
      ru: "Румяные вареники из тончайшего теста с нежной, тающей во рту картофельной начинкой.",
      en: "Golden vareniki made with very thin dough and a tender potato filling that melts in your mouth.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 50 }],
    image: "/products/vareniki-potato.jpg",
  },
  {
    id: "vareniki-potato-mushrooms",
    title: {
      ru: "Вареники с картофелем и грибами",
      en: "Potato and mushroom vareniki",
    },
    category: "frozen",
    description: {
      ru: "Нежные вареники из тонкого теста с сочной начинкой из картофеля и ароматных грибов. Насыщенный, глубокий вкус и тёплый лесной аромат делают это блюдо особенно уютным и аппетитным.",
      en: "Tender vareniki made with thin dough and a juicy filling of potatoes and aromatic mushrooms. The rich, deep flavor and warm forest aroma make this dish especially cozy and appetizing.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 70 }],
    image: "/products/vareniki-potato-mushrooms.jpg",
  },
  {
    id: "manti",
    title: {
      ru: "Манты",
      en: "Manti",
    },
    category: "frozen",
    description: {
      ru: "Сочные манты в тонком, эластичном тесте с насыщенной мясной начинкой. Приготовленные на пару, они сохраняют естественную сочность, глубокий вкус и аппетитный аромат традиционного татарского блюда.",
      en: "Juicy manti in thin, elastic dough with a rich meat filling. Steamed to perfection, they keep their natural juiciness, deep flavor, and appetizing aroma of a traditional Tatar dish.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 110 }],
    image: "/products/manti.jpg",
  },
  {
    id: "peppers",
    title: {
      ru: "Фаршированные перцы",
      en: "Stuffed peppers",
    },
    category: "frozen",
    description: {
      ru: "Мягкие фаршированные перцы с щедрой мясной начинкой и рассыпчатым рисом — сытное домашнее блюдо с ярким, выразительным вкусом.",
      en: "Tender stuffed peppers with a generous meat filling and fluffy rice — a hearty homemade dish with a bright, expressive flavor.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 90 }],
    image: "/products/peppers.jpg",
  },
  {
    id: "golubci",
    title: {
      ru: "Голубцы",
      en: "Cabbage rolls",
    },
    category: "frozen",
    description: {
      ru: "Нежные голубцы с сочной мясной начинкой и рассыпчатым рисом, аккуратно завернутые в мягкие капустные листья — классика домашней кухни в аппетитном исполнении.",
      en: "Tender cabbage rolls with juicy meat filling and fluffy rice, carefully wrapped in soft cabbage leaves — a home-cooking classic in an appetizing form.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 90 }],
    image: "/products/golubci.jpg",
  },
  {
    id: "sirniki",
    title: {
      ru: "Сырники",
      en: "Syrniki",
    },
    category: "frozen",
    description: {
      ru: "Воздушные сырники из натурального творога, обжаренные до золотистой корочки — классический завтрак с мягким сливочным вкусом.",
      en: "Fluffy syrniki made from natural cottage cheese, fried until golden brown — a classic breakfast with a soft creamy taste.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 115 }],
    image: "/products/sirniki.jpg",
  },
  {
    id: "pancakes-meat",
    title: {
      ru: "Блины с мясом",
      en: "Meat crepes",
    },
    category: "frozen",
    description: {
      ru: "Румяные блины с ароматной мясной начинкой — сытное и аппетитное блюдо, которое отлично подойдёт для плотного перекуса.",
      en: "Golden crepes with a flavorful meat filling — a hearty and appetizing dish, perfect for a satisfying snack.",
    },
    prices: [{ label: { ru: "кг", en: "kg" }, price: 180 }],
    image: "/products/pancakes-meat.jpg",
  },
  {
    id: "pancakes-cheese-ham",
    title: {
      ru: "Блины с ветчиной и сыром",
      en: "Ham and cheese crepes",
    },
    category: "frozen",
    description: {
      ru: "Нежные блины с сочной ветчиной и тянущимся сыром — сытное и аппетитное блюдо с гармоничным сочетанием вкусов.",
      en: "Tender crepes with juicy ham and melted cheese — a hearty and appetizing dish with a harmonious combination of flavors.",
    },
    prices: [{ label: { ru: "кг", en: "kg" }, price: 180 }],
    image: "/products/pancakes-cheese-ham.jpg",
  },
  {
    id: "pancakes-chicken",
    title: {
      ru: "Блины с курицей",
      en: "Chicken crepes",
    },
    category: "frozen",
    description: {
      ru: "Нежные блины с куриной начинкой — лёгкое, питательное блюдо с мягким вкусом, любимое и взрослыми, и детьми.",
      en: "Tender crepes with chicken filling — a light and nourishing dish with a mild taste, loved by both adults and children.",
    },
    prices: [{ label: { ru: "кг", en: "kg" }, price: 180 }],
    image: "/products/pancakes-chicken.jpg",
  },
  /* УБРАНО ИЗ МЕНЮ
  {
    id: "pancakes-potato-mushrooms",
    title: {
      ru: "Блины с картофелем и грибами",
      en: "Potato and mushroom crepes",
    },
    category: "frozen",
    description: {
      ru: "Румяные блины с картофелем и грибами — аппетитный вариант для плотного обеда или перекуса.",
      en: "Golden crepes with potatoes and mushrooms — an appetizing option for a hearty lunch or snack.",
    },
    prices: [{ label: { ru: "кг", en: "kg" }, price: 180 }],
    image: "/products/pancakes-potato-mushrooms.jpg",
  },
  */
  {
    id: "pancakes-curd",
    title: {
      ru: "Блины с творогом",
      en: "Cottage cheese crepes",
    },
    category: "frozen",
    description: {
      ru: "Мягкие блины с натуральным творогом — гармоничное сочетание нежности, пользы и домашнего вкуса.",
      en: "Soft crepes with natural cottage cheese — a harmonious combination of tenderness, goodness, and homemade taste.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 100 }],
    image: "/products/pancakes-curd.jpg",
  },
  {
    id: "pancakes-apple",
    title: {
      ru: "Блины с яблоком",
      en: "Apple crepes",
    },
    category: "frozen",
    description: {
      ru: "Нежные блины с яблоками — тёплый и уютный вариант с приятной кисло-сладкой ноткой.",
      en: "Tender crepes with apples — a warm and cozy option with a pleasant sweet-and-sour note.",
    },
    prices: [{ label: { ru: "500г", en: "500g" }, price: 75 }],
    image: "/products/pancakes-apple.jpg",
  },
  {
    id: "pie-cabbage-egg",
    title: {
      ru: "Пирожок с капустой и яйцом",
      en: "Pie with cabbage and egg",
    },
    category: "bakery",
    description: {
      ru: "Румяный пирожок с сочной начинкой из капусты и яйца в мягком тесте — уютная классика домашней кухни.",
      en: "Golden-brown pie with a juicy cabbage and egg filling in soft dough — a cozy classic of home cooking.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 25 }],
    image: "/products/pie-cabbage-egg.jpg",
  },
  {
    id: "pie-potato",
    title: {
      ru: "Пирожок с картофелем",
      en: "Pie with potato",
    },
    category: "bakery",
    description: {
      ru: "Золотистый пирожок с ароматной картофельной начинкой в мягком тесте — сытная классика домашней кухни.",
      en: "Golden pie with an aromatic potato filling in soft dough — a hearty classic of home cooking.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 25 }],
    image: "/products/pie-potato.jpg",
  },
  {
    id: "pie-potato-mushrooms",
    title: {
      ru: "Пирожок с картофелем и грибами",
      en: "Pie with potato and mushrooms",
    },
    category: "bakery",
    description: {
      ru: "Румяный пирожок с картофелем и ароматными грибами в мягком тесте — уютная классика домашней кухни.",
      en: "Golden-brown pie with potatoes and aromatic mushrooms in soft dough — a cozy classic of home cooking.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 25 }],
    image: "/products/pie-potato-mushrooms.jpg",
  },
  {
    id: "echpochmak",
    title: {
      ru: "Эчпочмак",
      en: "Echpochmak",
    },
    category: "bakery",
    description: {
      ru: "Традиционный татарский треугольный пирожок из тонкого теста с сочной начинкой из говядины, картофеля и лука, запечённый до румяной корочки.",
      en: "Traditional Tatar triangular pastry made with thin dough and a juicy filling of beef, potatoes, and onion, baked until golden brown.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 30 }],
    image: "/products/echpochmak.jpg",
  },
  {
    id: "pie-apple-cinnamon",
    title: {
      ru: "Пирожок с яблоком и корицей",
      en: "Pie with apple and cinnamon",
    },
    category: "bakery",
    description: {
      ru: "Золотистый пирожок с нежными яблоками и пряной корицей в мягком тесте — ароматное лакомство с уютным домашним вкусом.",
      en: "Golden pie with tender apples and spicy cinnamon in soft dough — a fragrant treat with a cozy homemade taste.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 25 }],
    image: "/products/pie-apple-cinnamon.jpg",
  },
  {
    id: "kish-losos",
    title: {
      ru: "Киш с лососем и брокколи",
      en: "Quiche with salmon and broccoli",
    },
    category: "bakery",
    description: {
      ru: "Нежный киш с лососем и брокколи: хрустящее песочное тесто, сливочная заливка и сочный лосось с яркой зеленью брокколи. Богатый вкус, идеальный баланс и никаких компромиссов.",
      en: "Delicate quiche with salmon and broccoli: crispy shortcrust pastry, creamy filling, and juicy salmon with vibrant green broccoli. Rich flavor, perfect balance, and no compromises.",
    },
    prices: [{ label: { ru: "шт", en: "pc" }, price: 300 }],
    image: "/products/kish-losos.jpg",
  },
  {
    id: "cake-carrot",
    title: {
      ru: "Морковный торт",
      en: "Carrot cake",
    },
    category: "desserts",
    description: {
      ru: "Сочный пряный морковный бисквит с нежным сливочным кремом, тающий во рту с первого кусочка.",
      en: "Moist spiced carrot sponge cake with delicate cream cheese frosting that melts in your mouth from the very first bite.",
    },
    prices: [
      { label: { ru: "2.5кг", en: "2.5kg" }, price: 500 },
      { label: { ru: "порция", en: "portion" }, price: 35 },
    ],
    image: "/products/cake-carrot.jpg",
  },
  {
    id: "sharlik",
    title: {
      ru: "Шоколадный шарлик",
      en: "Chocolate sharlik",
    },
    category: "desserts",
    description: {
      ru: "Воздушный шоколадный бисквит с густым, тающим кремом из тёмного шоколада, щедро покрытый кокосовой стружкой.",
      en: "Airy chocolate sponge cake with rich melting dark chocolate cream, generously coated with coconut flakes.",
    },
    prices: [
      { label: { ru: "2.5кг", en: "2.5kg" }, price: 500 },
      { label: { ru: "порция", en: "portion" }, price: 35 },
    ],
    image: "/products/sharlik.jpg",
  },
  {
    id: "vinegret",
    title: {
      ru: "Винегрет",
      en: "Vinegret (beetroot salad)",
    },
    category: "salads",
    description: {
      ru: "Свежий, яркий салат из овощей — простой, полезный и вкусный.",
      en: "A fresh and colorful vegetable salad — simple, healthy, and delicious.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 80 }
    ],
    image: "/products/vinegret.jpg",
  },
  {
    id: "olivier-salad",
    title: {
      ru: "Оливье",
      en: "Olivier salad",
    },
    category: "salads",
    description: {
      ru: "Классический салат с нежной текстурой и знакомым вкусом, который любят все.",
      en: "A classic salad with a creamy texture and a familiar flavor loved by everyone.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 110 }
    ],
    image: "/products/olivier-salad.jpg",
  },
  {
    id: "crab-salad",
    title: {
      ru: "Крабовый салат",
      en: "Crab salad",
    },
    category: "salads",
    description: {
      ru: "Нежный и сочный салат — лёгкий, свежий и очень вкусный.",
      en: "A tender and juicy salad — light, fresh, and very delicious.",
    },
    prices: [
      { label: { ru: "500г", en: "500g" }, price: 80 }
    ],
    image: "/products/crab-salad.jpg",
  },
  {
    id: "pickled-cabbage",
    title: {
      ru: "Квашеная капуста",
      en: "Sauerkraut",
    },
    category: "salads",
    description: {
      ru: "Хрустящая квашеная капуста с яркой кислинкой и натуральным вкусом — полезная закуска, богатая витаминами и пробиотиками.",
      en: "Crunchy sauerkraut with a bright tang and natural flavor — a healthy appetizer rich in vitamins and probiotics.",
    },
    prices: [{ label: { ru: "кг", en: "kg" }, price: 70 }],
    image: "/products/pickled-cabbage_SOLDOUT.jpg",
    disabled: true,
  },
];