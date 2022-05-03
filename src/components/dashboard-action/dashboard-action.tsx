import * as React from 'react';
import { PRIMARY_LIGHT, useThemeContext, WHITE } from '@/theme';
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ButtonGroup from '@/components/button-group';

type Props = {
  readonly startDate: Date | null;
  readonly endDate: Date | null;
  readonly onStartDateChange: (date: Date | null) => void;
  readonly onEndDateChange: (date: Date | null) => void;
  readonly onFetchLatestClick: () => void;
  readonly onFetchBetweenDatesClick: () => void;
};

export default function DashboardAction({
  endDate,
  startDate,
  onEndDateChange,
  onStartDateChange,
  onFetchBetweenDatesClick,
  onFetchLatestClick,
}: Props) {
  const theme = useTheme();

  const xSmallToMid = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  const { isDarkMode } = useThemeContext();
  return (
    <Paper
      style={{
        marginTop: 20,
        backgroundColor: isDarkMode ? PRIMARY_LIGHT : WHITE,
        minHeight:  !xSmallToMid ? 150 : 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      }}
      elevation={3}
    >
      <Grid
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: xSmallToMid ? 4 : 0,
          minHeight: !xSmallToMid ? 120 : 300,
        }}
        container
        spacing={2}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            item
            sm={6}
            md={3}
            xs={12}
          >
            <DateTimePicker
              label="Start date"
              value={startDate}
              onChange={onStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <DateTimePicker
              label="End date"
              value={endDate}
              onChange={onEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <ButtonGroup
            buttonProps={[
              {
                label: 'Fetch between dates',
                onClick: onFetchBetweenDatesClick,
              },
              {
                label: 'Fetch latest (last 30 mins)',
                onClick: onFetchLatestClick,
              },
              { label: 'Create metric data', onClick: () => null },
            ]}
          />
        </LocalizationProvider>
      </Grid>
    </Paper>
  );
}
