import {all, fork} from 'redux-saga/effects';
import {getDailyDataWatcher} from './containers/Dashboard/redux/sagas';

export function* rootSaga() {
  yield all([fork(getDailyDataWatcher)]);
}
