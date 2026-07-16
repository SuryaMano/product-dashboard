import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../features/ProductDashboard/components/SearchBar";
import { renderWithProviders } from "../utils/renderWithProviders";

describe("SearchBar", () => {
  it("writes what the user types into the store", async () => {
    const { store } = renderWithProviders(<SearchBar />);
    const input = screen.getByLabelText(/search products/i);

    await userEvent.type(input, "watch");

    expect(input).toHaveValue("watch");
    expect(store.getState().dashboard.searchTerm).toBe("watch");
  });
});
