
const Footer = () => {
  return (
    <footer className=" container-x flex w-full  flex-col justify-start  border-t-2 border-gray-200 py-8 pb-10 md:pb-32">
      <div className='flex flex-wrap justify-start gap-4 md:justify-between'>
        <button className="mr-auto   w-fit gap-1  bg-white text-lg font-bold transition-all sm:text-xl ">
          <span className="">© kraftbase. All rights reserved.</span>
        </button>
        <button className="text-md mr-5 flex w-fit items-center gap-1 bg-white font-medium text-gray-600 transition-all hover:text-black hover:underline  sm:text-xl ">
          <span className="">Privacy </span>
        </button>
        <button className="text-md mr-5 flex w-fit items-center gap-1 bg-white font-medium text-gray-600 transition-all hover:text-black hover:underline  sm:text-xl ">
          <span className="">Terms </span>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
