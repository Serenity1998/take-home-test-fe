import React from 'react';

interface AppContextType {
  pageLoading: boolean;
}

export const AppContext = React.createContext<AppContextType>({
  pageLoading: true,
});
