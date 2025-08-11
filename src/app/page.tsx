import Container from "@/components/container/Container";
import styles from "./page.module.scss";
import MainSection from "@/components/main-section/MainSection";
import { ACHIEVES } from "../../public/data";
import AchievementBlock from "@/components/achievements-block/AchievementBlock";

export default function Home() {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.contentWrap}>
          <MainSection />
          <AchievementBlock list={ACHIEVES} />
        </div>
      </Container>
    </main>
  );
}
