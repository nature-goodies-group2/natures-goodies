import React, { useState, useEffect } from 'react';
import'../css/tabletproducts.css'

export const TabletProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from an API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://goodies-r7j8.onrender.com/api/products/');
      // const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  if (loading) {
    return <p>Loading products...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div id="table-products">
      <h2>Products List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image_link} alt={product.name}/>
          </li>

 
        ))}
      </ul>
    </div>
  );
};

