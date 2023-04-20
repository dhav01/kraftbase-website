import { motion } from 'framer-motion';
import {  EnvelopeIcon } from '@heroicons/react/24/solid';

const ContactSection = () => {
  return (
    <section className="container-x flex flex-col justify-start">
      
      <main className='w-10/12'></main>
      <div className='mb-8 flex w-full justify-end'>
        <button className="mr-auto flex w-fit items-center gap-1  bg-white text-lg font-bold transition-all hover:underline  sm:text-xl ">
          <span>
            <EnvelopeIcon className="w-6 " />
          </span>  
          <span className="">contact@kraftbase.com</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 bg-white text-lg font-bold transition-all hover:underline  sm:text-xl ">
          <span className="">twitter</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 bg-white text-lg font-bold transition-all hover:underline  sm:text-xl ">
          <span className="">linkedin</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 bg-white text-lg font-bold transition-all hover:underline  sm:text-xl ">
          <span className="">behance</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 bg-white text-lg font-bold transition-all hover:underline  sm:text-xl ">
          <span className="">dribble</span>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
