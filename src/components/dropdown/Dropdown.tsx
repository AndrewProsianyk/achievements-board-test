"use client";

import useLanguageStore from "@/store/languageStore";
import DropdownIcon from "../icons/DropdownIcon";
import styles from "./Dropdown.module.scss";

export default function Dropdown() {
  const { t } = useLanguageStore();
  return (
    <div className={styles.dropdown}>
      <span className={styles.label}>{t("filter.dropdown-label")}</span>
      <DropdownIcon />
    </div>
  );
}
