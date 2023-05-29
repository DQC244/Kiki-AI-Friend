/**
 * Saga index: connects action type and saga
 */

import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AppTypes } from "redux-store";

/* ------------- Sagas ------------- */
import {
  getBirthChartImageSaga,
  getBirthChartSaga,
  getCardDetailSaga,
  getCardListSaga,
  getCardRandomSaga,
  getSynastryChartImageSaga,
  getSynastryChartSaga,
  getTransitChartImageSaga,
} from "./app.saga";

/* ------------- Connect Types To Sagas ------------- */
function* rootSaga() {
  yield all([
    // Account setting
    takeLatest(AppTypes.GET_TAROT_CARD, getCardListSaga),
    takeLatest(AppTypes.GET_TAROT_CARD_RANDOM, getCardRandomSaga),
    takeLatest(AppTypes.GET_TAROT_CARD_DETAIL, getCardDetailSaga),

    takeLatest(AppTypes.GET_BIRTH_CHART, getBirthChartSaga),
    takeLatest(AppTypes.GET_BIRTH_CHART_IMAGE, getBirthChartImageSaga),

    takeLatest(AppTypes.GET_TRANSIT_CHART_IMAGE, getTransitChartImageSaga),

    takeLatest(AppTypes.GET_SYNASTRY_CHART_IMAGE, getSynastryChartImageSaga),
    takeLatest(AppTypes.GET_SYNASTRY_CHART, getSynastryChartSaga),
  ]);
}

export default rootSaga;
