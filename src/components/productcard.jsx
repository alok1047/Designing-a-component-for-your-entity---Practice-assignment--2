// write product card here
import React from 'react';
import Button from '../components/button';

const Productcard = () => {
  const productImage = 'src/assets/bluetooth.jpeg';
  const productName = 'Wireless Bluetooth Headphones';
  const productPrice = '$49.99';

  const handleViewProduct = () => {
    alert(`Viewing ${productName}`);
  };

  return (
    <div style={styles.card}>
      <img 
        src={productImage} 
        alt={productName} 
        style={styles.productImage} 
      />
      <h2 style={styles.productName}>{productName}</h2>
      <p style={styles.productPrice}>{productPrice}</p>
      <Button onClick={handleViewProduct}>View Product</Button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    maxWidth: '250px',
    margin: '16px',
    textAlign: 'center',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-4px)'
    }
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '12px'
  },
  productName: {
    margin: '0 0 8px 0',
    color: '#333333',
    fontSize: '1.2em'
  },
  productPrice: {
    margin: '0 0 16px 0',
    color: '#007bff',
    fontSize: '1.1em',
    fontWeight: 'bold'
  }
};

export default Productcard;