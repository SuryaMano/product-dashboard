import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, SortDirection, SortKey } from "../features/ProductDashboard/product.types";

export const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "title", label: "Title" },
  { key: "price", label: "Price" }
];

interface DashboardState {
  searchTerm: string;
  sortKey: SortKey;
  sortDirection: SortDirection;
  selectedProduct: Product | null;
}

const initialState: DashboardState = {
  searchTerm: "",
  sortKey: "title",
  sortDirection: "asc",
  selectedProduct: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setSortKey(state, action: PayloadAction<SortKey>) {
      state.sortKey = action.payload;
    },
    toggleSortDirection(state) {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
    },
    selectProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
});

export const {
  setSearchTerm,
  setSortKey,
  toggleSortDirection,
  selectProduct,
  clearSelectedProduct,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
