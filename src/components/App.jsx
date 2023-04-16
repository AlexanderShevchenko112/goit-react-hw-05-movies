// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Home from 'components/pages/home/Home';
import Movies from 'components/pages/movies/Movies';
import MovieDetails from 'components/pages/movieDetails/MovieDeatails';
import Cast from 'components/cast/Cast';
import Reviews from 'components/reviews/Reviews';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;
