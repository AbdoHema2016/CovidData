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

const DailyData = ({dailyData}) => {
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: dailyData.map((x) =>
      formatDateLocal(x.date, dateFormats.DailyDate),
    ),
    datasets: [
      {
        data: dailyData.map((x) => x.cases),
      },
    ],
    legend: ['Last 7 days'], // optional
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
    />
  );
};
export default DailyData;
