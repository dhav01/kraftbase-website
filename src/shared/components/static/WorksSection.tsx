import { ChartBarIcon, CodeBracketSquareIcon, LightBulbIcon, MegaphoneIcon, SwatchIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
const WorkSection = () => {
  
  return (
    <>
      <section className=" mx-10 mb-10 flex flex-col items-start  justify-center rounded-xl px-10 py-20 md:mb-20 xl:mb-32 ">
        <header className="mb-12">
          <motion.h3
            style={{ y: 52, opacity: 0.9 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2 text-xl font-bold capitalize tracking-wider text-gray-700 "
          >
            our Services
          </motion.h3>
          <motion.h2
            style={{ y: 52, opacity: 0.9 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mb-2  font-semibold text-black "
          >
            Kraftbase can help you grow faster.
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
        <main className='grid-container w-full '>
          {Services.map((service,index)=><Card key={index} {...service} />)}
        </main>
      </section>
    </>
  );
};

export default WorkSection;

const Card = (props: IService) => {
  const { Icon } = props;
  return (
    <article className='col-span-4'>
      <figure className='mb-4 w-fit rounded-full bg-gray-200 p-4'>
        <Icon className='w-7 text-gray-50' />
      </figure>
      <main>
        <h3 className='mb-1 font-bold text-white'>{props.title}</h3>
        <p className='text-base font-medium text-zinc-300 md:text-lg'>{props.desc}</p>
      </main>
    </article>
  );
};

interface IService{
  title: string,
  desc: string,
  Icon:any,
}
const Services: IService[] = [
  {
    Icon:LightBulbIcon,
    title: 'Product Design',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
  {
    Icon:SwatchIcon,
    title: 'UI/UX Designing',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
  {
    Icon:CodeBracketSquareIcon,
    title: 'Web Development',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
  {
    Icon:LightBulbIcon,
    title: 'Mobile DEvelopment',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
  {
    Icon:MegaphoneIcon,
    title: 'Marketing',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
  {
    Icon:ChartBarIcon,
    title: 'SEO',
    desc: 'Creating or improving products to meet user needs and market demands, using a combination of engineering, design, and marketing.',
  },
];