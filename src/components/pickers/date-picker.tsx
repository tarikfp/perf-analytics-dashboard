import { Button, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as React from 'react';
import {
  PRIMARY,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  useThemeContext,
  WHITE,
} from '../../theme';

type Props = {
  readonly onSubmit: () => void;
  readonly startDate: Date | null;
  readonly endDate: Date | null;
  readonly onStartDateChange: (date: Date | null) => void;
  readonly onEndDateChange: (date: Date | null) => void;
};

export default function DatePickers({
  endDate,
  startDate,
  onEndDateChange,
  onStartDateChange,
  onSubmit,
}: Props) {
  const { isDarkMode } = useThemeContext();
  return (
    <Paper
      style={{
        marginTop: 20,
        backgroundColor: isDarkMode ? PRIMARY_LIGHT : WHITE,
        height: 120,
        padding: 10,
        borderRadius: 4,
      }}
      elevation={3}
    >
      <Grid
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ height: 120 }}
        container
        spacing={2}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            item
            md={4}
          >
            <DateTimePicker
              label="Start date"
              value={startDate}
              onChange={onStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item md={4}>
            <DateTimePicker
              label="End date"
              value={endDate}
              onChange={onEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            md={4}
          >
            <Button
              sx={{
                ':hover': {
                  backgroundColor: !isDarkMode ? PRIMARY : PRIMARY_DARK,
                },
                backgroundColor: isDarkMode ? PRIMARY : PRIMARY_DARK,
              }}
              onClick={onSubmit}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </LocalizationProvider>
      </Grid>
    </Paper>
  );
}
