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
  const [devotions, setDevotions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserDevotions = useCallback(async () => {
    try {
      setLoading(true);
      const response = await DevotionService.getDevotions();
      console.log('response', response);
      //   setDevotions(data);
    } catch (error) {
      console.error('Error fetching devotions', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DevotionsContext.Provider value={{devotions, loading, fetchUserDevotions}}>
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
