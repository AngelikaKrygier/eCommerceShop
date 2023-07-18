import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { getPantsById } from "../../../productsSlice";
import { ProductDetails } from "../../../../common/ProductDetails";

export const PantsDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) => getPantsById(state, id));
  console.log(product);

  return product ? <ProductDetails product={product} /> : "";
};
