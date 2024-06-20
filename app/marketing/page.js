import React from 'react';
import BlogCard from '@/components/ui/marketing/BlogCard';

// type Props = {};

export default function Page() {
  return (
    <div className='bg-greatfront-gradient h-[100vh]'>
      <div className='grid grid-cols-3 py-6 px-4'>
        <BlogCard />
      </div>
    </div>
  );
}
