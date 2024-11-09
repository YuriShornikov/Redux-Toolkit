import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAppDispatch } from './hooks';
import { Home } from './components/Pages/Home';
import { MovieDetail } from './components/MovieDetail/MovieDetail';
import { Favorites } from './components/Pages/Favorites';
import { clearSelectedMovie } from './components/Store/moviesSlice';
import './App.css';

export const App = () => {
  const dispatch = useAppDispatch();

  const handleHomeClick = () => {
    dispatch(clearSelectedMovie());
  };

  return (
    <Router>
      <nav>
        <Link to="/" onClick={handleHomeClick}>Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};
