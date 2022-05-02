import { PRIMARY_DARK, PRIMARY_LIGHT, useThemeContext } from '@theme';
import { Metric } from '@types';
import { formatAxisDate, formatTooltipDate } from '@utils';
import * as React from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartBase,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {
  readonly data: Metric[];
  readonly xAxisKey: string;
  readonly yAxisKey: string;
};

export default function LineChart({ data, xAxisKey, yAxisKey }: Props) {
  const { isDarkMode } = useThemeContext();

  return (
    <ResponsiveContainer width="99%" height={350}>
      <LineChartBase
        data={data}
        margin={{
          top: 25,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke={isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT}
          allowDataOverflow
          tickFormatter={formatAxisDate}
          dataKey={xAxisKey}
        />
        <YAxis
          stroke={isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT}
          allowDataOverflow
          type="number"
          tickFormatter={(value) => `${value} sec`}
        />

        <Brush tickFormatter={formatAxisDate} dataKey={xAxisKey} height={30} />

        <Tooltip labelFormatter={formatTooltipDate} />
        <Legend />
        <Line
          type="monotone"
          dataKey={yAxisKey}
          stroke={isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT}
          activeDot={{ r: 8 }}
        />
      </LineChartBase>
    </ResponsiveContainer>
  );
}
