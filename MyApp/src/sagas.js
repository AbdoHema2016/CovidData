import {all, fork} from 'redux-saga/effects';
import {
  getDailyDataWatcher,
  getDeathDataWatcher,
  getRecoveryDataWatcher,
} from './containers/Dashboard/redux/sagas';

export function* rootSaga() {
  yield all([
    fork(getDailyDataWatcher),
    fork(getRecoveryDataWatcher),
    fork(getDeathDataWatcher),
  ]);
}
