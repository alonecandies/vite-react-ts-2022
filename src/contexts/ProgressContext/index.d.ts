import { ReactNode } from 'react';

interface ProgressContextProviderProps {
  children: ReactNode;
}

interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

export { ProgressContextProviderProps, ProgressContextDefault };
