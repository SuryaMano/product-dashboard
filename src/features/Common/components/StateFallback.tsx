import styles from "../../../assets/css/StateFallback.module.css";

interface Props {
  message?: string;
}

export default function ErrorMessage({message}: Props) {
  return (
    <div className={styles.wrapper} role="alert">
      <p className={styles.message}>{message}</p>
    </div>
  );
}
