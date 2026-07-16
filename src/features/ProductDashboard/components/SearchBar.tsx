import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSearchTerm } from "../../../store/dashboardSlice";
import styles from "../../../assets/css/SearchBar.module.css";

export default function SearchBar() {
  const searchTerm = useAppSelector((state: any) => state.dashboard.searchTerm);
  const dispatch = useAppDispatch();

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
        onChange={(event) => dispatch(setSearchTerm(event.target.value))}
      />
    </div>
  );
}
