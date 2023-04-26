import { ApiResponse } from "apisauce";
import { put, call } from "redux-saga/effects";
import { AppService } from "services";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import { AppActions } from "redux-store";

export function* getCardListSaga(action: { type: string; data: AppConstant.SUIT_TYPE }) {
  try {
    const id = action.data;
    const response: ApiResponse<any> = yield call(AppService.getSuitWithTypeService, id);

    const responseData = response.data;

    if (response.status === ApiConstant.STT_OK) {
      yield put(AppActions.appSuccess({ cardListSuit: responseData }));
    } else {
      yield put(AppActions.appFailure(responseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(AppActions.appFailure(error));
  }
}
