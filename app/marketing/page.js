import React from 'react';
import BlogCard from '@/components/marketing/Blog Card/BlogCard';
import ProfileCard from '@/components/marketing/Profile Card/ProfileCard';
import TextInput from '@/components/design system/TextInput';
import NewsLetter from '@/components/marketing/Newsletter Section/NewsLetterSection';

// type Props = {};

export default function Page() {
  return (
    <div className='bg-greatfront-gradient min-h-[812px] flex flex-col gap-4 justify-center py-7 px-4 md:min-h-[1024px] lg:min-h-[768px] '>
      <div className='flex flex-col self-center '>
        <NewsLetter />
      </div>
      <div className='flex flex-col self-center md:flex md:flex-row gap-20  '>
        <ProfileCard />

        <BlogCard />
      </div>
    </div>
  );
}
