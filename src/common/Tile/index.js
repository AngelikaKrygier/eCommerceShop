import {
  Description,
  Header,
  Prise,
  StyledTile,
  Image,
  Button,
} from "./styled";

export const Tile = ({ name, imagePath, description, prise }) => (
  <StyledTile>
    <Header>{name}</Header>
    <Image src={imagePath}></Image>
    <Description>{description}</Description>
    <Prise>{prise}</Prise>
    <Button>Zobacz szczegóły produktu</Button>
  </StyledTile>
);
