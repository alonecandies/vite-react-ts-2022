import {
  Button, Dialog, DialogActions, DialogContent, TextField
} from '@mui/material';
import { AuthContext } from 'contexts/AuthContext';
import {
  Dispatch, SetStateAction, useContext, useState
} from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function Login(props: LoginProps) {
  const { authInfo, toggleAuth } = useContext(AuthContext);
  const [username, setUsername] = useState<string>('');
  const { isOpen, onClose } = props;
  const onLoginSubmit = () => {
    toggleAuth(username);
    onClose(false);
    setUsername('');
  };
  return (
    <Dialog open={isOpen} onClose={() => onClose(false)}>
      <DialogContent>
        <TextField
          label="username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={onLoginSubmit}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
