import { useState } from "react";
import styles from "../../../assets/css/SearchBar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.wrapper}>
      <label htmlFor="product-search" className={styles.label}>
        Search products
      </label>
      <input
        id="product-search"
        type="search"
        className={styles.input}
        placeholder="Search by title…"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}
