import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModel = ({ itemProduct, setItemProduct }) => {


     const { user, loading } = useContext(AuthContext)


     const submitbookingmodal = (event) => {
          event.preventDefault()

          const form = event.target;
          const displayName = form.name.value;
          const email = form.email.value;
          const product_name = form.product_name.value;
          const resale_price = form.resale_price.value;
          const location = form.location.value;
          const mobile_number = form.mobile_number.value;

          const order = {
               displayName,
               email,
               product_name,
               resale_price,
               location,
               mobile_number,
               product_img: itemProduct?.product_img
          }

          fetch('https://usedphone-server.vercel.app/orders', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(order)
          })
               .then(res => res.json())
               .then(data => {
                    setItemProduct(null)
                    toast.success('Order Booked successfully')

               })
               .catch(error => {
                    console.log(error)
                    toast.error('Somthing wrong try again')
               })

     }



     return (
          <>
               <input type="checkbox" id="booking-modal" className="modal-toggle" />

               <div className="modal">
                    <div className="modal-box relative">
                         <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                         <h3 className="text-lg font-bold">{itemProduct?.product_name}</h3>
                         <form onSubmit={submitbookingmodal} action="">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input type="text" name='name' placeholder="name" className="input input-bordered" defaultValue={user?.displayName} disabled />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="text" name='email' placeholder="email" className="input input-bordered" defaultValue={user?.email} disabled />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Item name</span>
                                   </label>
                                   <input type="text" name='product_name' placeholder="item name" className="input input-bordered" defaultValue={itemProduct?.product_name} disabled />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Price$</span>
                                   </label>
                                   <input type="text" name='resale_price' placeholder="price$" className="input input-bordered" defaultValue={itemProduct?.resale_price} disabled />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Location</span>
                                   </label>
                                   <input type="text" name='location' placeholder="Location" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Phone number</span>
                                   </label>
                                   <input type="text" name='mobile_number' placeholder="phone number" className="input input-bordered" />
                              </div>
                              <div className='text-center '>
                                   <button href='#' type='submit' className="btn bg-green-700 my-5 w-80 "
                                   >Book Now</button>
                              </div>
                         </form>
                    </div>
               </div>
          </>
     );
};

export default BookingModel;