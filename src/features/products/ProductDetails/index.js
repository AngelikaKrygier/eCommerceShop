import { useParams, useLocation } from "react-router-dom/cjs/react-router-dom";
import { ContentContainer } from "../../common/ContentContainer/styled";
import { Tile } from "../../common/Tile";
import { useSelector } from "react-redux";
import { getDressById } from "../productsSlice";

export const ProductDetails = () => {
  const params = useParams();
  console.log(params);



  const dress = [];

  return dress ? (
    <ContentContainer>
      <Tile
        productDetails
        name={dress.name}
        imagePath={dress.imagePath}
        description={dress.description}
        price={dress.price}
      />
    </ContentContainer>
  ) : (
    ""
  );
};
