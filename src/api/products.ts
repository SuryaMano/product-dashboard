
import type { ApiProduct } from "../features/ProductDashboard/types";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

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
  return data;
}