import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;
