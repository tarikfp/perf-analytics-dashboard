import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

type Props = {
  readonly title: string;
  readonly children: React.ReactElement;
};

const MetricCard: React.FC<Props> = ({ title, children }) => (
  <Card
    sx={{
      padding: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography style={{ padding: 10 }} textAlign="center" variant="h5">
      {title}
    </Typography>
    <Divider />
    <CardContent>{children}</CardContent>
  </Card>
);

export default MetricCard;

MetricCard.displayName = 'METRIC.CARD';
