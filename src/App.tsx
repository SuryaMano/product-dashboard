import Loader from "./features/Common/components/Loader";
import StateFallback from "./features/Common/components/StateFallback";
import ProductGrid from "./features/ProductDashboard/components/ProductGrid";
import SearchBar from './features/ProductDashboard/components/SearchBar';
import { useProducts } from "./features/ProductDashboard/hooks/useProduct";
import styles from "./app.module.css";

export default function App() {
  const { isLoading, isError, products } = useProducts();

  function renderContent() {
    if (isLoading) return <Loader label="Loading Products..." />;
    if (isError) return <StateFallback message="Unable to load data. Please try again later." />;
    if (products.length === 0) return <StateFallback message="No results found" />;
    return (
      <ProductGrid products={products} />
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
      </section>

      {renderContent()}

      <ProductGrid products={products} />
    </div>
  )
}

