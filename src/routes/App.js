import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './home/HomePage';
import { Navbar } from '../ui/Navbar';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <HomePage />} />
      </Routes>

      <Navbar />
    </HashRouter>
  );
}

export { App };