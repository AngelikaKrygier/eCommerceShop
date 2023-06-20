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
import { MainPage } from "../../features/MainPage";
import { ContentContainer } from "../../common/ContentContainer/styled";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { toDresses, toMainPage, toPants, toShoes, toTop } from "../routes";

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
    <HashRouter>
      <HeaderBar />
      <Menu />
      <BackDrop />

      <Switch>
        <ContentContainer>
          <Route path={toMainPage()}>
            <MainPage />
          </Route>
          <Route path={toDresses()}>
            <Dresses state={state} products={products} />
          </Route>
          <Route path={toPants()}>
            <Pants state={state} products={products} />
          </Route>
          <Route path={toShoes()}>
            <Shoes state={state} products={products} />
          </Route>
          <Route path={toTop()}>
            <Blouses state={state} products={products} />
          </Route>
          <Route>
            <Redirect to={toMainPage()} />
          </Route>
        </ContentContainer>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
