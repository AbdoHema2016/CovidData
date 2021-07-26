import {
  GET_DAILY_DATA_ACTION,
  GET_DAILY_DATA_SUCCESS_ACTION,
  GET_DAILY_DATA_FAILURE_ACTION,
  GET_RECOVERY_DATA_ACTION,
  GET_RECOVERY_DATA_SUCCESS_ACTION,
  GET_RECOVERY_DATA_FAILURE_ACTION,
  GET_DEATHS_DATA_SUCCESS_ACTION,
  GET_DEATHS_DATA_FAILURE_ACTION,
  GET_DEATHS_DATA_ACTION,
} from './types';

export const getListingDataAction = () => ({
  type: GET_DAILY_DATA_ACTION,
});
export const getListingDataSuccessAction = (data) => ({
  type: GET_DAILY_DATA_SUCCESS_ACTION,
  payload: data,
});
export const getListingDatafailureAction = (error) => ({
  type: GET_DAILY_DATA_FAILURE_ACTION,
  payload: error,
});

export const getRecoveryDataAction = () => ({
  type: GET_RECOVERY_DATA_ACTION,
});
export const getRecoveryDataSuccessAction = (data) => ({
  type: GET_RECOVERY_DATA_SUCCESS_ACTION,
  payload: data,
});
export const getRecoveryDatafailureAction = (error) => ({
  type: GET_RECOVERY_DATA_FAILURE_ACTION,
  payload: error,
});

export const getDeathsDataAction = () => ({
  type: GET_DEATHS_DATA_ACTION,
});
export const getDeathsDataSuccessAction = (data) => ({
  type: GET_DEATHS_DATA_SUCCESS_ACTION,
  payload: data,
});
export const getDeathsDatafailureAction = (error) => ({
  type: GET_DEATHS_DATA_FAILURE_ACTION,
  payload: error,
});
