
import type { ApiProduct, Product } from "../features/ProductDashboard/types";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

/**
 * Determines the discount rate based on a product's rating
 * Products rated 4 or higher get a 30% discount, others get 10% 
 */
function getDiscountRate(rating: ApiProduct["rating"]): number {
  return rating.rate >= 4 ? 0.3 : 0.1;
}

/**
 * Transforms a raw API product into the app's Product type, 
 * adding the calculated discount rate and discounted price
 */
function transformedProducts(product: ApiProduct): Product {
  const discountRate = getDiscountRate(product.rating);
  return {
    ...product,
    discountRate,
    discountedPrice: Number((product.price * (1 - discountRate)).toFixed(2)),
  };
}

/**
 * Fetch all products and return them ready for display
 * Throws on a non-OK response for failure
 */
export async function fetchProducts(): Promise<any[]> {
  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: ApiProduct[] = await response.json();
   return data.map(transformedProducts);
}