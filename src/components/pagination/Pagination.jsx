import React from 'react'
import { useState, useEffect } from 'react';
import ProductListing from './ProductListing';

const Pagination = () => {
    const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=10&skip=0"
      );
      if (!response.ok) {
        throw new Error("Response not OK");
      }
      const products = await response.json();
     setProducts(products.products);
    } catch (error){
        setError(error)
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className='bg-[#949292] h-auto w-screen flex flex-col items-center p-6'>
        <h1 className='text-2xl font-bold'>Products You can Shop</h1>
        <ProductListing products = {products} loading={loading}/>
    </div>
  )
}

export default Pagination
