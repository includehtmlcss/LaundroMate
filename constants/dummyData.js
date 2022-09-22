import { icons, images } from "./";

const myProfile = {
  name: "My LaundroMate",
  profile_image: images.profile,
  address: "23, Park Road, Lantern Square",
};

const categories = [
  {
    id: 1,
    name: "Daily Wear",
    icon: icons.dailywear,
  },
  {
    id: 2,
    name: "Party Wear",
    icon: icons.partywear,
  },
  {
    id: 3,
    name: "Ornamental",
    icon: icons.ornamental,
  },
];

const regularwash = {
  id: 1,
  name: "Regular Wash",
  description: "Starting at",
  categories: [1, 2],
  price: "7/item",
  Times: 78,
  isFavourite: true,
  image: require("../assets/dummyData/regularwash.png"),
};

const premiumlaundry = {
  id: 2,
  name: "Premium Laundry",
  description: "Starting at",
  categories: [1, 3],
  price: "100/kg",
  Times: 60,
  isFavourite: false,
  image: require("../assets/dummyData/premiumlaundry.png"),
};

const regularsteamironing = {
  id: 3,
  name: "Regular Steam Ironing",
  description: "Starting at",
  categories: [1, 2, 3],
  price: "12",
  Times: 55,
  isFavourite: true,
  image: require("../assets/dummyData/regularsteamironing.png"),
};

const heavysteampress = {
  id: 4,
  name: "Heavy Steam Press",
  description: "Starting at",
  categories: [1, 2],
  price: "30",
  Times: 153,
  isFavourite: true,
  image: require("../assets/dummyData/heavysteampress.png"),
};

const dryClean = {
  id: 5,
  name: "Dry Cleaning",
  description: "Starting at",
  categories: [2, 3],
  price: "99",
  Times: 75,
  isFavourite: true,
  image: require("../assets/dummyData/dryclean.png"),
};

const curtainCleaning = {
  id: 6,
  name: "Curtain Cleaning",
  description: "Starting at",
  categories: [1, 2, 3],
  price: "249",
  Times: 44,
  isFavourite: true,
  image: require("../assets/dummyData/curtaincleaning.png"),
};

const woolenCare = {
  id: 7,
  name: "Woolen Care",
  description: "Starting at",
  categories: [1, 2],
  price: "249",
  Times: 77,
  isFavourite: true,
  image: require("../assets/dummyData/woolencare.png"),
};

const linenWash = {
  id: 8,
  name: "Linen Wash",
  description: "Starting at",
  categories: [2, 3],
  price: "399",
  Times: 66,
  isFavourite: true,
  image: require("../assets/dummyData/linenwash.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [regularwash, premiumlaundry, regularsteamironing],
  },
  {
    id: 2,
    name: "Popular",
    list: [regularwash, dryClean, heavysteampress],
  },
  {
    id: 3,
    name: "Newest",
    list: [linenWash, woolenCare, curtainCleaning],
  },
  {
    id: 4,
    name: "Trending",
    list: [regularwash, regularsteamironing, heavysteampress],
  },
  {
    id: 5,
    name: "Recommended",
    list: [regularwash, woolenCare, heavysteampress],
  },
];

export default {
  myProfile,
  categories,
  menu,
};
