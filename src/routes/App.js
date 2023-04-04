import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './home/HomePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export { App };