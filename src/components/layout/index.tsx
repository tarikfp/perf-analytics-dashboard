import { Box } from '@mui/material';
import { PRIMARY } from '@theme';
import * as React from 'react';

export default function MainLayout({ children }: React.PropsWithChildren<any>) {
  return (
    <Box
      sx={{
        padding: 10,
        backgroundColor: PRIMARY,
      }}
    >
      {children}
    </Box>
  );
}
