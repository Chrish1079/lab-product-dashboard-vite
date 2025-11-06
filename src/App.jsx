import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  // TODO: Implement state to manage filtering
  const [products, setProducts] = useState(initialProducts);

  // TODO: Implement logic to filter products based on availability

  const handleRemove = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </div>
  );
};

export default App;
