import { AchieveType } from "@/lib/types";
import AchieveIcon from "../icons/AchieveIcon";
import LockedAchieveIcon from "../icons/LockedAchieveIcon";
import InfoButton from "../info-button/InfoButton";
import styles from "./AchieveCard.module.scss";
import useLanguageStore from "@/store/languageStore";
import CardProgressBar from "../card-progress-bar/CardProgressBar";

type AchieveCardProps = {
  item: AchieveType;
  title: string | undefined;
};

export default function AchieveCard({ item, title }: AchieveCardProps) {
  const { t } = useLanguageStore();
  return (
    <article className={`${styles.card} ${styles[item.rank]}`}>
      <div className={styles.iconWrap}>
        {item.isUnlocked ? <AchieveIcon /> : <LockedAchieveIcon />}
        <InfoButton />
      </div>
      <div className={styles.line}></div>
      <div className={styles.contentWrap}>
        <p className={styles.title}>{t(item.title)}</p>
        {item.description && (
          <p className={styles.description}>{t(item.description)}</p>
        )}
        {item.progressCurrent && item.progressMax && (
          <>
            <div className={styles.progressStatWrap}>
              <p className={styles.progressLabel}>{title}</p>
              <div>
                <span className={styles.currentProgressAmount}>
                  {item.progressCurrent}
                </span>
                /<span>{item.progressMax}</span>
              </div>
            </div>
            <CardProgressBar
              total={item.progressMax}
              current={item.progressCurrent}
            />
          </>
        )}
      </div>
    </article>
  );
}
