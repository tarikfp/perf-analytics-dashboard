import { fetchLatestMetrics, fetchMetricsByDate } from '@/api/metric';
import { MetricCard } from '@/components/card';
import { LineChart } from '@/components/chart';
import DataTable from '@/components/data-table';
import { DashboardAction } from '@/components/dashboard-action';
import { PRIMARY } from '@/theme';
import { Metric, MetricType } from '@/types';
import { Box, Grid } from '@mui/material';
import * as React from 'react';

const GRID_SPACING = 4;

const MemoizedMetricCard = React.memo(MetricCard);
const MemoizedLineChart = React.memo(LineChart);

export default function Dashboard() {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(
    new Date(new Date().getTime() + 30 * 60000),
  );
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [metricData, setMetricData] = React.useState<Metric[]>([]);

  React.useEffect(() => {
    if (hasError) {
      window.alert('An error occurred while fetching data');
    }
  }, [hasError]);

  const handleFetchByDate = () => {
    if (startDate && endDate) {
      fetchMetricsByDate({
        endDate: endDate.getTime().toString(),
        startDate: startDate.getTime().toString(),
        onLoadingCb: setLoading,
        onError: () => setHasError(true),
        onSuccess: setMetricData,
      });
    } else {
      window.alert('Please select a date range');
    }
  };

  const handleFetchLatest = () => {
    fetchLatestMetrics({
      onLoadingCb: setLoading,
      onError: () => setHasError(true),
      onSuccess: setMetricData,
    });
  };

  React.useEffect(() => {
    handleFetchLatest();
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      <DashboardAction
        onFetchBetweenDatesClick={handleFetchByDate}
        onFetchLatestClick={handleFetchLatest}
        endDate={endDate}
        startDate={startDate}
        onEndDateChange={setEndDate}
        onStartDateChange={setStartDate}
      />

      <Grid
        sx={{
          backgroundColor: PRIMARY,
          height: '100%',
        }}
        spacing={GRID_SPACING}
        container
        direction="row"
      >
        {Object.values(MetricType).map((metricType) => (
          <Grid key={metricType} item md={6} sm={12}>
            <MemoizedMetricCard isLoading={isLoading} title={metricType}>
              <MemoizedLineChart
                xAxisKey="createdAt"
                yAxisKey={metricType}
                data={metricData}
              />
            </MemoizedMetricCard>
          </Grid>
        ))}
      </Grid>
      <Grid item marginTop={4} xs={12}>
        <DataTable data={metricData} />
      </Grid>
    </Box>
  );
}
