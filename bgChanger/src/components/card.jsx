import React, { useState } from 'react';

function Card({ colors }) {
  const colorObj = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    gray: 'bg-gray-500',
    indigo: 'bg-indigo-500'
  };
  function handleClick() {
    const domElement = document.getElementById('Broot');
    domElement.style.backgroundColor = colors;
  }
  return (
    <button onClick={handleClick} className={`${colorObj[colors]} text-white px-4 py-2  m-2`}>
      {colors}
    </button>
  );
}

export default Card;