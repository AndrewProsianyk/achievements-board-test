"use client";

import useLanguageStore from "@/store/languageStore";
import { ACHIEVES } from "../../../public/data";
import Dropdown from "../dropdown/Dropdown";
import Filter from "../filter/Filter";
import ProgressTracker from "../progress-tracker/ProgressTracker";
import StatCellList from "../stat-cell-list/StatCellList";
import styles from "./MainSection.module.scss";

export default function MainSection() {
  const { t } = useLanguageStore();
  const totalAchieves = ACHIEVES.length;
  const unlockedAchieves = ACHIEVES.filter((a) => a.isUnlocked).length;
  const lockedAchieves = totalAchieves - unlockedAchieves;
  const unlockedByRank = {
    first: ACHIEVES.filter((a) => a.isUnlocked && a.rank === "first").length,
    second: ACHIEVES.filter((a) => a.isUnlocked && a.rank === "second").length,
    third: ACHIEVES.filter((a) => a.isUnlocked && a.rank === "third").length,
  };

  const cellList = [
    { amount: unlockedByRank.first, label: t("stat-section.first-cell-label") },
    {
      amount: unlockedByRank.second,
      label: t("stat-section.second-cell-label"),
    },
    { amount: unlockedByRank.third, label: t("stat-section.third-cell-label") },
    { amount: lockedAchieves, label: t("stat-section.fourth-cell-label") },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{t("headings.main-section")}</h1>
        <p className={styles.subtitle}>{t("sub-headings.main-section")}</p>
      </div>
      <section className={styles.statistics}>
        <div className={styles.statsWrap}>
          <ProgressTracker
            total={totalAchieves}
            unlocked={unlockedAchieves}
            title={t("stat-section.progress-title")}
          />
          <StatCellList cellList={cellList} />
        </div>
      </section>
      <div className={styles.tools}>
        <Filter />
        <Dropdown />
      </div>
    </section>
  );
}
