import React, { useContext, useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoVerified } from "react-icons/go";
import toast from 'react-hot-toast';

const Product = ({ product, setItemProduct }) => {

     const { product_img, product_name, post_time, location, seller_name, mobile_number,
          orginal_price, resale_price, used_time, condition_type, features, seller_verified } = product

     const { user, loading } = useContext(AuthContext)


     const Verified = () => {
          if (seller_verified === true) {
               return <GoVerified className='inline-block text-blue-700'> </GoVerified>
          }
     }

     const loadingIcon = () => {
          if (loading) {
               return <div className=' text-center my-5 '><button className="btn loading ">loading</button></div>
          }
     }

     const wishlistItems = ()=>{
          
          const wishproduct ={
               email: user?.email,
               product_name: product.product_name,
               product_img: product.product_img,
               resale_price: product.resale_price

          }
          
          fetch('http://localhost:5000/wishlist',{
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify(wishproduct)
          })
          .then(res => res.json())
          .then(data => {
               toast.success('This items successfully add your wishlist')
          })
          .catch(err => console.log(err))
     }


     return (
          <div>
               {loadingIcon()}
               <div className="card border-2 shadow-xl ">
                    <div className='mx-5 mt-5'>
                         <h1 className='text-xl font-semibold'>{product_name}</h1>
                         <p className=''>Posted on {post_time}  <span className='ml-5'> Location {location} </span></p>

                    </div>
                    <div className="px-10 pt-10">
                         <PhotoProvider>
                              <PhotoView key={''} src={product_img}>
                                   <img className="rounded-xl" style={{ height: '250px', width: '100%' }} src={product_img} alt="" />
                              </PhotoView>
                         </PhotoProvider>
                    </div>
                    <div className="card-body ">
                         <div className='flex justify-between'>
                              <div>
                                   <h2 className="text-xl font-semibold">For sale by : {seller_name} {Verified()} </h2>
                                   <p className='text-xl font-semibold'>Contact : {mobile_number}</p>
                              </div>
                              <div className='text-right'>
                                   <p className="text-xl font-semibold"> Orginal Price : <span className="text-2xl text-green-500 font-semibold">{orginal_price}$</span></p>
                                   <p className="text-xl font-semibold"> Resale Price : <span className="text-2xl text-green-500 font-semibold" >{resale_price}$</span></p>
                              </div>
                         </div>
                         <div>
                              <p> <span className=' font-semibold'>Used Time :</span> {used_time} years</p>
                              <p> <span className=' font-semibold'>Product condition :</span> {condition_type}</p>
                              <p> <span className=' font-semibold'>Features : </span>{features}</p>
                         </div>
                         <div className="card-actions my-5 flex items-center justify-between">

                              <label htmlFor="booking-modal" className="btn bg-green-700"
                                   onClick={() => setItemProduct(product)}
                              >Purchase Now</label>

                              <div className=''>
                                   <button className="badge badge-outline mx-3">
                                        Advertised
                                   </button>
                                   <button onClick={()=>wishlistItems(product)} className="badge badge-outline">
                                        Wishlist
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Product;