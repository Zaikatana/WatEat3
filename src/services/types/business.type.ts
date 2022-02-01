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
