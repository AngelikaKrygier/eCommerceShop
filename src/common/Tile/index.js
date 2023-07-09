import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Description,
  Header,
  Price,
  StyledTile,
  Image,
  Button,
  StyledNavLink,
} from "./styled";

export const Tile = ({
  name,
  imagePath,
  description,
  price,
  productDetails,
  id,
  productDetailsPath,
}) => {

  return (
    <StyledTile productDetails={productDetails}>
      <Image src={imagePath}></Image>
      <Header>{name}</Header>
      <Price>{price}</Price>
      <Description>{description}</Description>
      <StyledNavLink to={`${productDetailsPath}/${id}`}>
        <Button productDetails={productDetails}>
          Zobacz szczegóły produktu
        </Button>
      </StyledNavLink>
    </StyledTile>
  );
};
