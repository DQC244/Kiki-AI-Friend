import { createActions, createReducer } from "reduxsauce";
import {
  IReduxStateCommon,
  REDUX_STATE,
  requestReducerFunc,
  failureReducerFunc,
  successReducerFunc,
  resetReducerFunc,
} from "./redux-structure";
import { IAppReduxState } from "redux-store";

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
  getTarotCard: ["data"],

  appSuccess: ["data"],
  appFailure: ["error", "data"],
  appSet: ["data"],
  appReset: [],
});

/* ------------- Initial State ------------- */
export interface IAppRedux extends IReduxStateCommon {
  //
  cardListSuit: Array<any>;
}
export const INITIAL_STATE: IAppRedux = {
  ...REDUX_STATE,

  cardListSuit: [],
};

/* ------------- Selector ------------- */
export const Selector = {
  // Get suit info

  getSuitList: (state: IAppReduxState) => state.appRedux.cardListSuit,
};

/* ------------- Reducers ------------- */
const request = (state = INITIAL_STATE) => requestReducerFunc(state);

const success = (state = INITIAL_STATE, action: object) => successReducerFunc(state, action);

const failure = (state = INITIAL_STATE, action: object) => failureReducerFunc(state, action);

const reset = () => resetReducerFunc(INITIAL_STATE);

/* ------------- Mapping ------------- */
const HANDLERS = {
  [Types.GET_TAROT_CARD]: request,

  [Types.APP_SUCCESS]: success,
  [Types.APP_FAILURE]: failure,
  [Types.APP_SET]: success,
  [Types.APP_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

export default Creators;
