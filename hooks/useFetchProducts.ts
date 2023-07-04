import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * @description Custom hook to fetch products
 */
const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { loading, error, products };
};

export default useFetchProducts;