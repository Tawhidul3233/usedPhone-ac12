import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProduct = () => {

     const { user, loading } = useContext(AuthContext)
     const [products, setProducts] = useState([])


     const loadingIcon = () => {
          if (loading) {
               return <div className=' text-center my-5 '><button className="btn loading ">loading</button></div>
          }
     }

     useEffect(() => {
          fetch(`http://localhost:5000/product?email=${user?.email}`)
               .then(res => res.json())
               .then(data => setProducts(data))
               .catch(error => console.log(error))
     }, [user])

     const advertise = (product) => {
          
          fetch('http://localhost:5000/advertised',{
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then (data => {
               toast.success('Product Promoted Successfully')
          })
          .catch(err => console.log(err))
     }


     return (
          <div>
               <div>
                    <div className="overflow-x-auto w-full">
                         <table className="table w-full">

                              <thead>
                                   <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Promote</th>
                                        <th>Status</th>
                                        <th>Delete</th>
                                   </tr>
                              </thead>
                              <tbody>

                                   {
                                        products.map((product, i) => <tr key={i}>
                                             <td>{i + 1}</td>
                                             <td>
                                                  <div className="flex items-center space-x-3">
                                                       <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                 <img src={product?.product_img} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <div className="font-bold">
                                                                 {product?.product_name}
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                 {product?.resale_price}$
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>
                                             <td>
                                                  <button
                                                       onClick={() => advertise(product)}
                                                       className="btn btn-ghost btn-xs">Advertise
                                                  </button>
                                             </td>
                                             <th>
                                                  <button className="btn btn-ghost btn-xs">unsold</button>
                                             </th>
                                             <th>
                                                  <button className="btn btn-ghost btn-xs">Delete</button>
                                             </th>
                                        </tr>)
                                   }

                              </tbody>
                         </table>
                    </div>
                    < >
                         {
                              loadingIcon()
                         }
                    </>
               </div>
          </div>
     );
};

export default MyProduct;