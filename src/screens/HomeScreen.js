import React, { useEffect, useState } from 'react';
import data from '../data'
import Product from '../components/Product'
import axios from 'axios'

export default function HomeScreen() {
/*
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('');
      setProducts(data);
    };
    fetchData();
  },[] );*/

    return (
        <div className="row center">
        {
          data.product.map(product =>(
            <Product key={product._id} product={product}></Product>
          ))
        }
      </div>
    )
}
