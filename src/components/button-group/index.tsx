import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MUIButtonGroup from '@mui/material/ButtonGroup';
import { PRIMARY, PRIMARY_DARK, useThemeContext } from '@/theme';
import { useMediaQuery, useTheme } from '@mui/material';

interface BaseButtonProps {
  readonly onClick: () => void;
  readonly label: string;
}

type Props = {
  readonly buttonProps: BaseButtonProps[];
};

export default function ButtonGroup({ buttonProps }: Props) {
  const { isDarkMode } = useThemeContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between('xs', 'md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <MUIButtonGroup
        orientation={matches ? 'vertical' : 'horizontal'}
        size="small"
        aria-label="small button group"
      >
        {buttonProps.map(({ onClick, label }) => (
          <Button
            sx={{
              height: matches ? 80 : 50,
              ':hover': {
                backgroundColor: isDarkMode ? PRIMARY : PRIMARY_DARK,
              },
              backgroundColor: !isDarkMode ? PRIMARY : PRIMARY_DARK,
            }}
            variant="contained"
            key={label}
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </MUIButtonGroup>
    </Box>
  );
}
