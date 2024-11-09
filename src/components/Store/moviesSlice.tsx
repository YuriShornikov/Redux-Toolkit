import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './index';

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Genre?: string;
  Runtime?: string;
  Director?: string;
  Actors?: string;
  imdbRating?: string;
  Plot?: string;
}

interface MoviesState {
  movies: Movie[];
  favorites: Movie[];
  isLoading: boolean;
  selectedMovie: Movie | null;
}

const initialState: MoviesState = {
  movies: [],
  favorites: [],
  isLoading: false,
  selectedMovie: null,
};

// Асинхронный thunk для поиска фильмов
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchTerm: string) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=64405bd2`);
    return response.data.Search || [];
  }
);

// Асинхронный thunk для получения деталей фильма по imdbID
export const fetchMovieDetails = createAsyncThunk(
  'movies/fetchMovieDetails',
  async (imdbID: string) => {
    const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=64405bd2`);
    console.log(response.data)
    return response.data;
    
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((movie) => movie.imdbID !== action.payload);
    },
    clearSelectedMovie: (state) => {
      state.movies = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addFavorite, removeFavorite, clearSelectedMovie } = moviesSlice.actions;
export const selectMovies = (state: RootState) => state.movies;
export default moviesSlice.reducer;
