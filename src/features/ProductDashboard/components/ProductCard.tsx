import { memo } from "react";
import styles from "../../../assets/css/ProductCard.module.css";
import type { Product } from "../types";
import { formatPrice } from "../../../utils/format";

interface Props {
  product: Product;
}

/**
 * Product card wrapped in memo because the grid can re-render on
 * every keystroke while the individual cards rarely change
 */

function ProductCard({ product }: Props) {
  const hasDiscount = product.discountedPrice < product.price;
  return (
    <li className={styles.card}>
      <div>
        <img className={styles.image} src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.discountedPrice)}</span>
            {hasDiscount && (
              <span className={styles.original}>{formatPrice(product.price)}</span>
            )}
          </div>

        <span className={styles.rating}>
          ★ {product.rating.rate}
          <span className={styles.ratingCount}>({product.rating.count})</span>
        </span>
      </div>
    </li>
  );
}

export default memo(ProductCard);
