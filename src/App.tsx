import React from 'react';
import { StepsContextProvider } from './contexts/StepsContext';
import { RecommendedPizzaProvider } from './contexts/RecommendedPizzaContext';
import { UserScoreProvider } from './contexts/UserScoreContext';
import Dashboard from './pages/Dashboard';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <StepsContextProvider>
        <RecommendedPizzaProvider>
          <UserScoreProvider>
            <Dashboard />
          </UserScoreProvider>
        </RecommendedPizzaProvider>
      </StepsContextProvider>

      <GlobalStyle />
    </>
  );
}

export default App;
