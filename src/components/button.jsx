// write button card here
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#0056b3'
    }
  }
};

export default Button;