import React, { useEffect, useState } from 'react';
import Header from './Header';
import MoviesDisplay from './moviesDisplay';
import { getTrending } from '../api/MoviesDB';
import Button from './Button';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const results = await getTrending(page);
      setMovies(results);
    };
    getMovies();
  }, [page]);

  return (
    <div>
      <Header />
      <MoviesDisplay movies={movies} page={page} onPageChange={setPage} />
    </div>
  );
};

export default App;