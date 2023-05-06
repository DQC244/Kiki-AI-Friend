import Api, { createNinjasApi } from "api";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import StringFormat from "string-format";

export const getCityList = (cityName: string) => {
  const key = EnvConstant.API_KEY_NINJAS;
  return createNinjasApi(key as string).get(ApiConstant.GET_CITY, { name: cityName, limit: 10 });
};

export const getSuitWithTypeService = (suit?: AppConstant.SUIT_TYPE) => {
  return Api.get(ApiConstant.TAROT_CARD_FILTER, { suit });
};

export const getCardDetailService = (id: number) => {
  return Api.get(StringFormat(ApiConstant.TAROT_CARD_DETAIL, { id }));
};

export const getCardRandomService = (seed: number) => {
  return Api.get(ApiConstant.TAROT_RANDOM, { seed });
};

export const getBirthChart = (data: any) => Api.post(ApiConstant.BIRTH_CHART, data);

export const getBirthChartImage = (data: any) => {
  return Api.get(ApiConstant.BIRTH_CHART_IMAGE, data);
};

export const getTransitChartImage = (data: any) => {
  return Api.get(ApiConstant.TRANSIT_CHART_IMAGE, data);
};

export const getSynastryChartImage = (data: any) => {
  return Api.get(ApiConstant.SYNASTRY_CHART_IMAGE, data);
};
