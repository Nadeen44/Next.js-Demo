import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-gray-800'>
      <div className='p-5'>
        <div className='flex items-center justify-between text-white'>
          <Link href="/">
            <h5 className='text-white cursor-pointer'>Next.js</h5>
          </Link>
          <div className='flex'>
            <Link href="/users">
              <h5 className='text-white cursor-pointer ml-4'>Users</h5>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
