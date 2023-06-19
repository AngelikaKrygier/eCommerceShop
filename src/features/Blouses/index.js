import { Content } from "../../common/Content";

export const Blouses = ({ state, products }) => (
  <Content state={state} title={"Bluzki"} list={products.blouses} />
);
