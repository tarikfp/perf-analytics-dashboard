import * as React from 'react';
import { Dashboard } from './pages';
import { ThemeContext } from './theme/context';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const contextVal = React.useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode: () => setIsDarkMode(!isDarkMode),
    }),
    [isDarkMode],
  );

  return (
    <ThemeContext.Provider value={contextVal}>
      <Dashboard />
    </ThemeContext.Provider>
  );
}

export default App;
