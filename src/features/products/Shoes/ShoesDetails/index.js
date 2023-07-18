import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getShoesById } from "../../../productsSlice";
import { ProductDetails } from "../../../../common/ProductDetails";

export const ShoesDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => getShoesById(state, id));
  console.log(product);

  return product ? <ProductDetails product={product} /> : "";
};
