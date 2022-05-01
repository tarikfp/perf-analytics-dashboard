import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { fetchLatestMetrics } from '../../api/metric';
import { MetricCard } from '../../components/card';
import { LineChart } from '../../components/chart';

const GRID_SPACING = 4;

type Props = {};

const Dashboard: React.FC<Props> = () => {
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchLatestMetrics({
      onLoadingCb: setLoading,
      onError: () => setHasError(true),
      onSuccess: () => {},
    });
  }, []);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid
        sx={{
          backgroundColor: '#3e52b9',
          height: '100vh',
        }}
        container
        direction="row"
        spacing={2}
      >
        <Grid item spacing={GRID_SPACING} container direction="row">
          <Grid item md={6} sm={12}>
            <MetricCard title="TTFB">
              <LineChart />
            </MetricCard>
          </Grid>
          <Grid item md={6} sm={12}>
            <MetricCard title="FCP">
              <LineChart />
            </MetricCard>
          </Grid>
        </Grid>
        <Grid item spacing={GRID_SPACING} container direction="row">
          <Grid item md={6} sm={12}>
            <MetricCard title="Dom Load">
              <LineChart />
            </MetricCard>
          </Grid>
          <Grid item md={6} sm={12}>
            <MetricCard title="Window Load">
              <LineChart />
            </MetricCard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;

Dashboard.displayName = 'DASHBOARD';
