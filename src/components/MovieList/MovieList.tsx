import React from 'react';
import { Movie } from '../Store/moviesSlice';
import { MovieCard } from '../MovieCard/MovieCard';

interface MovieListProps {
  movies: Movie[];
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (!movies.length) {
    return <p>No movies found.</p>;
  }

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};
