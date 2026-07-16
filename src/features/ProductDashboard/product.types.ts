export interface Rating {
  rate: number;
  count: number;
}

export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Product extends ApiProduct {
  discountRate: number;
  discountedPrice: number;
}

export type SortDirection = "asc" | "desc";

export type SortKey = "title" | "price";