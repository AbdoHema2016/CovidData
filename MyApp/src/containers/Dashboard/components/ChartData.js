import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {formatDateLocal} from '../../../utilities/misc';
import {dateFormats} from '../../../utilities/constants';
import Loader from '../../../components/Loader';

const ChartData = ({Data, loading, cases, recovery, deaths}) => {
  if (loading) {
    return <Loader loading={loading} />;
  }
  const screenWidth = Dimensions.get('window').width;
  const getChartTitle = () => {
    if (cases) {
      return ['Last 7 days cases'];
    }
    if (recovery) {
      return ['Last 7 days recovery data'];
    }
    if (deaths) {
      return ['Last 7 deaths'];
    }
  };
  const data = {
    labels: Data.map((x) => formatDateLocal(x.date, dateFormats.DailyDate)),
    datasets: [
      {
        data: Data.map((x) => {
          if (cases) {
            return x.cases;
          }
          if (recovery) {
            return x.recovered;
          }
          if (deaths) {
            return x.deaths;
          }
        }),
      },
    ],
    legend: getChartTitle(), // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      bezier={recovery ? true : false}
    />
  );
};
export default ChartData;
