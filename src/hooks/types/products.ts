export type Product = {
  _id: string;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  active: boolean;
};
type Support = {
  text: string;
  url: string;
};
export type Products = {
  results: Product[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
};
