import { ReactNode } from 'react';
import { TopMovieState } from 'reducers/TopMovieReducer/index';

interface TopMovieContextProps {
  children: ReactNode;
}

interface TopMovieContextDefault {
  topMovies: TopMovieState;
  getTopMovies: () => Promise<void>;
  toggleWatched: (imdbID: string) => void;
}

export { TopMovieContextProps, TopMovieContextDefault };
