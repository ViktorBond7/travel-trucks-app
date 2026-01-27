import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <Container>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Button>View Now</Button>
      </Container>
    </div>
  );
};

export default HomePage;
