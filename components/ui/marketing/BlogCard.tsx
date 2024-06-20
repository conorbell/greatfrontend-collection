import React from 'react';
import Image from 'next/image';

export default function BlogCard() {
  return (
    <div className='container flex flex-col justify-center items-center'>
      <div className='card flex flex-col items-center w-[340px] bg-white rounded-lg'>
        <Image
          width={340}
          height={288}
          alt='blog card'
          className='img'
          objectFit='cover'
          src='/imgs/marketing/blogcard/spacejoy-YqFz7UMm8qE-unsplash.jpg'
        />
        <div className='card-content flex flex-col justify-center items-start gap-3 px-4 py-6'>
          <div className='badge flex items-center py-0.5 px-2 rounded-full border border-solid bg-[#f0fdf4] border-[#bbf7d0] w-[67px] '>
            <h1
              className='flex font-sans font-normal text-center text-green-700'
              id='interior'
            >
              Interior
            </h1>
          </div>
          <h1
            className='font-sans font-semibold text-lg text-neutral-900'
            id='heading'
          >
            Top 5 Living Room Inspirations
          </h1>
          <p className='font-normal font-sans text-[#525252]'>
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <button className='btn flex justify-center items-center gap-1.5 rounded font-medium text-base text-[#4338ca]'>
            Read More
            <svg
              className='w-6 h-6'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.4763 6.16658L6.00625 1.69657L7.18475 0.518066L13.6666 6.99992L7.18475 13.4817L6.00625 12.3032L10.4763 7.83325H0.333252V6.16658H10.4763Z'
                fill='#4338CA'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
