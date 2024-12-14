// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { Authcontext } from '../Components/Provider/Authprovider';

// const PrivateRoute = ({children}) => {
//     const {user, loading}=useContext(Authcontext)
//     const location =useLocation()
//     // console.log(location);
//     if (loading) {
//         return <div className='flex items-center justify-center my-32'>
//             <span className="loading w-10 h-10 loading-spinner text-neutral"></span>
//         </div>
//     }
//     if (user && user?.email ) {
//      return children
//    } return <Navigate state={location.pathname} to='/login'></Navigate>
// };

// export default PrivateRoute;