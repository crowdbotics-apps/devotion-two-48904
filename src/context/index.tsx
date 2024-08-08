import React from 'react';
import DevotionsProvider from './DevotionsProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({children}: ProvidersProps) => {
  return <DevotionsProvider>{children}</DevotionsProvider>;
};

export default Providers;
