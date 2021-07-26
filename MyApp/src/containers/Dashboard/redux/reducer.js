import {
  GET_DAILY_DATA_ACTION,
  GET_DAILY_DATA_SUCCESS_ACTION,
  GET_DAILY_DATA_FAILURE_ACTION,
} from './types';

let initialState = {
  listingData: [],
  dailyDataLoading: true,
  error: '',
};

export const listingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAILY_DATA_ACTION:
      return {
        ...state,
        dailyDataLoading: true,
        error: '',
      };
    case GET_DAILY_DATA_SUCCESS_ACTION:
      return {
        ...state,
        listingData: action.payload,
        dailyDataLoading: false,
        error: '',
      };
    case GET_DAILY_DATA_FAILURE_ACTION:
      return {
        ...state,
        dailyDataLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
