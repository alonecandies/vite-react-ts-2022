/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { TopMovieContext } from 'contexts/TopMovieContext';
import { useContext, useEffect } from 'react';

export default function TopMovie() {
  const { topMovies, getTopMovies, toggleWatched } = useContext(TopMovieContext);
  useEffect(() => {
    getTopMovies().catch((error: Error) => {
      throw new Error(`Error: ${error.message}`);
    });
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 movies"
          titleTypographyProps={{
            variant: 'h4',
            color: 'primary',
            align: 'center',
          }}
        />
        <CardContent>
          <List>
            {topMovies.map((movie) => (
              <ListItem key={movie.imdbID}>
                <ListItemIcon>
                  <Checkbox checked={movie.Watched} onClick={() => toggleWatched(movie.imdbID)} />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
