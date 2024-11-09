import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMovies, selectMovies } from '../Store/moviesSlice';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieList } from '../MovieList/MovieList';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { movies, isLoading } = useAppSelector(selectMovies);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      dispatch(fetchMovies(searchTerm));
    }
  };

  return (
    <div className='home'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearch={handleSearch} />
      {isLoading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
};
