import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Categories = () => {

     const [categories, setCategories] = useState([])
     const { loading } = useContext(AuthContext)


     useEffect(() => {
          fetch('http://localhost:5000/categories')
               .then(res => res.json())
               .then(data => setCategories(data))
               .catch(error => console.log(error))
     }, [])

     const loadingIcon = () => {
          if (loading) {
               return <div className='text-center my-5'><button className="btn loading ">loading</button></div>
          }
     }



     return (
          <div className=''>
               <div>
                    <h1 className='text-2xl font-semibold ml-5 my-5'> Browse items by category </h1>
               </div>
               {
                    loadingIcon()
               }
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                         categories.map(category => <div className="card shadow ">
                              <Link to={`/category/${category.category_id}`}><img className=' rounded-lg' style={{ width: '100%', height: '250px' }} src={category.category_img} alt="" /></Link>
                         </div>)
                    }
               </div>
          </div>
     );
};

export default Categories;