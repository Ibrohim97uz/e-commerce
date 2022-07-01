export type productType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  strock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export type actionType = {
  type: string;
  payload: any;
};

export interface category {
  selectedCategory: string;
}
