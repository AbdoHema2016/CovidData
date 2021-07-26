import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Style from './style';
import {goBack} from '../../navigation/NavigationService';
import {getListingDataAction} from './redux/actions';
import DailyData from './components/DailyData';
import {listingReducer} from './redux/reducer';

function DashBoard() {
  // const dailyData = useSelector(listingReducer);
  const {listingData} = useSelector((state) => state.listingReducer);
  useEffect(() => {
    getListingDataAction();
  }, []);
  const onCrossPress = () => {
    goBack();
  };
  return (
    <ScrollView style={Style.constainer}>
      {listingData.length > 0 && <DailyData dailyData={listingData} />}
    </ScrollView>
  );
}

export default DashBoard;
