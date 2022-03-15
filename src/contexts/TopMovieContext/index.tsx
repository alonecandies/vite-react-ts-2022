/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import topMoviesInfo from 'api/getTopMovies';
import { createContext, useReducer } from 'react';
import { topMovieReducer, TopMovieState } from 'reducers/TopMovieReducer';
import TopMovieActionType from '../../reducers/TopMovieReducer/types';
import { TopMovieContextDefault, TopMovieContextProps } from './index.d';

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

const topMoviesDefault: TopMovieState = [];

export const TopMovieContext = createContext<TopMovieContextDefault>({
  topMovies: topMoviesDefault,
  getTopMovies: () => Promise.resolve(undefined),
  toggleWatched: () => undefined,
});

function TopMovieContextProvider({ children }: TopMovieContextProps) {
  const [topMovies, dispatch] = useReducer(topMovieReducer, topMoviesDefault);
  const getTopMovies = async () => {
    const topMovie = await Promise.all(topMoviesInfo);
    dispatch({
      type: GET_TOP_MOVIES,
      payload: topMovie.map((topMovieDetail: { data: any }) => ({
        ...topMovieDetail.data,
        Watched: false,
      })) as TopMovieState,
    });
  };
  const toggleWatched = (imdbID: string) => {
    dispatch({
      type: TOGGLE_TOP_MOVIE_WATCHED,
      payload: imdbID,
    });
  };
  const topMovieContextData = {
    topMovies,
    getTopMovies,
    toggleWatched,
  };

  return (
    <TopMovieContext.Provider value={topMovieContextData}>{children}</TopMovieContext.Provider>
  );
}

export default TopMovieContextProvider;
