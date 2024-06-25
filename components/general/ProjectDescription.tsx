import React from 'react';

export default function ProjectDescription({ title, stack }) {
  return (
    <section className='self-start text-slate-950'>
      <h1 className='font-medium text-xl'>{title}</h1>
      <h2 className='font-light text-lg '>Built With: {stack}</h2>
    </section>
  );
}
