import { Divider, Skeleton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type Props = {
  readonly title: string;
  readonly isLoading: boolean;
  readonly children: React.ReactElement;
};

const MetricCard: React.FC<Props> = ({ title, children, isLoading }) => (
  <Card
    sx={{
      padding: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography style={{ padding: 5 }} textAlign="center" variant="h5">
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

export default MetricCard;

MetricCard.displayName = 'METRIC.CARD';
