import styles from "../../../assets/css/Loader.module.css";

interface Props {
  label?: string;
}

export default function Loader({label}: Props) {
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
