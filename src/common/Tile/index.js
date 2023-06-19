import {
  Description,
  Header,
  Price,
  StyledTile,
  Image,
  Button,
} from "./styled";

export const Tile = ({ name, imagePath, description, price }) => (
  <StyledTile>
    <Header>{name}</Header>
    <Image src={imagePath}></Image>
    <Description>{description}</Description>
    <Price>{price}</Price>
    <Button>Zobacz szczegóły produktu</Button>
  </StyledTile>
);
