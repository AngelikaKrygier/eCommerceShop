import { ContentContainer } from "../ContentContainer/styled";
import { Tile } from "../Tile";

export const ProductDetails = ({ product }) => (
  <ContentContainer>
    <Tile
      productDetails
      name={product.name}
      imagePath={product.imagePath}
      description={product.description}
      detailedDescription={product.detailedDescription}
      price={product.price}
    />
  </ContentContainer>
);
