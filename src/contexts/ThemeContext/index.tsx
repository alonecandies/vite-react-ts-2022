import { PropTypes } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { ThemeContextProps, ThemeContextDefault } from './index.d';

const themeDefault: ThemeContextDefault = {
  theme: 'primary' as PropTypes.Color,
  toggleTheme: (newTheme: PropTypes.Color) => null,
};

export const ThemeContext = createContext<ThemeContextDefault>(themeDefault);

function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<PropTypes.Color>(themeDefault.theme);
  const toggleTheme = (newTheme: PropTypes.Color): void => setTheme(newTheme);
  const memoizedValue = useMemo(() => {
    const themeContextDynamic = { theme, toggleTheme };
    return <ThemeContext.Provider value={themeContextDynamic}>{children}</ThemeContext.Provider>;
  }, [theme, children]);
  return memoizedValue;
  // return <ThemeContext.Provider value={themeContextDynamic}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
