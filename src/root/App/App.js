import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsSliceState,
} from "../../features/productsSlice";
import { productsLoading } from "../../features/productsSlice";
import { BackDrop } from "../../common/BackDrop";
import { HeaderBar } from "../../common/HeaderBar";
import { Menu } from "../../common/Menu";
import { Dresses } from "../../features/Dresses";
import { Pants } from "../../features/Pants";
import { Footer } from "../../common/Footer";
import { Shoes } from "../../features/Shoes";
import { Blouses } from "../../features/Blouses";
import { FetchLoading } from "../../common/Content/FetchLoading";

function App() {
  const state = useSelector(selectProductsSliceState).state;
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(productsLoading());
  }, [dispatch]);

  if (!products) {
    return <FetchLoading />;
  }

  return (
    <>
      <HeaderBar />
      <Menu />
      <Dresses state={state} products={products} />
      <Pants state={state} products={products} />
      <Shoes state={state} products={products} />
      <Blouses state={state} products={products} />
      <BackDrop />
      <Footer />
    </>
  );
}

export default App;
