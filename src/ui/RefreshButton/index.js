import React from 'react';
import './RefreshButton.css';
import { ReactComponent as RefreshSVG } from './refresh-icon.svg';

function RefreshButton(props) {
  const refresh = () => {
    props.setRefresh(prevState => !prevState);
  };

  return (
    <div className="refreshButtonContainer">
      <button
        onClick={refresh}
        className='refreshButton'
      >
        <RefreshSVG fill='black' className='refreshIcon' />
      </button>
    </div>
  );
}

export { RefreshButton };