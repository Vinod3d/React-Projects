import { atom, selector } from "recoil";

export const productState = atom({
    key : "productState",
    default : [
        {
          "name": "Grapes",
          "picture": "🍇",
          "price": 481,
          "type": "fruit",
          "id": 1
        },
        {
          "name": "Melon",
          "picture": "🍈",
          "price": 426,
          "type": "fruit",
          "id": 2
        },
        {
          "name": "Watermelon",
          "picture": "🍉",
          "price": 362,
          "type": "fruit",
          "id": 3
        },
        {
          "name": "Tangerine",
          "picture": "🍊",
          "price": 162,
          "type": "fruit",
          "id": 4
        },
        {
          "name": "Lemon",
          "picture": "🍋",
          "price": 479,
          "type": "fruit",
          "id": 5
        },
        {
          "name": "Banana",
          "picture": "🍌",
          "price": 130,
          "type": "fruit",
          "id": 6
        },
        {
          "name": "Pineapple",
          "picture": "🍍",
          "price": 441,
          "type": "fruit",
          "id": 7
        },
        {
          "name": "Mango",
          "picture": "🥭",
          "price": 184,
          "type": "fruit",
          "id": 8
        },
        { "name": "Red", "picture": "🍎", "price": 235, "type": "fruit", "id": 9 },
        {
          "name": "Green",
          "picture": "🍏",
          "price": 260,
          "type": "fruit",
          "id": 10
        },
        {
          "name": "Pear",
          "picture": "🍐",
          "price": 454,
          "type": "fruit",
          "id": 11
        },
        {
          "name": "Peach",
          "picture": "🍑",
          "price": 201,
          "type": "fruit",
          "id": 12
        },
        {
          "name": "Cherries",
          "picture": "🍒",
          "price": 64,
          "type": "fruit",
          "id": 13
        },
        {
          "name": "Strawberry",
          "picture": "🍓",
          "price": 306,
          "type": "fruit",
          "id": 14
        },
        {
          "name": "Kiwi",
          "picture": "🥝",
          "price": 370,
          "type": "fruit",
          "id": 15
        },
        {
          "name": "Tomato",
          "picture": "🍅",
          "price": 332,
          "type": "fruit",
          "id": 16
        },
        {
          "name": "Coconut",
          "picture": "🥥",
          "price": 33,
          "type": "fruit",
          "id": 17
        },
        {
          "name": "Avocado",
          "picture": "🥑",
          "price": 107,
          "type": "fruit",
          "id": 18
        },
        {
          "name": "Eggplant",
          "picture": "🍆",
          "price": 141,
          "type": "vegetables",
          "id": 19
        },
        {
          "name": "Potato",
          "picture": "🥔",
          "price": 182,
          "type": "vegetables",
          "id": 20
        },
        {
          "name": "Carrot",
          "picture": "🥕",
          "price": 499,
          "type": "vegetables",
          "id": 21
        },
        {
          "name": "Ear",
          "picture": "🌽",
          "price": 424,
          "type": "vegetables",
          "id": 22
        },
        {
          "name": "Hot",
          "picture": "🌶",
          "price": 207,
          "type": "vegetables",
          "id": 23
        },
        {
          "name": "Cucumber",
          "picture": "🥒",
          "price": 4,
          "type": "vegetables",
          "id": 24
        },
        {
          "name": "Leafy",
          "picture": "🥬",
          "price": 363,
          "type": "vegetables",
          "id": 25
        },
        {
          "name": "Broccoli",
          "picture": "🥦",
          "price": 499,
          "type": "vegetables",
          "id": 26
        },
        {
          "name": "Garlic",
          "picture": "🧄",
          "price": 398,
          "type": "vegetables",
          "id": 27
        },
        {
          "name": "Onion",
          "picture": "🧅",
          "price": 21,
          "type": "vegetables",
          "id": 28
        },
        {
          "name": "Mushroom",
          "picture": "🍄",
          "price": 481,
          "type": "vegetables",
          "id": 29
        },
        {
          "name": "Peanuts",
          "picture": "🥜",
          "price": 386,
          "type": "meals",
          "id": 30
        },
        {
          "name": "Chestnut",
          "picture": "🌰",
          "price": 278,
          "type": "meals",
          "id": 31
        },
        {
          "name": "Bread",
          "picture": "🍞",
          "price": 116,
          "type": "meals",
          "id": 32
        },
        {
          "name": "Croissant",
          "picture": "🥐",
          "price": 103,
          "type": "meals",
          "id": 33
        },
        {
          "name": "Baguette",
          "picture": "🥖",
          "price": 258,
          "type": "meals",
          "id": 34
        },
        {
          "name": "Pretzel",
          "picture": "🥨",
          "price": 100,
          "type": "meals",
          "id": 35
        },
        {
          "name": "Bagel",
          "picture": "🥯",
          "price": 497,
          "type": "meals",
          "id": 36
        },
        {
          "name": "Pancakes",
          "picture": "🥞",
          "price": 433,
          "type": "meals",
          "id": 37
        },
        {
          "name": "Waffle",
          "picture": "🧇",
          "price": 437,
          "type": "meals",
          "id": 38
        },
        {
          "name": "Cheese",
          "picture": "🧀",
          "price": 443,
          "type": "meals",
          "id": 39
        },
        {
          "name": "Meat",
          "picture": "🍖",
          "price": 355,
          "type": "meals",
          "id": 40
        },
        {
          "name": "Poultry",
          "picture": "🍗",
          "price": 132,
          "type": "meals",
          "id": 41
        },
        { "name": "Cut", "picture": "🥩", "price": 253, "type": "meals", "id": 42 },
        {
          "name": "Bacon",
          "picture": "🥓",
          "price": 53,
          "type": "meals",
          "id": 43
        },
        {
          "name": "Hamburger",
          "picture": "🍔",
          "price": 456,
          "type": "meals",
          "id": 44
        },
        {
          "name": "French",
          "picture": "🍟",
          "price": 310,
          "type": "meals",
          "id": 45
        },
        {
          "name": "Pizza",
          "picture": "🍕",
          "price": 135,
          "type": "meals",
          "id": 46
        },
        { "name": "Hot", "picture": "🌭", "price": 423, "type": "meals", "id": 47 },
        {
          "name": "Sandwich",
          "picture": "🥪",
          "price": 369,
          "type": "meals",
          "id": 48
        },
        { "name": "Taco", "picture": "🌮", "price": 41, "type": "meals", "id": 49 },
        {
          "name": "Burrito",
          "picture": "🌯",
          "price": 479,
          "type": "meals",
          "id": 50
        },
        {
          "name": "Stuffed",
          "picture": "🥙",
          "price": 472,
          "type": "meals",
          "id": 51
        },
        {
          "name": "Falafel",
          "picture": "🧆",
          "price": 29,
          "type": "meals",
          "id": 52
        },
        {
          "name": "Cooking",
          "picture": "🍳",
          "price": 427,
          "type": "meals",
          "id": 53
        },
        {
          "name": "Shallow",
          "picture": "🥘",
          "price": 232,
          "type": "meals",
          "id": 54
        },
        { "name": "Pot", "picture": "🍲", "price": 39, "type": "meals", "id": 55 },
        {
          "name": "Bowl",
          "picture": "🥣",
          "price": 139,
          "type": "meals",
          "id": 56
        },
        {
          "name": "Green",
          "picture": "🥗",
          "price": 310,
          "type": "meals",
          "id": 57
        },
        {
          "name": "Popcorn",
          "picture": "🍿",
          "price": 337,
          "type": "meals",
          "id": 58
        },
        {
          "name": "Butter",
          "picture": "🧈",
          "price": 448,
          "type": "meals",
          "id": 59
        },
        {
          "name": "Salt",
          "picture": "🧂",
          "price": 231,
          "type": "meals",
          "id": 60
        },
        {
          "name": "Canned",
          "picture": "🥫",
          "price": 5,
          "type": "meals",
          "id": 61
        },
        {
          "name": "Bento",
          "picture": "🍱",
          "price": 446,
          "type": "meals",
          "id": 62
        },
        {
          "name": "Rice",
          "picture": "🍘",
          "price": 439,
          "type": "meals",
          "id": 63
        },
        {
          "name": "Rice",
          "picture": "🍙",
          "price": 176,
          "type": "meals",
          "id": 64
        },
        {
          "name": "Cooked",
          "picture": "🍚",
          "price": 469,
          "type": "meals",
          "id": 65
        },
        {
          "name": "Curry",
          "picture": "🍛",
          "price": 352,
          "type": "meals",
          "id": 66
        },
        {
          "name": "Steaming",
          "picture": "🍜",
          "price": 326,
          "type": "meals",
          "id": 67
        },
        {
          "name": "Spaghetti",
          "picture": "🍝",
          "price": 86,
          "type": "meals",
          "id": 68
        },
        {
          "name": "Roasted",
          "picture": "🍠",
          "price": 102,
          "type": "meals",
          "id": 69
        },
        {
          "name": "Oden",
          "picture": "🍢",
          "price": 268,
          "type": "meals",
          "id": 70
        },
        {
          "name": "Sushi",
          "picture": "🍣",
          "price": 66,
          "type": "meals",
          "id": 71
        },
        {
          "name": "Fried",
          "picture": "🍤",
          "price": 280,
          "type": "meals",
          "id": 72
        },
        {
          "name": "Fish",
          "picture": "🍥",
          "price": 237,
          "type": "meals",
          "id": 73
        },
        {
          "name": "Moon",
          "picture": "🥮",
          "price": 359,
          "type": "meals",
          "id": 74
        },
        {
          "name": "Dango",
          "picture": "🍡",
          "price": 76,
          "type": "meals",
          "id": 75
        },
        {
          "name": "Dumpling",
          "picture": "🥟",
          "price": 442,
          "type": "meals",
          "id": 76
        },
        {
          "name": "Fortune",
          "picture": "🥠",
          "price": 182,
          "type": "meals",
          "id": 77
        },
        {
          "name": "Takeout",
          "picture": "🥡",
          "price": 203,
          "type": "meals",
          "id": 78
        },
        {
          "name": "Oyster",
          "picture": "🦪",
          "price": 476,
          "type": "meals",
          "id": 79
        },
        {
          "name": "Soft",
          "picture": "🍦",
          "price": 225,
          "type": "meals",
          "id": 80
        },
        {
          "name": "Shaved",
          "picture": "🍧",
          "price": 215,
          "type": "meals",
          "id": 81
        },
        { "name": "Ice", "picture": "🍨", "price": 82, "type": "meals", "id": 82 },
        {
          "name": "Doughnut",
          "picture": "🍩",
          "price": 473,
          "type": "meals",
          "id": 83
        },
        {
          "name": "Cookie",
          "picture": "🍪",
          "price": 419,
          "type": "meals",
          "id": 84
        },
        {
          "name": "Birthday",
          "picture": "🎂",
          "price": 399,
          "type": "meals",
          "id": 85
        },
        {
          "name": "Shortcake",
          "picture": "🍰",
          "price": 298,
          "type": "meals",
          "id": 86
        },
        {
          "name": "Cupcake",
          "picture": "🧁",
          "price": 418,
          "type": "meals",
          "id": 87
        },
        { "name": "Pie", "picture": "🥧", "price": 376, "type": "meals", "id": 88 },
        {
          "name": "Chocolate",
          "picture": "🍫",
          "price": 266,
          "type": "meals",
          "id": 89
        },
        {
          "name": "Candy",
          "picture": "🍬",
          "price": 228,
          "type": "meals",
          "id": 90
        },
        {
          "name": "Lollipop",
          "picture": "🍭",
          "price": 206,
          "type": "meals",
          "id": 91
        },
        {
          "name": "Custard",
          "picture": "🍮",
          "price": 154,
          "type": "meals",
          "id": 92
        },
        {
          "name": "Honey",
          "picture": "🍯",
          "price": 458,
          "type": "meals",
          "id": 93
        },
        {
          "name": "Baby",
          "picture": "🍼",
          "price": 418,
          "type": "meals",
          "id": 94
        },
        {
          "name": "Glass",
          "picture": "🥛",
          "price": 28,
          "type": "meals",
          "id": 95
        },
        { "name": "Hot", "picture": "☕", "price": 14, "type": "meals", "id": 96 },
        {
          "name": "Teacup",
          "picture": "🍵",
          "price": 116,
          "type": "meals",
          "id": 97
        },
        {
          "name": "Sake",
          "picture": "🍶",
          "price": 368,
          "type": "meals",
          "id": 98
        },
        {
          "name": "Bottle",
          "picture": "🍾",
          "price": 439,
          "type": "beverages",
          "id": 99
        },
        {
          "name": "Wine",
          "picture": "🍷",
          "price": 101,
          "type": "beverages",
          "id": 100
        },
    
        {
          "name": "Cocktail",
          "picture": "🍸",
          "price": 468,
          "type": "beverages",
          "id": 101
        },
        {
          "name": "Tropical",
          "picture": "🍹",
          "price": 95,
          "type": "beverages",
          "id": 102
        },
        {
          "name": "Beer",
          "picture": "🍺",
          "price": 128,
          "type": "beverages",
          "id": 103
        },
        {
          "name": "Clinking",
          "picture": "🍻",
          "price": 296,
          "type": "beverages",
          "id": 104
        },
        {
          "name": "Clinking",
          "picture": "🥂",
          "price": 378,
          "type": "beverages",
          "id": 105
        },
        {
          "name": "Tumbler",
          "picture": "🥃",
          "price": 276,
          "type": "beverages",
          "id": 106
        },
        {
          "name": "Cup",
          "picture": "🥤",
          "price": 81,
          "type": "beverages",
          "id": 107
        },
        {
          "name": "Beverage",
          "picture": "🧃",
          "price": 97,
          "type": "beverages",
          "id": 108
        },
        {
          "name": "Mate",
          "picture": "🧉",
          "price": 115,
          "type": "beverages",
          "id": 109
        },
        {
          "name": "Ice",
          "picture": "🧊",
          "price": 161,
          "type": "beverages",
          "id": 110
        },
        {
          "name": "Chopsticks",
          "picture": "🥢",
          "price": 376,
          "type": "utensils",
          "id": 111
        },
        {
          "name": "Fork",
          "picture": "🍽",
          "price": 494,
          "type": "utensils",
          "id": 112
        },
        {
          "name": "Fork",
          "picture": "🍴",
          "price": 75,
          "type": "utensils",
          "id": 113
        },
        {
          "name": "Spoon",
          "picture": "🥄",
          "price": 293,
          "type": "utensils",
          "id": 114
        }
      ]
});

export const viewState = atom({
  key: "viewState",
  default: "column",
});

export const searchTextState = atom({
  key : "searchTextState",
  default: "",
});


export const productFilteredState = atom({
  key : "productFilteredState",
  default : "",
})

export const filteredProducts = selector({
  key:"filteredProductList",
  get: ({get}) => {
    const products = get(productState);
    const searchText =get(searchTextState);
    const filterItem = get(productFilteredState);
    let filteredProducts = [];
    filteredProducts = products.filter(product => product.name.includes(searchText)
    ).filter(product => filterItem == "" ? true : product.type == filterItem);

    return filteredProducts;
  },
})

export const filteredCounts = selector({
  key: "filteredCounts",
  get : ({get}) => {
    let filteredProductsCount = get(filteredProducts);
    return filteredProductsCount.length;
  }

})