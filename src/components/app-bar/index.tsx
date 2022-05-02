import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { BLACK, PRIMARY_DARK, useThemeContext, WHITE } from '../../theme';

export default function MenuAppBar() {
  const { isDarkMode, toggleDarkMode } = useThemeContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ backgroundColor: isDarkMode ? PRIMARY_DARK : WHITE }}
        position="fixed"
      >
        <Toolbar>
          <Typography
            color={isDarkMode ? WHITE : BLACK}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Performance analytics dashboard
          </Typography>

          <Switch value={isDarkMode} color="info" onClick={toggleDarkMode} />
          {!isDarkMode ? (
            <Brightness4Icon htmlColor={PRIMARY_DARK} />
          ) : (
            <LightModeIcon />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
