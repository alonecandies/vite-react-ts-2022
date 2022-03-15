import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import ProgressContextProvider from 'contexts/ProgressContext';
import ThemeContextProvider from 'contexts/ThemeContext';
import MovieContextProvider from 'contexts/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ProgressContextProvider>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </ProgressContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
