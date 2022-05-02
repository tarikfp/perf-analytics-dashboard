import { Divider, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import {
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  useThemeContext,
  WHITE,
} from '../../theme';

interface Props extends React.PropsWithChildren<any> {
  readonly title: string;
  readonly isLoading: boolean;
}

const MetricCard: React.FC<Props> = ({ title, children, isLoading }) => {
  const { isDarkMode } = useThemeContext();
  return (
    <Card
      sx={{
        backgroundColor: isDarkMode ? PRIMARY_LIGHT : WHITE,

        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        color={isDarkMode ? WHITE : PRIMARY_DARK}
        style={{ padding: 5 }}
        textAlign="center"
        variant="h5"
      >
        {title}
      </Typography>
      <Divider />
      <CardContent>
        {isLoading ? (
          <Skeleton height={280} color="#ffff" variant="rectangular" />
        ) : (
          children
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;

MetricCard.displayName = 'METRIC.CARD';
