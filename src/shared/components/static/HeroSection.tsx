import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
const HeroSection = () => {
  return (
    <>
      <section className="container-x mb-20 mt-32  flex flex-col justify-center bg-[url('/images/noise-min.png')]">
        <header className="flex  items-center gap-8">
          <main className="w-3/5">
            <motion.h1
              style={{ y: 52, opacity: 0.9 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              className="heading-1 mb-2 text-left font-bold leading-tight  sm:mb-4"
            >
              We are a full-service agency that builds brands, websites and
              digital products for Buissness.
            </motion.h1>
            <motion.p
              style={{ y: 52 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-left text-lg font-medium capitalize text-zinc-600 sm:mb-6  sm:text-xl xl:text-2xl"
            >
              Small teams making great impact.
            </motion.p>
            <button className="primary-button mr-5 flex w-fit items-center gap-2 text-lg text-white sm:text-xl ">
              <span className="text-white">contact@kraftbase.com</span>
              <span>
                <ArrowUpRightIcon className="w-5 fill-white" />
              </span>
            </button>
          </main>
          <figure className="w-2/5">
            <Image
              width={500}
              height={550}
              src={'/image/hero-image.png'}
              alt={''}
            ></Image>
          </figure>
        </header>
      </section>
      {/*       <Marquee className='p-y w-full bg-gray-200'>Let&apos;s work together -</Marquee>
       */}{' '}
    </>
  );
};

export default HeroSection;

const WordRotation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(function () {
      const show = containerRef.current?.querySelector('span[data-show]');
      const next =
        show?.nextElementSibling ||
        containerRef.current?.querySelector('span:first-child');
      const up = document.querySelector('span[data-up]');

      if (up) {
        up.removeAttribute('data-up');
      }

      show?.removeAttribute('data-show');
      show?.setAttribute('data-up', '');
      next?.setAttribute('data-show', '');
    }, 2000);

    return clearInterval(interval);
  }, []);

  return (
    <>
      <div ref={containerRef} className="mask relative h-28 overflow-hidden">
        <span data-show>a theater.</span>
        <span>a gym.</span>
        <span>a concert hall.</span>
        <span>an arcade.</span>
      </div>
    </>
  );
};
