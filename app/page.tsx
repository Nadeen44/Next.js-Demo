'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();

  const handleCreateClick = () => {
    // Handle create button click logic here
    console.log('Create button clicked');
    router.push('/users'); // Navigate programmatically to '/users' route
  };

  return (
    <div>
      <button className='bg-gray-600 p-3 rounded-3xl text-white' onClick={()=> {router.push('/users');}}>
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
