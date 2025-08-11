import StarIcon from "../icons/StarIcon";
import ProgressBar from "../progress-bar/ProgressBar";
import styles from "./ProgressTracker.module.scss";

type ProgressTrackerProps = {
  unlocked: number;
  total: number;
  title: string | undefined;
};

export default function ProgressTracker({
  total,
  unlocked,
  title,
}: ProgressTrackerProps) {
  return (
    <div className={styles.progressTracker}>
      <div className={styles.progressTitleBlock}>
        <StarIcon />
        <p>{title}</p>
        <span>
          <span className={styles.unlockedAchievesAmount}>{unlocked}</span>/
          {total}
        </span>
      </div>
      <ProgressBar total={total} unlocked={unlocked} />
    </div>
  );
}
