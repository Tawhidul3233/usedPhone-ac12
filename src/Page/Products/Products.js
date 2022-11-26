import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Product from './Product';

const Products = () => {
     const  products  = useLoaderData();
     const {loading} = useContext(AuthContext)

     if (loading) {
          return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     }

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