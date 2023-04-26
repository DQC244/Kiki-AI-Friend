import apisauce, { ApiResponse, ApisauceConfig } from "apisauce";
import { ApiConstant } from "const";

const DEFAULT_CONFIG: ApisauceConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: { ...ApiConstant.HEADER_DEFAULT },
  timeout: ApiConstant.TIMEOUT,
};

const handleErrorRequest = (response: ApiResponse<IApiResponse>) => {
  if (
    response.status &&
    false === [ApiConstant.STT_OK, ApiConstant.STT_CREATED].includes(response.status)
  ) {
    console.log(response);
  }
};

const Api = apisauce.create(DEFAULT_CONFIG);
Api.addResponseTransform(handleErrorRequest);

export default Api;

export interface IApiResponse {
  status: number;
  data: object;
}

const createInstance = (baseURL: string, apiKey: string) => {
  Api.setBaseURL(baseURL);
  Api.setHeader("X-Api-Key", apiKey);

  return Api;
};

export const createNinjasApi = (apiKey: string) =>
  createInstance(ApiConstant.BASE_URL_NINJAS, apiKey);
