import React from 'react';
import AppNavigator from './src/navigation/appNavigator';
import Providers from './src/context';

function App(): React.JSX.Element {
  return (
    <Providers>
      <AppNavigator />
    </Providers>
  );
}

export default App;
