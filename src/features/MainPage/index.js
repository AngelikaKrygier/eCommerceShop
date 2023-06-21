import { Container, Image } from "./styled";
import firstImage from "../../images/Bestsellery.png";
import secondImage from "../../images/nowosci.png";

export const MainPage = () => (
  <Container>
    <Image src={firstImage} />
    <Image additionalStyles src={secondImage} />
  </Container>
);
