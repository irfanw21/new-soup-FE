// import React from 'react';
// import { Navigate, useLocation, Outlet } from 'react-router-dom';
// import useToken from '../hooks/useToken';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const token = useToken('token'); 
// 	const location = useLocation();

//   if (!token) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <Outlet />;
// };

// export default PrivateRoute;