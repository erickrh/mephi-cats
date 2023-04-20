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
        <h1 onClick={goHome} className='header improveHeaderButton'>Mephi Cats</h1>
        <BlackCat onClick={goHome} className='BlackCat improveHeaderButton' />
      </div>
    </>
  );
}

export { Header };