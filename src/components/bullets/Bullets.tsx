import styles from "./Bullets.module.scss";

type BulletsProps = {
  totalBullets: number;
  activeBullet: number;
};

export default function Bullets({ totalBullets, activeBullet }: BulletsProps) {
  return (
    <div className={styles.bulletsContainer}>
      {Array.from({ length: totalBullets }, (_, index) => (
        <span
          key={index}
          className={`${styles.bullet} ${
            index === activeBullet ? styles.active : ""
          }`}
        />
      ))}
    </div>
  );
}
