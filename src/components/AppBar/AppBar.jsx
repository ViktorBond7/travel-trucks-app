import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.appBar}>
      <Container>
        <div className={css.appBarContainer}>
          <div className={css.logo}>
            <Logo />
          </div>
          <nav className={css.navigation}>
            <Navigation />
          </nav>
          <div className={css.spacer}></div>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
