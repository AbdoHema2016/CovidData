import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Style from './style';
import {goBack} from '../../navigation/NavigationService';
import {
  getDeathsDataAction,
  getListingDataAction,
  getRecoveryDataAction,
} from './redux/actions';
import ChartData from './components/ChartData';
import {listingReducer} from './redux/reducer';

function DashBoard() {
  // const dailyData = useSelector(listingReducer);
  const {
    casesData,
    casesDataLoading,
    recoveryDataLoader,
    recoveryData,
    deathDataLoader,
    deathData,
  } = useSelector((state) => state.listingReducer);
  useEffect(() => {
    getListingDataAction();
    getRecoveryDataAction();
    getDeathsDataAction();
  }, []);
  return (
    <ScrollView style={Style.constainer}>
      <ChartData Data={casesData} loading={casesDataLoading} cases={true} />
      <ChartData
        Data={recoveryData}
        loading={recoveryDataLoader}
        recovery={true}
      />
      <ChartData Data={deathData} loading={deathDataLoader} deaths={true} />
    </ScrollView>
  );
}

export default DashBoard;
