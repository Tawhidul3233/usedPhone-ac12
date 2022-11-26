import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoVerified } from "react-icons/go";

const Product = ({ product }) => {
     const { product_img, product_name, post_time, location, seller_name, mobile_number,
          orginal_price, resale_price, used_time, condition_type, features, seller_verified } = product;

          const {user} = useContext(AuthContext)

     const Verified = () => {
          if (seller_verified === true) {
               return <GoVerified className='inline-block text-blue-700'> </GoVerified>
          }
     }

     return (
          <div>
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
                              <label htmlFor="my-modal-3" className="btn bg-green-700">Book Now</label>
                              <input type="checkbox" id="my-modal-3" className="modal-toggle" />


                              <div className="modal">
                                   <div className="modal-box relative">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">{product_name}</h3>
                                        <form action="">
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Name</span>
                                                  </label>
                                                  <input type="text" name='name' placeholder="name" className="input input-bordered" defaultValue={user?.displayName}  disabled />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Email</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email}  disabled />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Item name</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="item name" className="input input-bordered" defaultValue={product_name} disabled  />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Price$</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="price$" className="input input-bordered" defaultValue={resale_price} disabled />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Location</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="Location" className="input input-bordered"  />
                                             </div>
                                             <div className="form-control">
                                                  <label className="label">
                                                       <span className="label-text">Phone number</span>
                                                  </label>
                                                  <input type="text" name='email' placeholder="phone number" className="input input-bordered"  />
                                             </div>
                                             <label  className="btn bg-green-700">Book Now</label>
                                        </form>
                                   </div>
                              </div>


                              <div className=''>
                                   <button className="badge badge-outline mx-3">Advertised</button>
                                   <button className="badge badge-outline">Report Porduct</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Product;