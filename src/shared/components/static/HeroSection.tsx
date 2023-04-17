import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <>
      <section className="container flex flex-col items-center justify-center px-44 py-5 pt-40">
        <header className="px-20">
          <motion.h1 style={{y:52,opacity:0.9}} whileInView={{y:0,opacity:1}} className="mb-4 text-center text-8xl font-bold capitalize">We build, Market <span> digital products</span>  to help businesses succeed.</motion.h1>
          <motion.p style={{y:52}} whileInView={{y:0}} className="mb-6 text-center text-2xl font-medium capitalize text-zinc-600">Small teams making great impact.</motion.p>
        </header>
        <div>
          <button className='primary-button w-fit text-xl'>Let&apos;s Talk <span></span></button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
