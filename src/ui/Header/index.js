import React from 'react';
import './Header.css';
import { ReactComponent as BlackCat } from '../icons/cat-black-face.svg';

function Header() {
  return (
    <>
      <div className='headerContainer'>
        <h1 className='header'>Mephi Cats</h1>
        <BlackCat className='BlackCat' />
      </div>
    </>
  );
}

export { Header };