import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';


const Allseller = () => {

     const { user, loading } = useContext(AuthContext)

     const [sellers, setSellers] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/allseller')
               .then(res => res.json())
               .then(data => setSellers(data))
     }, [])



     const loadingIcon = () => {
          if (loading) {
               return <div className=' text-center my-5 '><button className="btn loading ">loading</button></div>
          }
     }


     return (
          <div>
               <div>
                    <div className="overflow-x-auto w-full">
                         <table className="table w-full">

                              <thead>
                                   <tr>
                                        <th>No</th>
                                        <th>Sellers</th>
                                        <th>Verified Seller</th>
                                        <th>Remove</th>
                                   </tr>
                              </thead>
                              <tbody>

                                   {
                                        sellers.map((seller, i) => <tr key={i}>
                                             <td>{i + 1}</td>
                                             <td>
                                                  <div className="flex items-center space-x-3">
                                                       <div>
                                                            <div className="font-bold">
                                                                 {seller?.displayName}
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                 {seller?.email}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>
                                             
                                             <th>
                                                  <button className="btn btn-ghost btn-xs"> Verify </button>
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
          </div>
     );
};

export default Allseller;