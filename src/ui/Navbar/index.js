import React from 'react';
import './Navbar.css';
import { ReactComponent as HomeSVG } from '../icons/home.svg';
import { ReactComponent as LikeSVG } from '../icons/heart.svg';
import { ReactComponent as UploadSVG } from '../icons/upload-image.svg';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <button>
        <HomeSVG className={`navbarIcon homeIcon ${location.pathname === '/' && 'fillHome'}`} />
      </button>

      <button>
        <LikeSVG className={`navbarIcon likeIcon ${location.pathname === '/likes' && 'fillLikes'}`} />
      </button>
      
      <button>
        <UploadSVG className={`navbarIcon uploadIcon ${location.pathname === '/upload' && 'fillUploads'}`} />
      </button>
    </nav>
  );
}

export { Navbar };