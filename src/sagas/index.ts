/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AppTypes } from "redux-store";

/* ------------- Sagas ------------- */
import { getCardListSaga } from "./app.saga";

/* ------------- Connect Types To Sagas ------------- */
function* rootSaga() {
  yield all([
    // Account setting
    takeLatest(AppTypes.GET_TAROT_CARD, getCardListSaga),
  ]);
}

export default rootSaga;
