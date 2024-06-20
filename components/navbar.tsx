'use client';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className='navbar top-0 mb-20 flex  justify-center align-middle '>
      <nav className='navBar flex gap-12'>
        <Link aria-label='Home' href='/'>
          Home
        </Link>
        <Link aria-label='Marketing' href='/marketing'>
          Marketing
        </Link>
        <Link aria-label='' href='/applications'>
          Apps
        </Link>
        <Link aria-label='Dinner' href='/e-commerce'>
          E-Commerce
        </Link>
        <Link aria-label='Old Lists' href='/design_system'>
          Design System
        </Link>
      </nav>
    </div>
  );
};
