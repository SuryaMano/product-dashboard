import { filterAndSortProducts } from "../utils/products";
import type { Product } from "../features/ProductDashboard/product.types";

function makeProduct(overrides: Partial<Product>): Product {
  return {
    id: 1,
    title: "Item",
    price: 10,
    description: "",
    category: "misc",
    image: "",
    rating: { rate: 4, count: 1 },
    discountRate: 0,
    discountedPrice: 10,
    ...overrides,
  };
}

const sample: Product[] = [
  makeProduct({ id: 1, title: "Blue Backpack", price: 30, discountedPrice: 30, rating: { rate: 4.5, count: 10 } }),
  makeProduct({ id: 2, title: "Red Shirt", price: 10, discountedPrice: 10, rating: { rate: 3.9, count: 5 } }),
  makeProduct({ id: 3, title: "Black Watch", price: 50, discountedPrice: 50, rating: { rate: 4.1, count: 8 } }),
];

describe("filterAndSortProducts", () => {
  const baseOptions = { searchTerm: "", sortKey: "title", sortDirection: "asc" } as const;

  it("filters by title, case-insensitively", () => {
    const result = filterAndSortProducts(sample, { ...baseOptions, searchTerm: "red" });
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Red Shirt");
  });

  it("treats a whitespace-only search as no filter", () => {
    const result = filterAndSortProducts(sample, { ...baseOptions, searchTerm: "   " });
    expect(result).toHaveLength(sample.length);
  });

  it("does not mutate the original array", () => {
    const original = [...sample];
    filterAndSortProducts(sample, { ...baseOptions, sortKey: "price", sortDirection: "desc" });
    expect(sample).toEqual(original);
  });
});
