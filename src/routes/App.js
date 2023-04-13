import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../ui/Header';
import { HomePage } from './home/HomePage';
import { Navbar } from '../ui/Navbar';
import { LikesPage } from './likes/LikesPage';
import { UploadPage } from './upload/UploadPage';

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/likes' element={<LikesPage />} />

        <Route path='/upload' element={<UploadPage />} />

        <Route path='*' element={<HomePage />} />
      </Routes>

      <Navbar />
    </HashRouter>
  );
}

export { App };