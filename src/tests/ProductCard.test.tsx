import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../features/ProductDashboard/components/ProductCard";
import type { Product } from "../features/ProductDashboard/product.types";

const product: Product = {
  id: 1,
  title: "Black Watch",
  price: 50,
  description: "A watch.",
  category: "accessories",
  image: "watch.jpg",
  rating: { rate: 4.1, count: 88 },
  discountRate: 0.2,
  discountedPrice: 40,
};

describe("ProductCard", () => {
  it("shows the discounted and original price", () => {
    render(<ProductCard product={product} onSelect={() => {}} />);

    expect(screen.getByText("£40.00")).toBeInTheDocument();
    expect(screen.getByText("£50.00")).toBeInTheDocument();
  });

  it("calls onSelect with the product when clicked", async () => {
    const onSelect = jest.fn();
    render(<ProductCard product={product} onSelect={onSelect} />);

    await userEvent.click(screen.getByRole("button"));

    expect(onSelect).toHaveBeenCalledWith(product);
  });
});
