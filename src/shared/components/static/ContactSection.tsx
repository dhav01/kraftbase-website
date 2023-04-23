import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import InputField from 'shared/components/forms/InputField';
import TextArea from 'shared/components/forms/TextArea';

const ContactSection = () => {
  return (
    <section className="container-x w-full flex flex-col justify-start">
      <main className=" mb-4 flex flex-col justify-between md:mb-8 md:flex-row">
        <header className="mb-8 md:mb-4">
          <motion.h3
            style={{ y: 52, opacity: 0.9 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2  text-xl font-bold capitalize tracking-wider text-gray-900  "
          >
            Contact Us
          </motion.h3>
          <motion.h2
            style={{ y: 52, opacity: 0.9 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2  font-semibold text-black "
          >
            Get in touch with our friendly team.
          </motion.h2>
          <motion.p
            style={{ y: 52 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-left text-lg font-medium capitalize text-zinc-600 sm:mb-6  sm:text-xl xl:text-2xl"
          >
            Small teams making great impact.
          </motion.p>
        </header>
        <form className="md:w-5/12" action="">
          <div className="flex gap-3">
            <InputField
              name={'First Name'}
              type={''}
              Icon={null}
              required={false}
            ></InputField>
            <InputField
              name={' Last Name'}
              type={''}
              Icon={null}
              required={false}
            ></InputField>
          </div>
          <InputField
            className="mb-2"
            name={' Email'}
            type={''}
            Icon={null}
            required={false}
          ></InputField>
          <InputField
            className="mb-2"
            name={' Phone Number'}
            type={''}
            Icon={null}
            required={false}
          ></InputField>
          <TextArea
            className="mb-2"
            onChange={() => {
              console.log();
            }}
            placeholder=""
            label
            name={'Message'}
            required={false}
          />
          <div className="w-full px-4">
            <button className="primary-button rounded py-2 bg-secondary w-full">
              Send us a Message
            </button>
          </div>
        </form>
      </main>
      <div className="mb-8 flex w-full  flex-wrap justify-start gap-4 md:justify-end">
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
