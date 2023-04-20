import React from 'react';
import './Header.css';
import { ReactComponent as BlackCat } from '../icons/cat-black-face.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <>
      <div className='headerContainer'>
        <h1 onClick={goHome} className='header'>Mephi Cats</h1>
        <BlackCat onClick={goHome} className='BlackCat' />
      </div>
    </>
  );
}

export { Header };