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
  // tarot
  getTarotCard: ["data"],
  getTarotCardDetail: ["data"],
  getTarotCardRandom: ["data"],

  // birth chart
  getBirthChart: ["data"],
  getBirthChartImage: ["data"],

  // transit chart
  getTransitChartImage: ["data"],

  // synastry chart
  getSynastryChartImage: ["data"],
  getSynastryChart: ["data"],

  appSuccess: ["data"],
  appFailure: ["error", "data"],
  appSet: ["data"],
  appReset: [],
});

/* ------------- Initial State ------------- */
export interface IAppRedux extends IReduxStateCommon {
  // tarot
  cardListSuit: Array<any>;
  cardDetail: any;

  // birth Chart
  birthChart: {
    en: any;
    vi: any;
  };
  birthChartImage: any;

  transitChartImage: any;
  transitChartData: any;

  synastryChartImage: any;
  synastryChartData: {
    myInfo: any;
    partnerInfo: any;
  };
}
export const INITIAL_STATE: IAppRedux = {
  ...REDUX_STATE,

  cardListSuit: [],
  cardDetail: {},

  birthChart: {
    en: {},
    vi: {},
  },
  birthChartImage: "",

  transitChartImage: "",
  transitChartData: {},

  synastryChartImage: "",
  synastryChartData: {
    myInfo: {},
    partnerInfo: {},
  },
};

/* ------------- Selector ------------- */
export const Selector = {
  // Get suit info
  getSuitList: (state: IAppReduxState) => state.appRedux.cardListSuit,
  getCardDetail: (state: IAppReduxState) => state.appRedux.cardDetail,

  // get birth
  getBirthChart: (state: IAppReduxState) => state.appRedux.birthChart,
  getBirthChartImage: (state: IAppReduxState) => state.appRedux.birthChartImage,

  getTransitChartImage: (state: IAppReduxState) => state.appRedux.transitChartImage,
  getTransitChartData: (state: IAppReduxState) => state.appRedux.transitChartData,

  getSynastryChartImage: (state: IAppReduxState) => state.appRedux.synastryChartImage,
  getSynastryChartData: (state: IAppReduxState) => state.appRedux.synastryChartData,
};

/* ------------- Reducers ------------- */
const request = (state = INITIAL_STATE) => requestReducerFunc(state);

const success = (state = INITIAL_STATE, action: object) => successReducerFunc(state, action);

const failure = (state = INITIAL_STATE, action: object) => failureReducerFunc(state, action);

const reset = () => resetReducerFunc(INITIAL_STATE);

/* ------------- Mapping ------------- */
const HANDLERS = {
  [Types.GET_TAROT_CARD]: request,
  [Types.GET_TAROT_CARD_RANDOM]: request,
  [Types.GET_TAROT_CARD_DETAIL]: request,

  [Types.GET_BIRTH_CHART]: request,
  [Types.GET_BIRTH_CHART_IMAGE]: request,

  [Types.GET_TRANSIT_CHART_IMAGE]: request,

  [Types.GET_SYNASTRY_CHART_IMAGE]: request,
  [Types.GET_SYNASTRY_CHART]: request,

  [Types.APP_SUCCESS]: success,
  [Types.APP_FAILURE]: failure,
  [Types.APP_SET]: success,
  [Types.APP_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

export default Creators;
