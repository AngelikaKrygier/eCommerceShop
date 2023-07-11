import { Content } from "../../../common/Content";

export const Dresses = ({ state, products }) => {
  return (
    <Content
      state={state}
      title={"Sukienki"}
      list={products.dresses}
      productDetailsPath={"/dresses"}
    />
  );
};
