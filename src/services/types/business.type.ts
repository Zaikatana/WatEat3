export type BusinessResponse = {
  businesses: Business[];
};

export type Business = {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: [];
  rating: number;
  coordinates: BusinessCoordinates;
  transactions: [];
  price: string;
  location: BusinessLocation;
  phone: string;
  display_phone: string;
  distance: number;
};

type BusinessLocation = {
  address1: string;
  address2: string;
  address3: string;
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
