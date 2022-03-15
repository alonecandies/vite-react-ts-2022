import 'App.css';
import Header from 'components/Header';
import Movies from 'components/Movies';

import ToggleThemeBtn from 'components/ToggleThemeBtn';

function App() {
  return (
    <>
      <Header />
      <Movies />
      <ToggleThemeBtn />
    </>
  );
}

export default App;
