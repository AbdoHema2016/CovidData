import {takeLatest, put, call} from 'redux-saga/effects';
import {request} from '../../../network/request';
import {
  getDeathsDatafailureAction,
  getDeathsDataSuccessAction,
  getListingDatafailureAction,
  getListingDataSuccessAction,
  getRecoveryDatafailureAction,
  getRecoveryDataSuccessAction,
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
export function* getRecoveryDataWatcher() {
  try {
    const recoveryData = yield call(request, {
      method: 'GET',
      url: 'https://api.corona-zahlen.org/germany/history/recovered/7',
    });
    yield put(getRecoveryDataSuccessAction(recoveryData.data.data));
  } catch (error) {
    yield put(getRecoveryDatafailureAction(error));
  }
}

export function* getDeathDataWatcher() {
  try {
    const deathData = yield call(request, {
      method: 'GET',
      url: 'https://api.corona-zahlen.org/germany/history/deaths/7',
    });
    yield put(getDeathsDataSuccessAction(deathData.data.data));
  } catch (error) {
    yield put(getDeathsDatafailureAction(error));
  }
}
