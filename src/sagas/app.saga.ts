import { ApiResponse } from "apisauce";
import { put, call, all } from "redux-saga/effects";
import { AppService } from "services";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import { AppActions } from "redux-store";

export function* getCardListSaga(action: { type: string; data: AppConstant.SUIT_TYPE }) {
  try {
    const id = action.data;
    const [responseEn, responseVi]: Array<ApiResponse<any>> = yield all([
      call(AppService.getSuitWithTypeService, id, "en"),
      call(AppService.getSuitWithTypeService, id, "vi"),
    ]);
    const responseEnData = responseEn.data;
    const responseViData = responseVi.data;

    if (responseEnData.success && responseViData.success) {
      yield put(
        AppActions.appSuccess({
          cardListSuit: { en: responseEnData.data, vi: responseViData.data },
        }),
      );
    } else {
      yield put(AppActions.appFailure(responseEnData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}

export function* getCardDetailSaga(action: { type: string; data: number }) {
  try {
    const id = action.data;
    const [responseEn, responseVi]: Array<ApiResponse<any>> = yield all([
      call(AppService.getCardDetailService, id),
      call(AppService.getCardDetailService, Number(id) + 78),
    ]);
    const responseEnData = responseEn.data;
    const responseViData = responseVi.data;

    if (responseEn.status === ApiConstant.STT_OK && responseVi.status === ApiConstant.STT_OK) {
      yield put(
        AppActions.appSuccess({
          cardDetail: {
            en: responseEnData.data,
            vi: responseViData.data,
          },
        }),
      );
    } else {
      yield put(AppActions.appFailure(responseEnData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}

export function* getCardRandomSaga(action: { type: string; data: number }) {
  try {
    const seed = action.data;
    const response: ApiResponse<any> = yield call(AppService.getCardRandomService, seed);
    const responseData = response.data;

    if (response.status === ApiConstant.STT_OK) {
      yield put(AppActions.appSuccess({ cardListRandom: responseData.data }));
    } else {
      yield put(AppActions.appFailure(responseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}

export function* getBirthChartSaga(action: { type: string; data: any }) {
  try {
    const data = action.data;
    const [responseEng, responseVi]: Array<ApiResponse<any>> = yield all([
      call(AppService.getBirthChart, { ...data, language: "en" }),
      call(AppService.getBirthChart, { ...data, language: "vi" }),
    ]);
    const responseDataEng = responseEng.data;
    const responseDataVi = responseVi.data;

    if (responseEng.status === ApiConstant.STT_OK && responseVi.status === ApiConstant.STT_OK) {
      yield put(
        AppActions.appSuccess({
          birthChart: { en: responseDataEng.data, vi: responseDataVi.data },
        }),
      );
    } else {
      yield put(AppActions.appFailure(responseDataEng));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}

export function* getBirthChartImageSaga(action: { type: string; data: any }) {
  try {
    const data = action.data;
    const response: ApiResponse<any> = yield call(AppService.getBirthChartImage, data);

    if (response.status === ApiConstant.STT_OK) {
      const endpoint = ApiConstant.BASE_URL + ApiConstant.BIRTH_CHART_IMAGE;
      const params = { ...data };
      const queryString = new URLSearchParams(params).toString();
      const fullEndpoint = `${endpoint}?${queryString}`;
      yield put(AppActions.appSuccess({ birthChartImage: fullEndpoint }));
    } else {
      yield put(AppActions.appFailure(response));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}
export function* getTransitChartImageSaga(action: { type: string; data: any }) {
  try {
    const data = action.data;
    const response: ApiResponse<any> = yield call(AppService.getTransitChartImage, data);

    if (response.status === ApiConstant.STT_OK) {
      const endpoint = ApiConstant.BASE_URL + ApiConstant.TRANSIT_CHART_IMAGE;
      const params = { ...data };
      const queryString = new URLSearchParams(params).toString();
      const fullEndpoint = `${endpoint}?${queryString}`;
      yield put(AppActions.appSuccess({ transitChartImage: fullEndpoint, transitChartData: data }));
    } else {
      yield put(AppActions.appFailure(response));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}
export function* getSynastryChartImageSaga(action: { type: string; data: any }) {
  try {
    const data = action.data;
    const response: ApiResponse<any> = yield call(AppService.getSynastryChartImage, data);

    if (response.status === ApiConstant.STT_OK) {
      const endpoint = ApiConstant.BASE_URL + ApiConstant.SYNASTRY_CHART_IMAGE;
      const params = { ...data };
      const queryString = new URLSearchParams(params).toString();
      const fullEndpoint = `${endpoint}?${queryString}`;
      yield put(AppActions.appSuccess({ synastryChartImage: fullEndpoint }));
    } else {
      yield put(AppActions.appFailure(response));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}

export function* getSynastryChartSaga(action: {
  type: string;
  data: {
    myInfo: any;
    partnerInfo: any;
  };
}) {
  try {
    const data = action.data;
    const [myResponse, partnerResponse]: [ApiResponse<any>, ApiResponse<any>] = yield all([
      call(AppService.getBirthChart, data.myInfo),
      call(AppService.getBirthChart, data.partnerInfo),
    ]);
    const myResponseData = myResponse.data;
    const partnerResponseData = partnerResponse.data;

    if (myResponse.status === ApiConstant.STT_OK && partnerResponse.status === ApiConstant.STT_OK) {
      yield put(
        AppActions.appSuccess({
          synastryChartData: {
            myInfo: myResponseData.data,
            partnerInfo: partnerResponseData.data,
          },
        }),
      );
    } else {
      yield put(AppActions.appFailure(myResponseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}
