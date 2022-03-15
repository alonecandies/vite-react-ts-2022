import { PropTypes } from '@mui/material';
import { ReactNode } from 'react';

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeContextDefault {
  theme: PropTypes.Color;
  toggleTheme: (newTheme: PropTypes.Color) => void;
}

export { ThemeContextProps, ThemeContextDefault };
