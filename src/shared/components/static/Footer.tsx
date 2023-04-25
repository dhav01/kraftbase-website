import { EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className=" container-x flex w-full  flex-col justify-start border-t-2  border-gray-200 bg-black py-8 pb-10">
     
      <div className="mb-10 flex w-full flex-wrap  justify-start gap-4 md:mb-20 md:justify-end">
        <button className="mr-auto flex w-fit items-center gap-1  text-lg font-medium text-white transition-all hover:underline  sm:text-xl ">
          <span>
            <EnvelopeIcon className="w-6 fill-white" />
          </span>
          <span className="text-white">contact@kraftbase.com</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 text-lg font-medium text-white transition-all hover:underline  sm:text-xl ">
          <span className="text-white">twitter</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 text-lg font-medium text-white transition-all hover:underline  sm:text-xl ">
          <span className="text-white">linkedin</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 text-lg font-medium text-white transition-all hover:underline  sm:text-xl ">
          <span className="text-white">behance</span>
        </button>
        <button className="mr-5 flex w-fit items-center gap-1 text-lg font-medium text-white transition-all hover:underline  sm:text-xl ">
          <span className="text-white">dribble</span>
        </button>
      </div>
      <div className='flex flex-wrap justify-start gap-4 md:justify-between'>
        <button className="mr-auto   w-fit gap-1  text-lg font-medium text-white transition-all sm:text-xl ">
          <span className="text-white">© kraftbase. All rights reserved.</span>
        </button>
        <button className="text-md mr-5 flex w-fit items-center gap-1 font-medium text-white transition-all hover:text-black hover:underline  sm:text-xl ">
          <span className="text-gray-200 transition-colors hover:text-gray-50">Privacy </span>
        </button>
        <button className="text-md mr-5 flex w-fit items-center gap-1 font-medium text-white transition-all hover:text-black hover:underline  sm:text-xl ">
          <span className="text-gray-200 transition-colors hover:text-gray-50">Terms </span>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
