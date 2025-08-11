import InfoIcon from "../icons/InfoIcon";
import styles from "./InfoButton.module.scss";

export default function InfoButton({}) {
  return (
    <button className={styles.infoButton}>
      <InfoIcon />
    </button>
  );
}
