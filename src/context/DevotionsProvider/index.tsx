import React, {createContext, useState, useEffect, useCallback} from 'react';
import {DevotionsContextInterface} from './interface';
import DevotionService from '@services/DevotionService';

export const DevotionsContext = createContext<DevotionsContextInterface>(
  {} as DevotionsContextInterface,
);

interface DevotionsProviderProps {
  children: React.ReactNode;
}

const DevotionsProvider = ({children}: DevotionsProviderProps) => {
  const [userDevotions, setUserDevotions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserDevotions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await DevotionService.getDevotions();
      setUserDevotions(response);
    } catch (error) {
      console.error('Error fetching user devotions', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DevotionsContext.Provider
      value={{userDevotions, loading, fetchUserDevotions}}>
      {children}
    </DevotionsContext.Provider>
  );
};

export default DevotionsProvider;

export function useDevotionsProvider() {
  const context = React.useContext(DevotionsContext);
  if (context === undefined) {
    throw new Error('useDevotions must be used within a DevotionsProvider');
  }
  return context;
}
