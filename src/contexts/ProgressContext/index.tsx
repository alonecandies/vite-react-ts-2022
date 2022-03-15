import { createContext } from 'react';
import { ProgressContextProviderProps, ProgressContextDefault } from './index.d';

const progressDefault: ProgressContextDefault = {
  lastTime: '30/5/2022',
  status: 'In Progress',
};

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault);

function ProgressContextProvider({ children }: ProgressContextProviderProps) {
  return <ProgressContext.Provider value={progressDefault}>{children}</ProgressContext.Provider>;
}

export default ProgressContextProvider;
