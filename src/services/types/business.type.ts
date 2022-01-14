import { Category } from "./category.type";

export type BusinessResponse = {
  businesses: Business[];
  total: number;
  region: { center: BusinessCoordinates };
};

export type Business = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: BusinessCoordinates;
  transactions: string[];
  price: string;
  location: BusinessLocation;
  phone: string;
  display_phone: string;
  distance: number;
};

type BusinessLocation = {
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
};

type BusinessCoordinates = {
  latitude: number;
  longitude: number;
};

export const testResponse: BusinessResponse = {
  businesses: [
    {
      id: "7eDYAKxQJSvYtN0cQc6yhw",
      alias: "gelato-messina-darlinghurst-darlinghurst-3",
      name: "Gelato Messina Darlinghurst",
      image_url:
        "https://s3-media4.fl.yelpcdn.com/bphoto/_GZ409QyGgqfrTsvjspgOA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/gelato-messina-darlinghurst-darlinghurst-3?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 115,
      categories: [{ alias: "gelato", title: "Gelato" }],
      rating: 5.0,
      coordinates: { latitude: -33.87802, longitude: 151.22123 },
      transactions: [],
      price: "$",
      location: {
        address1: "241 Victoria St",
        address2: "Shop 1",
        address3: "",
        city: "Darlinghurst",
        zip_code: "2010",
        country: "AU",
        state: "NSW",
        display_address: [
          "241 Victoria St",
          "Shop 1",
          "Darlinghurst New South Wales 2010",
          "Australia",
        ],
      },
      phone: "+61293311588",
      display_phone: "+61 2 9331 1588",
      distance: 2521.3947076374416,
    },
    {
      id: "hD63dw97-_AEZRWTP0hM_g",
      alias: "cow-and-the-moon-enmore-3",
      name: "Cow & The Moon",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/z39rXnPZBD4dHc7t_u0mRA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/cow-and-the-moon-enmore-3?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 74,
      categories: [
        { alias: "gelato", title: "Gelato" },
        { alias: "coffee", title: "Coffee & Tea" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.89879, longitude: 151.17196 },
      transactions: [],
      price: "$",
      location: {
        address1: "181 Enmore Rd",
        address2: "",
        address3: "",
        city: "Enmore",
        zip_code: "2042",
        country: "AU",
        state: "NSW",
        display_address: [
          "181 Enmore Rd",
          "Enmore New South Wales 2042",
          "Australia",
        ],
      },
      phone: "+61295574255",
      display_phone: "+61 2 9557 4255",
      distance: 3625.8067525692686,
    },
    {
      id: "wt1q5DUoR9xBha-9WvvioA",
      alias: "gelato-messina-surry-hills-surry-hills-5",
      name: "Gelato Messina Surry Hills",
      image_url:
        "https://s3-media4.fl.yelpcdn.com/bphoto/88AOC_qd6cHDa6c8qN2IMw/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/gelato-messina-surry-hills-surry-hills-5?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 68,
      categories: [
        { alias: "icecream", title: "Ice Cream & Frozen Yogurt" },
        { alias: "gelato", title: "Gelato" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.88553, longitude: 151.213891 },
      transactions: [],
      price: "$",
      location: {
        address1: "389 Crown St",
        address2: "",
        address3: "",
        city: "Surry Hills",
        zip_code: "2010",
        country: "AU",
        state: "NSW",
        display_address: [
          "389 Crown St",
          "Surry Hills New South Wales 2010",
          "Australia",
        ],
      },
      phone: "+61293321191",
      display_phone: "+61 2 9332 1191",
      distance: 2294.968081137059,
    },
    {
      id: "VgJgK8yCu2AliPlFpj1STw",
      alias: "gelato-messina-circular-quay-sydney-2",
      name: "Gelato Messina Circular Quay",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/rHbr7kJ3j3STVl-idQ_7sg/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/gelato-messina-circular-quay-sydney-2?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 35,
      categories: [{ alias: "gelato", title: "Gelato" }],
      rating: 4.5,
      coordinates: { latitude: -33.86209, longitude: 151.20986 },
      transactions: [],
      price: "$",
      location: {
        address1: "1 Macquarie Pl",
        address2: "Shop G-10",
        address3: null,
        city: "Sydney",
        zip_code: "2000",
        country: "AU",
        state: "NSW",
        display_address: [
          "1 Macquarie Pl",
          "Shop G-10",
          "Sydney New South Wales 2000",
          "Australia",
        ],
      },
      phone: "+61292524480",
      display_phone: "+61 2 9252 4480",
      distance: 1800.8569058948444,
    },
    {
      id: "urxX-aiJw-URbtxANuCAtw",
      alias: "gelato-messina-the-star-pyrmont-2",
      name: "Gelato Messina The Star",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/gIo2elLdWXt2etrm573r9g/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/gelato-messina-the-star-pyrmont-2?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 44,
      categories: [
        { alias: "icecream", title: "Ice Cream & Frozen Yogurt" },
        { alias: "gelato", title: "Gelato" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.8670790846516, longitude: 151.194560422754 },
      transactions: [],
      price: "$",
      location: {
        address1: "Level G",
        address2: "80 Pyrmont St",
        address3: "Cafe Court",
        city: "Pyrmont",
        zip_code: "2009",
        country: "AU",
        state: "NSW",
        display_address: [
          "Level G",
          "80 Pyrmont St",
          "Cafe Court",
          "Pyrmont New South Wales 2009",
          "Australia",
        ],
      },
      phone: "+61295711918",
      display_phone: "+61 2 9571 1918",
      distance: 579.0230802913451,
    },
    {
      id: "wJ0w1Ca2YypaJ49ykxkHHQ",
      alias: "nelsons-brasserie-the-lord-nelson-hotel-sydney-2",
      name: "Nelson's Brasserie - the Lord Nelson Hotel",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/IubKTGZH5kWcj7NFR9B26Q/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/nelsons-brasserie-the-lord-nelson-hotel-sydney-2?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 104,
      categories: [
        { alias: "breweries", title: "Breweries" },
        { alias: "pubs", title: "Pubs" },
        { alias: "beerbar", title: "Beer Bar" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.858163732609, longitude: 151.203332282603 },
      transactions: [],
      price: "$$",
      location: {
        address1: "19 Kent St",
        address2: null,
        address3: null,
        city: "Sydney",
        zip_code: "2000",
        country: "AU",
        state: "NSW",
        display_address: [
          "19 Kent St",
          "Sydney New South Wales 2000",
          "Australia",
        ],
      },
      phone: "+61292514044",
      display_phone: "+61 2 9251 4044",
      distance: 1755.2236165707557,
    },
    {
      id: "7tuuj-Du75wsHlWVwN2sCA",
      alias: "mr-crackles-darlinghurst",
      name: "Mr Crackles",
      image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/f7hy439zhY-5Mk8uTtUyAA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/mr-crackles-darlinghurst?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 91,
      categories: [
        { alias: "hotdogs", title: "Fast Food" },
        { alias: "bakeries", title: "Bakeries" },
      ],
      rating: 4.0,
      coordinates: { latitude: -33.880096, longitude: 151.215998 },
      transactions: [],
      price: "$",
      location: {
        address1: "155 Oxford St",
        address2: "",
        address3: "",
        city: "Darlinghurst",
        zip_code: "2010",
        country: "AU",
        state: "NSW",
        display_address: [
          "155 Oxford St",
          "Darlinghurst New South Wales 2010",
          "Australia",
        ],
      },
      phone: "+61280682832",
      display_phone: "+61 2 8068 2832",
      distance: 2138.7782303096606,
    },
    {
      id: "V2xcShWUQuZLtKuX2eIkrQ",
      alias: "the-endeavour-tap-rooms-sydney",
      name: "The Endeavour Tap Rooms",
      image_url:
        "https://s3-media1.fl.yelpcdn.com/bphoto/SH1fjpFiIrHS0n4oqb2dDA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/the-endeavour-tap-rooms-sydney?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 35,
      categories: [
        { alias: "breweries", title: "Breweries" },
        { alias: "pubs", title: "Pubs" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.8592593783734, longitude: 151.208162682876 },
      transactions: [],
      price: "$$",
      location: {
        address1: "39-43 Argyle St",
        address2: "The Rocks",
        address3: null,
        city: "Sydney",
        zip_code: "2000",
        country: "AU",
        state: "NSW",
        display_address: [
          "39-43 Argyle St",
          "The Rocks",
          "Sydney New South Wales 2000",
          "Australia",
        ],
      },
      phone: "+61292416517",
      display_phone: "+61 2 9241 6517",
      distance: 1900.6227082064536,
    },
    {
      id: "IDuHQ_54ObA6mepLTZ6UTA",
      alias: "friggitoria-sydney",
      name: "Friggitoria",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/peLK5wumxw5wdVJ2vom7_g/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/friggitoria-sydney?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 19,
      categories: [
        { alias: "italian", title: "Italian" },
        { alias: "gourmet", title: "Specialty Food" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.8749012717781, longitude: 151.223065365083 },
      transactions: [],
      price: "$$",
      location: {
        address1: "Shop 6",
        address2: "12 Bayswater Rd",
        address3: "",
        city: "Sydney",
        zip_code: "2010",
        country: "AU",
        state: "NSW",
        display_address: [
          "Shop 6",
          "12 Bayswater Rd",
          "Sydney New South Wales 2010",
          "Australia",
        ],
      },
      phone: "+61416066352",
      display_phone: "+61 416 066 352",
      distance: 2623.0700344124457,
    },
    {
      id: "WuwjZY8adC0xp2-CnagThw",
      alias: "hakiki-turkish-ice-cream-and-baklava-newtown",
      name: "Hakiki Turkish Ice Cream & Baklava",
      image_url:
        "https://s3-media2.fl.yelpcdn.com/bphoto/t-2flMDISREbNoJuQ3vklA/o.jpg",
      is_closed: false,
      url: "https://www.yelp.com/biz/hakiki-turkish-ice-cream-and-baklava-newtown?adjust_creative=TgeJtJZhJQejwqcDYs6aog&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TgeJtJZhJQejwqcDYs6aog",
      review_count: 23,
      categories: [
        { alias: "desserts", title: "Desserts" },
        { alias: "icecream", title: "Ice Cream & Frozen Yogurt" },
        { alias: "coffee", title: "Coffee & Tea" },
      ],
      rating: 4.5,
      coordinates: { latitude: -33.8986189665838, longitude: 151.17568359857 },
      transactions: [],
      price: "$",
      location: {
        address1: "Shop 1",
        address2: "63-71 Enmore Rd",
        address3: "",
        city: "Newtown",
        zip_code: "2042",
        country: "AU",
        state: "NSW",
        display_address: [
          "Shop 1",
          "63-71 Enmore Rd",
          "Newtown New South Wales 2042",
          "Australia",
        ],
      },
      phone: "+6180401676",
      display_phone: "+61 80401676",
      distance: 3420.499362532902,
    },
  ],
  total: 195,
  region: { center: { longitude: 151.1948288, latitude: -33.8722816 } },
};
