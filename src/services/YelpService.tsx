import axios, { AxiosInstance } from "axios";
const { REACT_APP_YELP_KEY } = process.env;

export class YelpService {
  static createYelpBusinessInstance(): AxiosInstance {
    return axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
      headers: {
        Authorization: `Bearer ${REACT_APP_YELP_KEY}`,
        origin: "localhost:3000/*",
      },
    });
  }

  static createYelpCategoryInstance(): AxiosInstance {
    return axios.create({
      baseURL:
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories",
      headers: {
        Authorization: `Bearer ${REACT_APP_YELP_KEY}`,
        origin: "localhost:3000/*",
      },
    });
  }
}
