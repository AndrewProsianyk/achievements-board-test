import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  unlocked: number;
  total: number;
};

export default function ProgressBar({ unlocked, total }: ProgressBarProps) {
  const unlockedPercentage =
    total > 0 ? Math.min(Math.max((unlocked / total) * 100, 0), 100) : 0;
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.unlockedProgress}
        style={{ width: `${unlockedPercentage}%` }}
      ></div>
      <div className={styles.totalProgress}></div>
    </div>
  );
}
