import React from 'react';
import './Navbar.css';
import { ReactComponent as HomeSVG } from '../icons/home.svg';
import { ReactComponent as LikeSVG } from '../icons/heart.svg';
import { ReactComponent as UploadSVG } from '../icons/upload-image.svg';
import { useLocation, NavLink } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = React.useState('');

  const handleScrollToTop = route => {
    if (currentLocation === route) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setCurrentLocation(route);
    }
  };

  const routes = [];

  routes.push({
    to: '/',
    component: <HomeSVG className={`navbarIcon homeIcon ${location.pathname === '/' && 'fillSVG'}`} />
  });
  routes.push({
    to: '/likes',
    component: <LikeSVG className={`navbarIcon likeIcon ${location.pathname === '/likes' && 'fillSVG'}`} />
  });
  routes.push({
    to: '/upload',
    component: <UploadSVG className={`navbarIcon uploadIcon ${location.pathname === '/upload' && 'fillSVG'}`} />
  });

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <ul>
          {routes.map(route => {
            return (
              <li key={route.to}>
                <button
                  className='navbarButton'
                  onClick={() => handleScrollToTop(route.to)}
                >
                  <NavLink to={route.to}>
                    {route.component}
                  </NavLink>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export { Navbar };