import React, { useEffect, useState } from 'react';
import BookingModel from '../../BookingModel/BookingModel';
import AdvertisedItem from './AdvertisedItem';

const Advertised = () => {

     const [advertiseItem, setAdvertiseItem] = useState([])
     const [itemProduct, setItemProduct] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/advertised')
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
                    {itemProduct &&
                         <BookingModel
                              itemProduct={itemProduct}
                              setItemProduct={setItemProduct}
                         > </BookingModel>}
               </div>
          </div>
     );
};

export default Advertised;