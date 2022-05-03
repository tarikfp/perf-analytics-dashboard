import * as React from 'react';
import { PRIMARY_DARK, PRIMARY_LIGHT, useThemeContext, WHITE } from '@/theme';
import { Metric } from '@/types';
import { formatAxisDate, formatTooltipDate } from '@/utils';
import { Typography } from '@mui/material';
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

  return data.length ? (
    <ResponsiveContainer width="100%" height={280}>
      <LineChartBase
        width={500}
        height={280}
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
          stroke={isDarkMode ? WHITE : PRIMARY_LIGHT}
          allowDataOverflow
          tickFormatter={formatAxisDate}
          dataKey={xAxisKey}
        />
        <YAxis
          stroke={isDarkMode ? WHITE : PRIMARY_LIGHT}
          allowDataOverflow
          type="number"
          tickFormatter={(value) => `${value} sec`}
        />

        <Brush tickFormatter={formatAxisDate} dataKey={xAxisKey} height={30} />

        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? PRIMARY_DARK : WHITE,
            color: isDarkMode ? WHITE : PRIMARY_DARK,
          }}
          labelFormatter={formatTooltipDate}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey={yAxisKey}
          stroke={isDarkMode ? WHITE : PRIMARY_LIGHT}
          activeDot={{ r: 8 }}
        />
      </LineChartBase>
    </ResponsiveContainer>
  ) : (
    <Typography variant="body2" textAlign="center">
      No data
    </Typography>
  );
}
