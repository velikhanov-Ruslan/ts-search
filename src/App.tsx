import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation/>
    <Routes>
      <Route path={`/`} element={<HomePage/>}/>
      <Route path={`favorites`} element={<FavoritesPage/>}/>
      <Route path={`*`} element={<p>Страница не найдена</p>}/>
    </Routes>
      </>
  );
}

export default App;
