import { Grid } from '@mui/material';
import 'App.css';
import Header from 'components/Header';
import Movies from 'components/Movies';
import ToggleThemeBtn from 'components/ToggleThemeBtn';
import TopMovie from 'components/TopMovie';

function App() {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={7}>
          <TopMovie />
        </Grid>
        <Grid item xs={5}>
          <Movies />
        </Grid>
      </Grid>
      <ToggleThemeBtn />
    </>
  );
}

export default App;
