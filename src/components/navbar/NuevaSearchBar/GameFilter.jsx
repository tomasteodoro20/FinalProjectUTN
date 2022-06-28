import React from 'react';

function GameFilter({setFilter}) {
  return (
    <input label="Search..." onChange={(e) => setFilter(e.target.value)}/>
  )
}

export default GameFilter