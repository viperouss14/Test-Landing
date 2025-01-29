import styles from "./Header.module.scss";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { NavMenu } from "../NavMenu/NavMenu";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo text="Логотип" /> 
      <NavMenu />
      <Button variant="login">Вход в кабинет</Button>
    </header>
  );
};
