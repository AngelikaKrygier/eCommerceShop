import { watchFetchProducts } from "../features/productsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
