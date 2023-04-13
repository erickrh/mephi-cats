import React from 'react';
import './Navbar.css';
import { ReactComponent as HomeSVG } from '../icons/home.svg';
import { ReactComponent as LikeSVG } from '../icons/heart.svg';
import { ReactComponent as UploadSVG } from '../icons/upload-image.svg';
import { useLocation, NavLink } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const routes = [];

  routes.push({
    to: '/',
    component: <HomeSVG className={`navbarIcon homeIcon ${location.pathname === '/' && 'fillHome'}`} />
  });
  routes.push({
    to: '/likes',
    component: <LikeSVG className={`navbarIcon likeIcon ${location.pathname === '/likes' && 'fillLikes'}`} />
  });
  routes.push({
    to: '/upload',
    component: <UploadSVG className={`navbarIcon uploadIcon ${location.pathname === '/upload' && 'fillUploads'}`} />
  });

  return (
    <nav className="navbar">
      <ul>
        {routes.map(route => {
          return (
            <li key={route.to}>
              <button className='navbarButton'>
                <NavLink to={route.to}>
                  {route.component}
                </NavLink>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Navbar };