import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const{logOut}=useContext(AuthContext)
  const handleLogout=()=>{
    logOut().then(() => {
      alert("logout sucessfully")
      navigate(from, { replace: true });
    }).catch((error) => {
      // An error happened.
    });

  }
  return (
    <div className=' flex h-screen bg-teal-100 items-center justify-center'>
      <button className=' bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout