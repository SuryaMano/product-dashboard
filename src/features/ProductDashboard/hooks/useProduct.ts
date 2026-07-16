import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../api/products";

/**
 * React Query handles caching and retries of products
 */
export function useProducts() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return {
    products: query.data ?? [],
  };
}
