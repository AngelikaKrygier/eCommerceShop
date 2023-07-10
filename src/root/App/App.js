import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDressById,
  selectDressById,
  selectDresses,
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
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  toDresses,
  toMainPage,
  toPants,
  toShoes,
  toProductsDetails,
  toBlouses,
  toLogin,
} from "../routes";
import { ProductDetails } from "../../features/ProductDetails";
import { Login } from "../../features/Login";

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
          <Route exact path={toLogin()}>
            <Login />
          </Route>
          {/* <Route>
            <ProductDetails exact path={toProductsDetails()} />
          </Route> */}
          <Route exact path={toMainPage()}>
            <MainPage />
          </Route>
          <Route exact path={toDresses()}>
            <Dresses state={state} products={products} />
          </Route>
          <Route exact path={toPants()}>
            <Pants state={state} products={products} />
          </Route>
          <Route exact path={toShoes()}>
            <Shoes state={state} products={products} />
          </Route>
          <Route exact path={toBlouses()}>
            <Blouses state={state} products={products} />
          </Route>
          <Route>
            <Redirect to={toMainPage()}/>
          </Route>
        </ContentContainer>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
