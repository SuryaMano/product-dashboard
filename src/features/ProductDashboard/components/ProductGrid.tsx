import ProductCard from "./ProductCard";
import styles from "../../../assets/css/ProductGrid.module.css";
import type { ApiProduct } from "../types";

interface Props {
  products: ApiProduct[];
}

/**
 * Responsive grid of product cards
 */

export default function ProductGrid({ products }: Props) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </ul>
  );
}
