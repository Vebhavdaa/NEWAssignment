import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './Context/auth';

const RequireAuth = ({children}) => {
    const auth = useAuth()
    const location = useLocation();
  if(!auth.user){
    return <Navigate to="/Login" state={{path:location.pathname}} />
  }
  return children
}

export default RequireAuth