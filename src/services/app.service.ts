import { createNinjasApi } from "api";
import { ApiConstant, EnvConstant } from "const";

export const getCityList = (cityName: string) => {
  const key = EnvConstant.API_KEY_NINJAS;
  return createNinjasApi(key as string).get(ApiConstant.GET_CITY, { name: cityName, limit: 30 });
};
