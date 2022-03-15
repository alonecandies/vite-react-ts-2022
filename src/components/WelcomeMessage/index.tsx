import { Box } from '@mui/material';
import { WelcomeMessageProps } from './index.d';

function WelcomeMessage({ position, country = 'Vietnam' }: WelcomeMessageProps) {
  return (
    <Box mb={1}>
      Welcome {position} from {country}
    </Box>
  );
}

export default WelcomeMessage;
