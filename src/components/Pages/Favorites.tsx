import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectMovies } from '../Store/moviesSlice';
import { MovieCard } from '../MovieCard/MovieCard';

export const Favorites: React.FC = () => {
    const { favorites } = useAppSelector(selectMovies);

    if (favorites.length === 0) {
        return <p>You have no favorite movies yet.</p>;
    }

    return (
        <div>
            <h2>Favorite Movies</h2>
            <div>
                {favorites.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
};
