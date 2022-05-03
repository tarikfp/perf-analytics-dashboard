import { PRIMARY } from '@/theme';
import { Box } from '@mui/material';
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
