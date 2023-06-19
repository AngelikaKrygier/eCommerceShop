import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducers from "../features/productsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
