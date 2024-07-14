import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../auth/AuthProvider';

const User = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  
  const handleUser = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className='flex h-screen bg-teal-100 items-center justify-center'>
      <button 
        className='bg-blue-700 px-8 py-2 text-white rounded'
        onClick={handleUser} // Attach handleUser to onClick event
      >
        {user ? user.email : ""}
      </button>
    </div>
  );
};

export default User;
