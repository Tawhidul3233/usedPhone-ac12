import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
     const {user, loading} = useContext(AuthContext);
     const location = useLocation()

     if (loading) {
          return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     }

     if(user){
          return children;
     }
     return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRouter;