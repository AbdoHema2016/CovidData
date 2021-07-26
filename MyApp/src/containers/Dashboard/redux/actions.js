import {
  GET_DAILY_DATA_ACTION,
  GET_DAILY_DATA_SUCCESS_ACTION,
  GET_DAILY_DATA_FAILURE_ACTION,
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
