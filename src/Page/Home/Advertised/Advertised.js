import userEvent from '@testing-library/user-event';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import BookingModel from '../../BookingModel/BookingModel';
import AdvertisedItem from './AdvertisedItem';

const Advertised = () => {

     const {user} = useContext(AuthContext)
     
     const [advertiseItem, setAdvertiseItem] = useState([])
     const [itemProduct, setItemProduct] = useState([])

     useEffect(() => {
          fetch('https://usedphone-server.vercel.app/advertised')
               .then(res => res.json())
               .then(data => {
                    setAdvertiseItem(data)
               })
               .catch(err => console.log(err))
     }, [])

     if(advertiseItem.length)
     return (
          <div>
               <div className=''>
                    
                         
                         <h1 className='text-2xl font-semibold ml-5 my-5'> Advertised items </h1>
                    
               </div>
               <div className='grid lg:grid-cols-3 mb-20 gap-4'>
                    
                    {
                         advertiseItem.map(adItem => <AdvertisedItem
                              adItem={adItem}
                              key={adItem._id}
                              setItemProduct={setItemProduct}

                              >
                              
                         </AdvertisedItem>)
                    }
               </div>
               <div>
                    { itemProduct &&
                         <BookingModel
                              itemProduct={itemProduct}
                              setItemProduct={setItemProduct}
                         > </BookingModel>}
               </div>
          </div>
     );
};

export default Advertised;