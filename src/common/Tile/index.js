import { Gallery } from "./Gallery";
import {
  Description,
  Header,
  Price,
  StyledTile,
  Image,
  Button,
  StyledNavLink,
  MiniatureImagesWrapper,
  MiniatureImage,
} from "./styled";

export const Tile = ({
  name,
  imagePath,
  description,
  detailedDescription,
  price,
  productDetails,
  id,
  productDetailsPath,
  images,
}) => {
  return (
    <StyledTile productDetails={productDetails}>
      <Image src={imagePath} productDetails={productDetails}></Image>
      <Header productDetails={productDetails}>{name}</Header>
      <Price productDetails={productDetails}>{price}</Price>
      {productDetails ? (
        <Description productDetails={productDetails}>
          {detailedDescription}
        </Description>
      ) : (
        <Description>{description}</Description>
      )}
      <StyledNavLink to={`${productDetailsPath}/${id}`}>
        <Button productDetails={productDetails}>
          Zobacz szczegóły produktu
        </Button>
      </StyledNavLink>
      {productDetails ? <Gallery images={images}/> : ""}
    </StyledTile>
  );
};
