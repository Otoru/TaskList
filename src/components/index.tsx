import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { themes } from 'components/styled';
import Home from 'components/pages/home';
import { State } from 'store';

const App: React.FC = () => {
  const theme: string = useSelector<State, string>((data) => data.theme);
  const change = theme === 'light' ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={change}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
