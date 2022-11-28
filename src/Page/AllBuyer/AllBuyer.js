import React, { useEffect, useState } from 'react';

const AllBuyer = () => {


     const {user, loading} =useState([])

     const [buyers, setBuyers] = useState([])

     useEffect(() => {
          fetch('https://usedphone-server.vercel.app/allbuyer')
               .then(res => res.json())
               .then(data => setBuyers(data))
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
                                        <th>Buyers</th>
                                        <th>Remove</th>
                                   </tr>
                              </thead>
                              <tbody>

                                   {
                                        buyers.map((buyer, i) => <tr key={i}>
                                             <td>{i + 1}</td>
                                             <td>
                                                  <div className="flex items-center space-x-3">
                                                       <div>
                                                            <div className="font-bold">
                                                                 {buyer?.displayName}
                                                            </div>
                                                            <div className="text-sm opacity-50">
                                                                 {buyer?.email}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </td>

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

export default AllBuyer;