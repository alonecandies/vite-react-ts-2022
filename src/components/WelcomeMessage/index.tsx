import { Box } from '@mui/material';
import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';
import { WelcomeMessageProps } from './index.d';

function WelcomeMessage({ position, country = 'Vietnam' }: WelcomeMessageProps) {
  const { authInfo } = useContext(AuthContext);
  return (
    <Box mb={1}>
      Welcome {position} {authInfo.username} from {country}
    </Box>
  );
}

export default WelcomeMessage;
