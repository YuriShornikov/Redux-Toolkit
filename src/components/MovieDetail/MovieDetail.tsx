import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMovieDetails, clearSelectedMovie, selectMovies } from '../Store/moviesSlice';

export const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const dispatch = useAppDispatch();
    const { selectedMovie, isLoading } = useAppSelector(selectMovies);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }

        return () => {
            dispatch(clearSelectedMovie());
        };
    }, [id, dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!selectedMovie) {
        return <p>No movie details available.</p>;
    }

    return (
        <div>
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
            <p><strong>Poster:</strong>{selectedMovie.Poster}</p>
            <p><strong>Genre:</strong> {selectedMovie.Genre || 'N/A'}</p>
            <p><strong>Runtime:</strong> {selectedMovie.Runtime || 'N/A'}</p>
            <p><strong>Director:</strong> {selectedMovie.Director || 'N/A'}</p>
            <p><strong>Actors:</strong> {selectedMovie.Actors || 'N/A'}</p>
            <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating || 'N/A'}</p>
            <p><strong>Plot:</strong> {selectedMovie.Plot || 'N/A'}</p>
        </div>
    );
};
