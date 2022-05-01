import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { PRIMARY_DARK, PRIMARY_LIGHT, useThemeContext } from '../../theme';

export default function MenuAppBar() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: isDarkMode ? PRIMARY_DARK : PRIMARY_LIGHT }}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Performance analytics dashboard
          </Typography>

          <Switch value={isDarkMode} onClick={toggleDarkMode} />
          {!isDarkMode ? <Brightness4Icon /> : <LightModeIcon />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
