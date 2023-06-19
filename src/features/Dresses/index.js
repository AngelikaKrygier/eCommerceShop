import { Content } from "../../common/Content";

export const Dresses = ({ state, products }) => (
  <Content state={state} title={"Sukienki"} list={products.dresses} />
);
