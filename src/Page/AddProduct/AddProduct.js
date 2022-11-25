import { React, useState } from 'react';


const AddProduct = () => {
     <div>
          <input value={Date().slice(0, 33)} type="text" placeholder="Type here" className="input input-bordered w-full " />
     </div>


     return (
          <div className='m-5'>
               <h1 className='my-5 text-3xl font-semibold'> Add Your Product</h1>
               <form  className='grid  gap-4' action="">
                    <div className='grid gap-4 md:grid-cols-2'>
                         <input className=' border-2 p-2' name='product_name' type="text" placeholder='Product Name'  />

                         <input className=' border-2 p-2' name='category_id' type="text" placeholder='Category id'  />

                         <input className=' border-2 p-2' name='orginal_price' type="text" placeholder='Orginal Price$' />

                         <input className=' border-2 p-2' name='resale_price' type="text" placeholder='Resale Price$' />

                         <input className=' border-2 p-2' name='used_time' type="text" placeholder='Use Time years' />

                         <input className=' border-2 p-2' name='condition_type' type="text" placeholder='Condition Type' />

                         <input className=' border-2 p-2' name='product_img' type="text" placeholder='Product Img Url ' />

                         <input className=' border-2 p-2' name='features' type="text" placeholder='Features' />

                         <input className=' border-2 p-2' name='location' type="text" placeholder='Location' />

                         <input className=' border-2 p-2' value={Date().slice(0, 33)} name='post_time' type="text" placeholder='Post Time' disabled />

                         <input className=' border-2 p-2' name='seller_name' type="text" placeholder='Seller Name' />

                         <input className=' border-2 p-2' name='mobile_number' type="text" placeholder='Mobile Number' />

                         <input className=' border-2 p-2' name='seller_verified' type="text" placeholder='Seller Verified' defaultValue={false} disabled />

                         <input className=' border-2 p-2' name='email' type="text" placeholder='Email' required />

                    </div>
                    <textarea className='border-2 p-4' name="description" id="" cols="30" rows="10" placeholder='Description'></textarea>
                    <div className='text-center'>
                         <div className="form-control my-6">
                              <button className="btn bg-green-700">Add your new services</button>
                         </div>
                    </div>
                    <div>
                         <p>note : category id vivo/realme/oppo = 1/2/3</p>
                    </div>
               </form>

          </div>
     );
};

export default AddProduct;

