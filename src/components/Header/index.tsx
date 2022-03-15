import {
  AppBar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState, useContext } from 'react';
import { ProgressContext } from 'contexts/ProgressContext';
import { ThemeContext } from 'contexts/ThemeContext';
import WelcomeMessage from '../WelcomeMessage';

export default function Header() {
  const [position, setPosition] = useState<string>('Full-stack Dev');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const onPositionChange = (event: SelectChangeEvent<string>) => {
    setPosition(event.target.value);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Box>
            <Typography variant="h6">My movies</Typography>
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
              sx={{
                backgroundColor: '#f5f5f5',
                fontWeight: 'bold',
                marginTop: 2,
              }}
            />
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Button variant="contained" color="info">
              Login
            </Button>
          </Box>
          <Box textAlign="center">
            <WelcomeMessage position={position} country="Hanoi" />
            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  variant="standard"
                  sx={{
                    color: 'white',
                    borderBottom: '1px solid white',
                    borderRadius: 0,
                    height: '40px',
                    '&:hover': {
                      borderBottom: '1px solid transparent',
                    },
                  }}
                >
                  <MenuItem value="Full-stack Dev">Full-stack Dev</MenuItem>
                  <MenuItem value="FE Dev">FE Dev</MenuItem>
                  <MenuItem value="BE Dev">BE Dev</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
