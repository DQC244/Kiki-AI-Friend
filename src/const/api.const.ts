// Common
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const BASE_URL = "https://astro-dev.taureau.ai/api/v1.0";

export const TIMEOUT = 30000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

// API
export const POST_LOGIN = "/login";
export const GET_PROFILE = "/profile";

export const BASE_URL_NINJAS = "https://api.api-ninjas.com/v1";
export const GET_CITY = "/city";

export const TAROT_RANDOM = "/tarot_card_random_multiple";
export const TAROT_CARD_FILTER = "/tarot_card_filter";
export const TAROT_CARD_DETAIL = "/tarot_card/{id}";

export const BIRTH_CHART = "/natal-chart/meaning";
export const BIRTH_CHART_IMAGE = "/natal-chart/image";
export const TRANSIT_CHART_IMAGE = "/transit-chart/image";
export const SYNASTRY_CHART_IMAGE = "/synastry-chart/image";

export const URL_IMAGE_ID = `${BASE_URL}/tarot_card/{id}/image`;

export const ANSWER_SELF = "/answer/self-noauth";
export const ANSWER_POSSIBILITY = "/answer/possibility-noauth";
