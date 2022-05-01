import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { fetchLatestMetrics } from '../../api/metric';
import MenuAppBar from '../../components/app-bar';
import { MetricCard } from '../../components/card';
import { LineChart } from '../../components/chart';
import { PRIMARY_DARK, PRIMARY_LIGHT } from '../../theme/colors';
import { useThemeContext } from '../../theme/context';
import { Metric, MetricType } from '../../types';

const GRID_SPACING = 4;

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [metricData, setMetricData] = React.useState<Metric[]>([]);

  const { isDarkMode } = useThemeContext();

  React.useEffect(() => {
    fetchLatestMetrics({
      onLoadingCb: setLoading,
      onError: () => setHasError(true),
      onSuccess: (data) => setMetricData(data),
    });
  }, []);

  React.useEffect(() => {
    if (hasError) {
      window.alert('An error occurred while fetching data');
    }
  }, [hasError]);

  return (
    <>
      <MenuAppBar />

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          sx={{
            backgroundColor: isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT,
            height: '100vh',
          }}
          spacing={GRID_SPACING}
          container
          direction="row"
        >
          {Object.values(MetricType).map((metricType) => (
            <Grid key={metricType} item md={6} sm={12}>
              <MetricCard isLoading={isLoading} title={metricType}>
                <LineChart
                  xAxisKey="createdAt"
                  yAxisKey={metricType}
                  data={metricData}
                />
              </MetricCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;

Dashboard.displayName = 'DASHBOARD';
