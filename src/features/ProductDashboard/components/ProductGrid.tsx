import ProductCard from "./ProductCard";
import styles from "../../../assets/css/ProductGrid.module.css";
import type { Product } from "../product.types";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

/**
 * Responsive grid of product cards
 */

export default function ProductGrid({ products, onSelect }: Props) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect}/>
      ))}
    </ul>
  );
}
