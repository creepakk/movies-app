import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './pages/index-page';
import { MoviesPage } from './pages/Movies-Page/Movies-Page';
import { MoviePage } from './pages/Movie-page/Movie-Page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<IndexPage />} />
        <Route path='movies' element={<MoviesPage />} />

        <Route path='movie'>
          <Route path=':id' element={<MoviePage />} />
        </Route>

        <Route path="*" element={<h2>404: Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
