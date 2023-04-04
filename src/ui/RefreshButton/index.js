import React from 'react';

function RefreshButton(props) {
  const refresh = () => {
    props.setRefresh(prevState => !prevState);
  };

  return (
    <button onClick={refresh}>Refresh</button>
  );
}

export { RefreshButton };