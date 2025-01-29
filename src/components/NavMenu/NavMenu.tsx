import styles from './NavMenu.module.scss';

export const NavMenu = () => {
  const items = [
    { title: 'Прием заявок', date: '11', prefix: 'до', suffix: 'марта' },
    { title: 'Получение заданий', date: '4', suffix: 'марта' },
    { title: 'Внесение ответов', date: '18', prefix: 'до', suffix: 'марта' },
    { title: 'Итоги конкурса', date: '19', suffix: 'марта' }
  ];

  return (
    <nav className={styles.nav}>
      {items.map((item, index) => (
        <div key={index} className={styles.meta}>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.subtitle}>
            {item.prefix && `${item.prefix} `}
            <span className={styles.accent}>{item.date} </span>
            {item.suffix}
          </p>
        </div>
      ))}
    </nav>
  );
};