import {
  Box, Button, TextField, Chip
} from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';
import { MovieContext } from 'contexts/MovieContext';

export default function Movies() {
  type BtnTheme =
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  type ChipTheme =
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  const [newMovie, setNewMovie] = useState('');
  const { theme } = useContext(ThemeContext);
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your fav movie..."
          variant="outlined"
          onChange={(e) => setNewMovie(e.target.value)}
          value={newMovie}
          sx={{
            marginRight: '5px',
          }}
        />
        <Button
          variant="contained"
          color={theme as BtnTheme}
          onClick={() => {
            addMovie(newMovie);
            setNewMovie('');
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={theme as ChipTheme}
            onDelete={() => deleteMovie(movie.id)}
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              padding: '20px 10px',
              margin: '5px',
            }}
          />
        ))}
      </Box>
    </>
  );
}
