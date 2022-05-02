import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { fetchLatestMetrics, fetchMetricsByDate } from '../../api/metric';
import { MetricCard } from '../../components/card';
import { LineChart } from '../../components/chart';
import DataTable from '../../components/data-table';
import { DatePickers } from '../../components/pickers';
import { PRIMARY } from '../../theme/colors';
import { Metric, MetricType } from '../../types';

const GRID_SPACING = 4;

type Props = {};

const MemoizedMetricCard = React.memo(MetricCard);
const MemoizedLineChart = React.memo(LineChart);

const Dashboard: React.FC<Props> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(new Date());
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [metricData, setMetricData] = React.useState<Metric[]>([]);

  React.useEffect(() => {
    fetchLatestMetrics({
      onLoadingCb: setLoading,
      onError: () => setHasError(true),
      onSuccess: setMetricData,
    });
  }, []);

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

  return (
    <Box
      sx={{
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      <DatePickers
        onSubmit={handleFetchByDate}
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
      <Grid marginTop={4} xs={12}>
        <DataTable data={metricData} />
      </Grid>
    </Box>
  );
};

export default Dashboard;

Dashboard.displayName = 'DASHBOARD';
