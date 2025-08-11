"use client";

import { useEffect, useRef, useState } from "react";
import AchieveCard from "../achieve-card/AchieveCard";
import styles from "./AchieveListSection.module.scss";
import Bullets from "../bullets/Bullets";
import { AchieveType } from "@/lib/types";
import useLanguageStore from "@/store/languageStore";

type AchieveListSectionProps = {
  title: string | undefined;
  amount: number;
  list: AchieveType[];
  rows?: 1 | 2;
};

export default function AchieveListSection({
  title,
  amount,
  list,
  rows = 2,
}: AchieveListSectionProps) {
  const [activeBullet, setActiveBullet] = useState(0);
  const cardListRef = useRef<HTMLUListElement>(null);
  const { t } = useLanguageStore();

  useEffect(() => {
    const cardList = cardListRef.current;
    if (!cardList) return;

    const handleScroll = () => {
      const scrollLeft = cardList.scrollLeft;
      const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

      if (maxScrollLeft === 0) {
        setActiveBullet(0);
        return;
      }
      const sectionWidth = maxScrollLeft / 3;
      let currentBullet = Math.floor(scrollLeft / sectionWidth);

      currentBullet = Math.max(0, Math.min(currentBullet, 3));

      if (scrollLeft >= maxScrollLeft - 10) {
        currentBullet = 3;
      }

      setActiveBullet(currentBullet);
    };

    cardList.addEventListener("scroll", handleScroll);

    return () => {
      cardList.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardListClasses = `${styles.cardList} ${
    rows === 1 ? styles.oneRow : styles.twoRows
  }`;

  return (
    <section className={styles.section}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.amount}>{amount}</span>
      </div>
      <ul className={cardListClasses} ref={cardListRef}>
        {list?.map((item) => {
          return (
            <li key={item.id}>
              <AchieveCard item={item} title={t("card.title")} />
            </li>
          );
        })}
      </ul>
      <Bullets activeBullet={activeBullet} totalBullets={4} />
    </section>
  );
}
