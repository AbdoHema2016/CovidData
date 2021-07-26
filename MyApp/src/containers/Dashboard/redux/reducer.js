import {
  GET_DAILY_DATA_ACTION,
  GET_DAILY_DATA_SUCCESS_ACTION,
  GET_DAILY_DATA_FAILURE_ACTION,
  GET_RECOVERY_DATA_ACTION,
  GET_RECOVERY_DATA_SUCCESS_ACTION,
  GET_RECOVERY_DATA_FAILURE_ACTION,
  GET_DEATHS_DATA_SUCCESS_ACTION,
  GET_DEATHS_DATA_ACTION,
  GET_DEATHS_DATA_FAILURE_ACTION,
} from './types';

let initialState = {
  casesData: [],
  casesDataLoading: true,
  recoveryData: [],
  recoveryDataLoader: true,
  deathData: [],
  deathDataLoader: true,
  error: '',
};

export const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_DATA_ACTION:
      return {
        ...state,
        casesDataLoading: true,
        error: '',
      };
    case GET_DAILY_DATA_SUCCESS_ACTION:
      return {
        ...state,
        casesData: action.payload,
        casesDataLoading: false,
        error: '',
      };
    case GET_DAILY_DATA_FAILURE_ACTION:
      return {
        ...state,
        casesDataLoading: false,
        error: action.payload,
      };

    case GET_RECOVERY_DATA_ACTION:
      return {
        ...state,
        recoveryDataLoader: true,
      };
    case GET_RECOVERY_DATA_SUCCESS_ACTION:
      return {
        ...state,
        recoveryDataLoader: false,
        recoveryData: action.payload,
      };
    case GET_RECOVERY_DATA_FAILURE_ACTION:
      return {
        ...state,
        recoveryDataLoader: false,
        error: action.payload,
      };

    case GET_DEATHS_DATA_ACTION:
      return {
        ...state,
        deathDataLoading: true,
      };
    case GET_DEATHS_DATA_SUCCESS_ACTION:
      return {
        ...state,
        deathDataLoader: false,
        deathData: action.payload,
      };
    case GET_DEATHS_DATA_FAILURE_ACTION:
      return {
        ...state,
        deathDataLoader: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
