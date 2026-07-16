import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSortKey, SORT_OPTIONS, toggleSortDirection } from "../../../store/dashboardSlice";
import type { SortKey } from "../product.types";
import styles from "../../../assets/css/SortControls.module.css";

export default function SortControls() {
  const sortKey = useAppSelector((state: any) => state.dashboard.sortKey);
  const sortDirection = useAppSelector((state: any) => state.dashboard.sortDirection);
  const dispatch = useAppDispatch();
  const isAscending = sortDirection === "asc";

  return (
    <div className={styles.wrapper}>
      <div className={styles.field}>
        <label htmlFor="sort-key" className={styles.label}>
          Sort by
        </label>
        <select
          id="sort-key"
          className={styles.select}
          value={sortKey}
          onChange={(event) => dispatch(setSortKey(event.target.value as SortKey))}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        className={styles.direction}
        onClick={() => dispatch(toggleSortDirection())}
        aria-label={`Sort ${isAscending ? "ascending" : "descending"}, click to reverse`}
      >
        {isAscending ? "Ascending ↑" : "Descending ↓"}
      </button>
    </div>
  );
}
