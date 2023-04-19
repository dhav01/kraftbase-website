import { motion } from 'framer-motion';
import {  EnvelopeIcon } from '@heroicons/react/24/solid';

const ContactSection = () => {
  return (
    <section className="container-x flex flex-col justify-start">
      
      {/*  <motion.h1
        style={{ y: 52, opacity: 0.9 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mb-2 text-left text-4xl font-bold capitalize xsm:text-5xl sm:mb-4 sm:text-center lg:text-6xl"
      >
        <div className='flex flex-col gap-2 justify-start items-start'>
          <span>Let&apos;s talk</span><span className='-ml-8'> about your project.</span>
        </div>
      </motion.h1> */}
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
