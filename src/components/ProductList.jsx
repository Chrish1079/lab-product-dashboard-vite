import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  // TODO: Check if the product list is empty and display a message if needed
  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ProductList;
