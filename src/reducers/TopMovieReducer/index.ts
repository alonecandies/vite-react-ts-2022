import TopMovieActionType from './types';

interface TopMovie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMovieState = TopMovie[];

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIE_WATCHED } = TopMovieActionType;

type TopMovieAction =
  | {
    type: typeof GET_TOP_MOVIES;
    payload: TopMovieState;
  }
  | {
    type: typeof TOGGLE_TOP_MOVIE_WATCHED;
    payload: string;
  };

export const topMovieReducer = (state: TopMovieState, action: TopMovieAction) => {
  switch (action.type) {
    case GET_TOP_MOVIES:
      return action.payload;
    case TOGGLE_TOP_MOVIE_WATCHED:
      return state.map((movie) => {
        if (movie.imdbID === action.payload) {
          return { ...movie, Watched: !movie.Watched };
        }
        return movie;
      });
    default:
      return state;
  }
};
