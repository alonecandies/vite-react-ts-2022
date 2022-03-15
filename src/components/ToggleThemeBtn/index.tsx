import { Fab, PropTypes } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext/index';

function ToggleThemeBtn() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const newTheme = theme === 'primary' ? 'secondary' : 'primary';
  return (
    <Fab
      color={theme}
      variant="extended"
      sx={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
      }}
      onClick={() => {
        toggleTheme(newTheme as PropTypes.Color);
      }}
    >
      Toggle Theme
    </Fab>
  );
}

export default ToggleThemeBtn;
