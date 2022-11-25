import React from 'react';

const Product = ({ product }) => {
     const { product_img, product_name, post_time, location, seller_name, mobile_number, 
          orginal_price, resale_price, used_time, condition_type , features} = product
     console.log(product)
     return (
          <div>
               <div className="card border-2 shadow-xl ">
                    <div className='mx-5 mt-5'>
                         <h1 className='text-xl font-semibold'>{product_name}</h1>
                         <p className=''>Posted on {post_time}  <span className='ml-5'> Location {location} </span></p>

                    </div>
                    <div className="px-10 pt-10">
                         <img style={{ height: '250px', width: '100%' }} src={product_img} alt="Shoes" className="rounded-xl" />
                    </div>
                    <div className="card-body ">
                         <div className='flex justify-between'>
                              <div>
                                   <h2 className="">For sale by : {seller_name}</h2>
                                   <p>Contact : {mobile_number}</p>
                              </div>
                              <div>
                                  <p> Orginal Price : {orginal_price}$</p>
                                  <p> Resale Price : {resale_price}$</p>
                              </div>
                         </div>
                         <div>
                              <p> Used Time : {used_time} years</p>
                              <p> Product condition : {condition_type}</p>
                              <p>Features : {features}</p>
                         </div>
                         <div className="card-actions">
                              <button className="btn bg-green-700">Book Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Product;