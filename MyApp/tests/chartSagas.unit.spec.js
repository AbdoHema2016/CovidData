import * as api from '../src/network/request';
import {runSaga} from 'redux-saga';
import {getDailyDataWatcher, getDeathDataWatcher, getRecoveryDataWatcher} from '../src/containers/Dashboard/redux/sagas';
import {
    getDeathsDatafailureAction,
    getDeathsDataSuccessAction,
  getListingDatafailureAction,
  getListingDataSuccessAction,
  getRecoveryDatafailureAction,
  getRecoveryDataSuccessAction,
} from '../src/containers/Dashboard/redux/actions';
import expect from 'expect';

describe('Call Listing Saga', () => {
  const mockedCases = {
    data: {
      data: [
        {
          id: 1,
          cases: 20,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 2,
          cases: 1,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 3,
          cases: 40,
          date: '2021-04-10T08:00:00Z',
        },
      ],
    },
  };
  const mockedRecovery = {
    data: {
      data: [
        {
          id: 1,
          cases: 20,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 2,
          cases: 1,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 3,
          cases: 40,
          date: '2021-04-10T08:00:00Z',
        },
      ],
    },
  };
  const mockedDeaths = {
    data: {
      data: [
        {
          id: 1,
          cases: 20,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 2,
          cases: 1,
          date: '2021-04-10T08:00:00Z',
        },
        {
          id: 3,
          cases: 40,
          date: '2021-04-10T08:00:00Z',
        },
      ],
    },
  };
  it('should load cases and handle success', async () => {
    const dispatchedActions = [];

    api.request = jest.fn(() => Promise.resolve(mockedCases));
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getDailyDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(
      getListingDataSuccessAction(mockedCases.data.data),
    );
  });
  it('should handle cases failures', async () => {
    const dispatchedActions = [];
    const error = 'someError';
    api.request = jest.fn(() => Promise.reject(error));
    global.console.error = jest.fn();
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getDailyDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(getListingDatafailureAction(error));
  });

  it('should load recovery and handle success', async () => {
    const dispatchedActions = [];

    api.request = jest.fn(() => Promise.resolve(mockedRecovery));
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getRecoveryDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(
      getRecoveryDataSuccessAction(mockedRecovery.data.data),
    );
  });
  it('should handle recovery failures', async () => {
    const dispatchedActions = [];
    const error = 'someError';
    api.request = jest.fn(() => Promise.reject(error));
    global.console.error = jest.fn();
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getRecoveryDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(getRecoveryDatafailureAction(error));
  });
  it('should load deaths and handle success', async () => {
    const dispatchedActions = [];

    api.request = jest.fn(() => Promise.resolve(mockedDeaths));
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getDeathDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(
      getDeathsDataSuccessAction(mockedDeaths.data.data),
    );
  });
  it('should deaths recovery failures', async () => {
    const dispatchedActions = [];
    const error = 'someError';
    api.request = jest.fn(() => Promise.reject(error));
    global.console.error = jest.fn();
    const fakeStore = {
      getState: () => ({casesData: []}),
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getDeathDataWatcher).done;
    expect(dispatchedActions[0]).toEqual(getDeathsDatafailureAction(error));
  });
});
