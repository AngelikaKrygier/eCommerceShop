import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getDressById } from "../../../productsSlice";
import { ProductDetails } from "../../../../common/ProductDetails";

export const DressDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => getDressById(state, id));

  return product ? <ProductDetails product={product} /> : "";
};
