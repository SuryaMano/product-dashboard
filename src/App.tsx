import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { useProducts } from "./features/ProductDashboard/hooks/useProduct";
import { clearSelectedProduct, selectProduct } from "./store/dashboardSlice";
import Loader from "./features/Common/components/Loader";
import StateFallback from "./features/Common/components/StateFallback";
import ProductGrid from "./features/ProductDashboard/components/ProductGrid";
import SearchBar from './features/ProductDashboard/components/SearchBar';
import SortControls from "./features/ProductDashboard/components/SortControls";
import ProductModal from "./features/ProductDashboard/components/ProductModal";
import { filterAndSortProducts } from "./utils/products";
import styles from "./app.module.css";

export default function App() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state: any) => state.dashboard.searchTerm);
  const sortKey = useAppSelector((state: any) => state.dashboard.sortKey);
  const sortDirection = useAppSelector((state: any) => state.dashboard.sortDirection);
  const selectedProduct = useAppSelector((state: any) => state.dashboard.selectedProduct);
  const { isLoading, isError, products } = useProducts();

  const visibleProducts = useMemo(
    () => filterAndSortProducts(products, { searchTerm, sortKey, sortDirection }),
    [products, searchTerm, sortKey, sortDirection]
  );

  function renderContent() {
    if (isLoading) return <Loader label="Loading Products..." />;
    if (isError) return <StateFallback message="Unable to load data. Please try again later." />;
    if (visibleProducts.length === 0) return <StateFallback message="No results found" />;
    return (
      <ProductGrid products={visibleProducts} onSelect={(product) => dispatch(selectProduct(product))} />
    );
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Product Dashboard</h1>
        <p className={styles.subheading}>
          Browse products from the Fake Store API — search, sort, and open a
          card for the full details.
        </p>
      </header>

      <section className={styles.controls}>
        <SearchBar />
        <SortControls />
      </section>

      <main> {renderContent()}</main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => dispatch(clearSelectedProduct())}
        />
      )}
    </div>
  )
}

