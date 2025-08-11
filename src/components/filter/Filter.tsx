"use client";

import { useState } from "react";
import styles from "./Filter.module.scss";
import useLanguageStore from "@/store/languageStore";

type FilterItemProps = {
  item: {
    number: string;
    label: string | undefined;
  };
  isActive: boolean;
  onClick: () => void;
};

export default function Filter() {
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const { t } = useLanguageStore();

  const filterItems = [
    {
      number: "01",
      label: t("filter.first-item"),
    },
    {
      number: "02",
      label: t("filter.second-item"),
    },
    {
      number: "03",
      label: t("filter.third-item"),
    },
  ];

  return (
    <div className={styles.filterBlock}>
      {filterItems.map((item, idx) => {
        return (
          <FilterItem
            key={idx}
            item={item}
            isActive={idx === activeFilterIndex}
            onClick={() => setActiveFilterIndex(idx)}
          />
        );
      })}
    </div>
  );
}

function FilterItem({ item, isActive, onClick }: FilterItemProps) {
  return (
    <div
      className={`${styles.filterItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.number}>{item.number}</span>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}
