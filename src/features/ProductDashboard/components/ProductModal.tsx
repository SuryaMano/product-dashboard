import { useEffect, useRef } from "react";
import type { Product } from "../product.types";
import { formatPrice } from "../../../utils/format";
import styles from "../../../assets/css/ProductModal.module.css";

interface Props {
  product: Product;
  onClose: () => void;
}

// Detail view for a single product, shown as an accessible dialog.
// Closes on Escape or a click on the backdrop, and moves focus to the close
// button so keyboard users land somewhere sensible.
export default function ProductModal({ product, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const savings = product.price - product.discountedPrice;

  return (
    // Clicking the backdrop closes the modal; clicks inside are stopped below.
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          ref={closeButtonRef}
          className={styles.close}
          onClick={onClose}
          aria-label="Close details"
        >
          ×
        </button>

        <div className={styles.content}>
          <img className={styles.image} src={product.image} alt={product.title} />

          <div className={styles.details}>
            <span className={styles.category}>{product.category}</span>
            <h2 id="modal-title" className={styles.title}>
              {product.title}
            </h2>

            <div className={styles.priceRow}>
              <span className={styles.price}>{formatPrice(product.discountedPrice)}</span>
              {savings > 0 && (
                <span className={styles.badge}>
                  Save {formatPrice(savings)} ({Math.round(product.discountRate * 100)}% off)
                </span>
              )}
            </div>

            <p className={styles.rating}>
              ★ {product.rating.rate} · {product.rating.count} reviews
            </p>

            <p className={styles.description}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
