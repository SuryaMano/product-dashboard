import type { Product, SortDirection, SortKey } from "../features/ProductDashboard/product.types";

interface Options {
  searchTerm: string;
  sortDirection: SortDirection;
  sortKey: SortKey;
}

function matchesSearch(product: Product, term: string): boolean {
  return product.title.toLowerCase().includes(term.toLowerCase());
}


function sortValue(product: Product, sortKey: SortKey): string | number {
  if (sortKey === "price") return product.discountedPrice;
  return product.title.toLowerCase();
}

/**
 * Filter by search term, then sort. Returns a new array and never mutates the
 * input, so it's safe to feed straight into React state / useMemo
 */
export function filterAndSortProducts(
  products: Product[],
  { searchTerm, sortKey, sortDirection }: Options
): Product[] {
  const term = searchTerm.trim();
  const filtered = term
    ? products.filter((product) => matchesSearch(product, term))
    : products;

  const direction = sortDirection === "desc" ? -1 : 1;

  return [...filtered].sort((a, b) => {
    const valueA = sortValue(a, sortKey);
    const valueB = sortValue(b, sortKey);

    if (valueA < valueB) return -1 * direction;
    if (valueA > valueB) return 1 * direction;
    return 0;
  });
}
