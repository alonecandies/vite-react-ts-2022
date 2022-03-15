import { ReactNode } from 'react';

interface Movie {
  id: string;
  title: string;
}

interface MovieContextProviderProps {
  children: ReactNode;
}

interface MovieContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}

export { MovieContextDefault, MovieContextProviderProps, Movie };
