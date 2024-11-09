import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavorite, removeFavorite, selectMovies } from '../Store/moviesSlice';
import { Movie } from '../Store/moviesSlice';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const dispatch = useAppDispatch();
    const { favorites } = useAppSelector(selectMovies);
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
        dispatch(removeFavorite(movie.imdbID));
        } else {
        dispatch(addFavorite(movie));
        }
    };

    return (
        <div className='movie-card'>
            <div className='movie-top'>
                <Link to={`/movie/${movie.imdbID}`}><h3>{movie.Title} ({movie.Year})</h3></Link>
                <button className='btn add' onClick={handleFavoriteToggle}>
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>    
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    );
};
