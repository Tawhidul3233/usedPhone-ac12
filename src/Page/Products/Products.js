import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
     const  products  = useLoaderData();

     return (
          <div className='my-10'>
               <div>
                    <h1 className='text-2xl m-5 font-semibold'> All Products </h1>
               </div>
               <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                         products.map(product => <Product
                         key={product._id}
                         product={product}
                         ></Product>)
                    }
               </div>
          </div>
     );
};

export default Products;