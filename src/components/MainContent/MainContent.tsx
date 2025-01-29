import { Button } from "../Button/Button";
import { Description } from "../Description/Description";
import styles from "./MainContent.module.scss";

export const MainContent = () => {

  const defaultCards = [
    {
      title: 'Ученикам',
      items: [
        'Конкурс по 16 предметам',
        'Доступные задания для всех учеников',
        'Бесплатные дипломы и сертификаты'
      ]
    },
    {
      title: 'Учителям',
      items: [
        'Бесплатные свидетельства',
        'Бесплатные благодарности',
        'Простое участие'
      ]
    }
  ];

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.title}>
        Тестовое задание для <span>самого лучшего</span> верстальщика
      </h1>
      <section className={styles.mainInfo}>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Низкий оргвзнос</h2>
          <div className={styles.price}>30<span>₽</span></div>
          <Button variant="submit">Подать заявку на участие</Button>
        </div>
        <Description cards={defaultCards} />
      </section>
    </main>
  );
};
