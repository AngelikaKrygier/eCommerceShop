import { Content } from "../../common/Content";

export const Shoes = ({ state, products }) => (
  <Content state={state} title={"Buty"} list={products.shoes} />
);
