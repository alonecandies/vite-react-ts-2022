import axios from 'axios';

const TopMovieIds: string[] = ['tt0111161', 'tt0068646', 'tt0071562', 'tt0468569', 'tt0050083'];

const topMoviesInfo = TopMovieIds.map((id) => axios.get(`http://www.omdbapi.com/?i=${id}&apikey=837aeecc`));

export default topMoviesInfo;
