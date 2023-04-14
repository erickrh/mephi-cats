import React from 'react';
import './RefreshButton.css';
import { ReactComponent as RefreshSVG } from '../icons/refresh-icon.svg';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function RefreshButton(props) {
  const refresh = () => {
    handleScrollToTop();
    props.setRefresh(prevState => !prevState);
  };

  return (
    <div className="flexRefreshContainer">
      <div className="refreshButtonContainer">
        <button
          onClick={refresh}
          className='refreshButton'
        >
          <RefreshSVG fill='black' className='refreshIcon' />
        </button>
      </div>
    </div>
  );
}

export { RefreshButton };