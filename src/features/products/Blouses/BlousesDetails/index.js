import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getBlousesById } from "../../../productsSlice";
import { ProductDetails } from "../../../../common/ProductDetails";

export const BlousesDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => getBlousesById(state, id));
  console.log(product);

  return product ? <ProductDetails product={product} /> : "";
};
