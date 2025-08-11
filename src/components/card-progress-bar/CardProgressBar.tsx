import styles from "./CardProgressBar.module.scss";

type CardProgressBarProps = {
  total: number;
  current: number;
};

export default function CardProgressBar({
  total,
  current,
}: CardProgressBarProps) {
  const currentPercentage =
    total > 0 ? Math.min(Math.max((current / total) * 100, 0), 100) : 0;
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.unlockedProgress}
        style={{ width: `${currentPercentage}%` }}
      ></div>
    </div>
  );
}
