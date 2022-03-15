import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MovieContextDefault, MovieContextProviderProps, Movie } from './index.d';

const movieDefault: MovieContextDefault = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(movieDefault);

function MovieContextProvider({ children }: MovieContextProviderProps) {
  const [movies, setMovies] = useState<Movie[]>(movieDefault.movies);
  const addMovie = (title: string) => setMovies([...movies, { title, id: uuid() }]);
  const deleteMovie = (id: string) => setMovies(movies.filter((movie) => movie.id !== id));
  const movieDynamic = { movies, addMovie, deleteMovie };
  return <MovieContext.Provider value={movieDynamic}>{children}</MovieContext.Provider>;
}

export default MovieContextProvider;
