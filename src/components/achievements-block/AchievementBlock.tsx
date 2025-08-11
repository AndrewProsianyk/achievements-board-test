"use client";

import { AchieveType } from "@/lib/types";
import AchieveListSection from "../achieve-list-section/AchieveListSection";
import useLanguageStore from "@/store/languageStore";

export default function AchievementBlock({ list }: { list: AchieveType[] }) {
  const { t } = useLanguageStore();
  const totalAchieves = list.length;

  return (
    <>
      <AchieveListSection
        list={list}
        title={t("headings.platform-achieves")}
        amount={totalAchieves}
      />
      <AchieveListSection
        list={list}
        title={t("headings.specialists-achieves")}
        amount={totalAchieves}
        rows={1}
      />
    </>
  );
}
