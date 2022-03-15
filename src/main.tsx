import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import ProgressContextProvider from 'contexts/ProgressContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import MovieContextProvider from 'contexts/MovieContext';
import TopMovieContextProvider from 'contexts/TopMovieContext';
import AuthContextProvider from './contexts/AuthContext/index';

ReactDOM.render(
  <React.StrictMode>
    <TopMovieContextProvider>
      <ThemeContextProvider>
        <ProgressContextProvider>
          <MovieContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </MovieContextProvider>
        </ProgressContextProvider>
      </ThemeContextProvider>
    </TopMovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
