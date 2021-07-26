import {takeLatest, put, call} from 'redux-saga/effects';
import {request} from '../../../network/request';
import {
  getListingDatafailureAction,
  getListingDataSuccessAction,
} from './actions';

export function* getDailyDataWatcher() {
  try {
    const responsejson = yield call(request, {
      method: 'GET',
      url: 'https://api.corona-zahlen.org/germany/history/cases/7',
    });
    const response = yield responsejson;

    yield put(getListingDataSuccessAction(response.data.data));
  } catch (error) {
    yield put(getListingDatafailureAction(error));
  }
}
