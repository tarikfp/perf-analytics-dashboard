import * as React from 'react';
import MenuAppBar from './components/app-bar';
import MainLayout from './components/layout';
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
      <MainLayout>
        <MenuAppBar />
        <Dashboard />
      </MainLayout>
    </ThemeContext.Provider>
  );
}

export default App;
