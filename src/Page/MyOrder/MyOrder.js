import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const MyOrder = () => {

     const { user, loading } = useContext(AuthContext)

     const [products, setProducts] = useState([])

     useEffect(() => {
          fetch(`https://usedphone-server.vercel.app/order?email=${user?.email}`)
               .then(res => res.json())
               .then(data => {
                    setProducts(data)
               })
               .catch(err => console.log(err))
     }, [user])



     const loadingIcon = () => {
          if (loading) {
               return <div className=' text-center my-5 '><button className="btn loading ">loading</button></div>
          }
     }


     return (
          <div>
               <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>Name</th>
                                   <th>Price$</th>
                                   <th>Payment</th>
                                   <th>Remove</th>
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
                                                            {product?.email}
                                                       </div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td>{product?.resale_price}$</td>
                                        <th>
                                             <button className="btn btn-ghost btn-xs">Payment</button>
                                        </th>
                                        <th>
                                             <button className="btn btn-ghost btn-xs">Remove</button>
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
     );
};

export default MyOrder;