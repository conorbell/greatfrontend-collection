'use client';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import TextInput from '@/components/design system/TextInput';
import ProjectDescription from '@/components/general/ProjectDescription';
type Props = {};

export default function NewsLetter({}: Props) {
  const [success, setSuccess] = useState('');
  const [val, setVal] = useState('');
  const [error, setError] = useState('');
  const [hint, setHint] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateInput(val)) {
      setError('');
    }

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ email: val }),
      };
      const response = await fetch(
        'https://www.greatfrontend.com/api/projects/challenges/newsletter',
        options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSuccess(data.message);
      console.log('success', success);
    } catch (error) {
      console.error('Error during Subscription:', error.message);
    }
  };

  const validateInput = (value: string) => {
    if (!value.trim() || !value.includes('@')) {
      setError('Please enter a valid email address');
      setVal('');
      return false;
    }
    return true;
  };

  const handleHint = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError('');
    setHint('Enter your email address');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <>
      <ProjectDescription
        title={'Newsletter Section'}
        stack={'TypeScript, TailwindCSS'}
      />

      <div className='page-container flex justify-center  '>
        <section className='newsletter-container  max-w-[343px] py-8  bg-white rounded md:max-w-[768px] lg:max-w-[1440px]  '>
          <section className='content-container flex flex-col gap-4 px-3 lg:grid lg:grid-cols-2 lg:gap-4 '>
            <article className='title-list_container flex flex-col gap-8 '>
              <h2 className='font-semibold text-3xl text-neutral-900'>
                Get the finest curated abstracts delivered weekly to your inbox
              </h2>

              <ul className='feature-list flex flex-col gap-5 self-stretch'>
                <li className='flex flex-row items-center gap-3'>
                  <div className='bg-indigo-50 rounded-full'>
                    <svg
                      className='w-6 h-6'
                      viewBox='0 0 18 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                        fill='#6366F1'
                        stroke='#6366F1'
                      />
                    </svg>
                  </div>
                  <span className='flex flex-col justify-center  font-normal text-lg text-neutral-600'>
                    Exclusive access to new abstract images and collections
                  </span>
                </li>
                <li className='flex flex-row items-center gap-3'>
                  <div className='bg-indigo-50 rounded-full '>
                    <svg
                      className='w-6 h-6'
                      viewBox='0 0 18 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                        fill='#6366F1'
                        stroke='#6366F1'
                      />
                    </svg>
                  </div>
                  <span className='font-normal text-lg text-neutral-600'>
                    Unlock special promotions only for subscribers
                  </span>
                </li>
                <li className='flex flex-row items-center gap-3'>
                  <div className='bg-indigo-50 rounded-full '>
                    <svg
                      className='w-6 h-6'
                      viewBox='0 0 18 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.64715 10.5245L7.0007 10.878L7.35425 10.5245L16.1931 1.68562L16.9002 2.39272L7.0007 12.2922L1.34383 6.63539L2.05093 5.9283L6.64715 10.5245Z'
                        fill='#6366F1'
                        stroke='#6366F1'
                      />
                    </svg>
                  </div>
                  <span className='flex flex-col justify-center font-normal text-lg text-neutral-600'>
                    Regular doses of artistic inspiration
                  </span>
                </li>
              </ul>
              <section className='form-section w-[100%] mt-12 '>
                <form
                  noValidate
                  autoComplete='off'
                  className='email flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-4'
                  onSubmit={handleSubmit}
                >
                  <TextInput
                    type='email'
                    name='email'
                    value={val}
                    error={error}
                    hint={hint}
                    placeholder='name@email.com'
                    onChange={handleChange}
                    onClick={handleHint}
                  />

                  <h2 className='font-normal text-base text-neutral-600'>
                    We only send you the best! No spam.
                  </h2>

                  <div className=''>
                    <button
                      type='submit'
                      className='flex-1 w-[100%]  bg-indigo-700 px-3.5 py-2.5 rounded font-medium text-white hover:bg-indigo-800 focus:ring-indigo-800 lg:w-[98px]'
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </section>
            </article>
            <article className='relative w-[100%] h-72 md:h-[608px]'>
              <Image
                alt='abstract'
                className=' rounded-xl'
                src='/imgs/marketing/newsletter/abstract.jpg'
                fill
              />
            </article>
          </section>
        </section>
      </div>
    </>
  );
}
