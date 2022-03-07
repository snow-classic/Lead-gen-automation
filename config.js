import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const LOGIN_API = publicRuntimeConfig.LOGIN_API;
