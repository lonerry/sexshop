import React from 'react';
import './Button.css';

function Button({ type, title, disable, onClick }) {
  return (
    <button
      className={`btn ${
        type === 'add' ? 'add' : 
        type === 'remove' ? 'remove' : 
        type === 'checkout' ? 'checkout' : ''
      }`}
      disabled={disable}
      onClick={onClick} 
    >
      {type === 'add' ? '+' : type === 'remove' ? '-' : title}
    </button>
  );
}

export default Button;
