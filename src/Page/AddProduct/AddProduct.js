import { React, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const AddProduct = () => {

     const { user } = useContext(AuthContext)
     const navigate = useNavigate()


     const [sellerVerify, setSellerVerify] = useState()

          useEffect(()=>{
               fetch(` https://usedphone-server.vercel.app/user?email=${user?.email} `)
               .then(res => res.json())
               .then(data => setSellerVerify(data[0]?.seller_verified))
          },[user])

         


     const addProductSubmit = (event) => {
          event.preventDefault()
          const form = event.target;
          const product_name = form.product_name.value;
          const category_id = form.category_id.value;
          const orginal_price = form.orginal_price.value;
          const resale_price = form.resale_price.value;
          const used_time = form.used_time.value;
          const condition_type = form.condition_type.value;
          const product_img = form.product_img.value;
          const features = form.features.value;
          const location = form.location.value;
          const post_time = form.post_time.value;
          const seller_name = form.seller_name.value;
          const mobile_number = form.mobile_number.value;
          const seller_verified = form.seller_verified.value ;
          const email = form.email.value;
          const description = form.description.value;

          const newProduct = {
               product_name,
               category_id,
               orginal_price,
               resale_price,
               used_time,
               condition_type,
               product_img,
               features,
               location,
               post_time,
               seller_name,
               mobile_number,
               seller_verified : JSON.parse(seller_verified),
               email,
               description
          }

          fetch('https://usedphone-server.vercel.app/product', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(newProduct)
          })
          .then(res => res.json())
          .then(data => {
               toast.success('Product Successfully added')
               navigate('/myproduct')
          })

          .catch(error => {
               toast.error('Product not submit something wrong')
               console.log(error)})
     }

     return (
          <div className='m-5'>
               <h1 className='my-5 text-3xl font-semibold'> Add Your Product</h1>
               <form onSubmit={addProductSubmit} className='grid  gap-4' action="">
                    <div className='grid gap-4 md:grid-cols-2'>
                         <input className=' border-2 p-2' name='product_name' type="text" placeholder='Product Name' />

                         <input className=' border-2 p-2' name='category_id' type="text" placeholder='Category id' />

                         <input className=' border-2 p-2' name='orginal_price' type="text" placeholder='Orginal Price$' />

                         <input className=' border-2 p-2' name='resale_price' type="text" placeholder='Resale Price$' />

                         <input className=' border-2 p-2' name='used_time' type="text" placeholder='Use Time years' />

                         <input className=' border-2 p-2' name='condition_type' type="text" placeholder='Condition Type' />

                         <input className=' border-2 p-2' name='product_img' type="text" placeholder='Product Img Url ' />

                         <input className=' border-2 p-2' name='features' type="text" placeholder='Features' />

                         <input className=' border-2 p-2' name='location' type="text" placeholder='Location' />

                         <input className=' border-2 p-2' value={Date().slice(0, 33)} name='post_time' type="text" placeholder='Post Time' disabled />

                         <input className=' border-2 p-2' name='seller_name' type="text" placeholder='Seller Name' defaultValue={user?.displayName} disabled />

                         <input className=' border-2 p-2' name='mobile_number' type="text" placeholder='Mobile Number' />

                         <input className=' border-2 p-2' name='seller_verified' type="text" placeholder='Seller Verified' defaultValue={sellerVerify} disabled />

                         <input className=' border-2 p-2' name='email' type="text" placeholder='Email' defaultValue={user?.email} required disabled />

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

