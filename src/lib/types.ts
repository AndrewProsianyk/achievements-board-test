export type AchieveType = {
  id: string;
  rank: RankType;
  title: string;
  description?: string;
  progressMax?: number;
  progressCurrent?: number;
  isUnlocked: boolean;
};

export type RankType = "first" | "second" | "third";
