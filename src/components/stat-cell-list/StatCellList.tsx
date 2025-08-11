import styles from "./StatCellList.module.scss";

type StatCellType = {
  amount: number;
  label: string | undefined;
};

type StatCellListProps = {
  cellList: StatCellType[];
};

export default function StatCellList({ cellList }: StatCellListProps) {
  return (
    <ul className={styles.cellsList}>
      {cellList.map((item, idx) => {
        return (
          <li key={idx}>
            <StatCell item={item} />
          </li>
        );
      })}
    </ul>
  );
}

function StatCell({ item }: { item: StatCellType }) {
  return (
    <div className={styles.statCell}>
      <span className={styles.amount}>{item.amount}</span>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}
