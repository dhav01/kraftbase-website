import { ArrowUpRightIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Image from 'next/image';
const TechStackIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',

];

const ServicePage = () => {
  return (
    <>
      <section className="container-x mb-20 mt-32 flex flex-col justify-center bg-[url('/images/noise-min.png')] pt-20">
        <header className="flex flex-col items-center  gap-8 md:flex-row">
          <main className="md:w-4/5">
            <motion.h3
              style={{ y: 52, opacity: 0.9 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2 text-xl font-bold uppercase tracking-wider text-blue-700  "
            >
              Products & services
            </motion.h3>
            <motion.h1
              style={{ y: 52, opacity: 0.9 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
              className="display-1 mb-2 text-left font-bold leading-tight  sm:mb-4"
            >
              Build, improve & market your digital product with a one-stop team.
            </motion.h1>
            <motion.p
              style={{ y: 52 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-left text-lg font-medium capitalize text-zinc-600 sm:mb-6  sm:text-xl xl:text-2xl"
            >
              We can handle your entire project from start to finish or
              collaborate with your product or engineering team on a continuous
              engagement with a dedicated team of experts.{' '}
            </motion.p>
          </main>
        </header>
        <figure className="relative mt-20 h-full overflow-hidden">
          <Image
            priority
            alt="hero-image"
            src={'/image/hero-image.png'}
            width={1512}
            height={600}
            className="rounded-lg "
          ></Image>
        </figure>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-8 pr-0 md:flex-row">
        <main className="relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">
            Digital Product Design
          </h2>
          <p className="text-xl">
            Turning a Idea into a viable product and more.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded">
          <Image
            width={500}
            height={330}
            src={'/image/product-design.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-20 bg-blue-50 bg-opacity-50 py-40 pl-0 md:flex-row-reverse">
        <main className="ml- relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">Web Development</h2>
          <p className="mb-4 text-xl font-bold">
            Turning a Idea into a viable product and more.
          </p>
          <p className="mb-2 text-xl">
            With access to over 170+ proactive and social professionals, you can
            form a durable development team with frontend, backend, or cloud
            services that can assist you for years.
          </p>
          <p className="text-xl">
            In their work, they follow 9 years of best custom software
            development practices we documented. You’ll be positively surprised
            with the very first sprint.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded md:rounded-l">
          <Image
            width={500}
            height={330}
            src={'/image/web-development.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
      <section className="container-x md:mx-auto md:w-8/12">
        <header className="mb-12">
          <h2 className="2lg:text-4xl mb-5 text-center text-3xl font-semibold uppercase text-secondary">
            We use Latest Techstack.
          </h2>
          <p className="text-deepforestlight w-full text-center text-lg font-medium">
            After our services the clients got .
          </p>
        </header>
        <ol className="flex flex-wrap justify-center gap-16 md:gap-x-32 ">
          {TechStackIcons.map((icon, index) => {
            return (
              <li key={index}>
                <Image width={50} height={50} src={icon} alt={'icon'}></Image>
              </li>
            );
          })}
        </ol>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-8 pr-0 md:flex-row">
        <main className="relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">
            Digital Product Design
          </h2>
          <p className="text-xl">
            Turning a Idea into a viable product and more.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded">
          <Image
            width={500}
            height={330}
            src={'/image/product-design.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-20 bg-blue-50 bg-opacity-50 py-40 pl-0 md:flex-row-reverse">
        <main className="ml- relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">Web Development</h2>
          <p className="mb-4 text-xl font-bold">
            Turning a Idea into a viable product and more.
          </p>
          <p className="mb-2 text-xl">
            With access to over 170+ proactive and social professionals, you can
            form a durable development team with frontend, backend, or cloud
            services that can assist you for years.
          </p>
          <p className="text-xl">
            In their work, they follow 9 years of best custom software
            development practices we documented. You’ll be positively surprised
            with the very first sprint.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded md:rounded-l">
          <Image
            width={500}
            height={330}
            src={'/image/web-development.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-8 pr-0 md:flex-row">
        <main className="relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">
            Digital Product Design
          </h2>
          <p className="text-xl">
            Turning a Idea into a viable product and more.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded">
          <Image
            width={500}
            height={330}
            src={'/image/product-design.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
      <section className="container-x group mt-20 flex flex-col gap-20 bg-blue-50 bg-opacity-50 py-40 pl-0 md:flex-row-reverse">
        <main className="ml- relative flex-1 ">
          <h2 className=" mb-4 w-fit rotate-12 text-5xl font-bold  text-gray-300 ">
            01
          </h2>
          <h2 className="mb-2 font-medium text-black">Web Development</h2>
          <p className="mb-4 text-xl font-bold">
            Turning a Idea into a viable product and more.
          </p>
          <p className="mb-2 text-xl">
            With access to over 170+ proactive and social professionals, you can
            form a durable development team with frontend, backend, or cloud
            services that can assist you for years.
          </p>
          <p className="text-xl">
            In their work, they follow 9 years of best custom software
            development practices we documented. You’ll be positively surprised
            with the very first sprint.
          </p>
        </main>
        <figure className=" flex-1 overflow-hidden  rounded md:rounded-l">
          <Image
            width={500}
            height={330}
            src={'/image/web-development.png'}
            className="w-full scale-105 transition group-hover:scale-100 "
            alt={'product-design'}
          ></Image>
        </figure>
      </section>
    </>
  );
};

export default ServicePage;
