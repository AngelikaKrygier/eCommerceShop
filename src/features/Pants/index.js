import { Content } from "../../common/Content";

export const Pants = ({ state, products }) => (
  <Content state={state} title={"Spodnie"} list={products.pants} />
);
