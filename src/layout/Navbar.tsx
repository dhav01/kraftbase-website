/* eslint-disable quotes */
import Link from 'next/link';
import Logo from 'layout/Logo';
import { PropsWithClassName } from 'interfaces';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
/*   const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }); */
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);
  
  return (
    <>
      <div className={clsx('container-x fixed top-0 flex items-start justify-center border-b-2 border-gray-200',(scrollY===0)?'bg-transparent':'bg-white')}>
        <nav className=" flex w-full justify-between py-5 ">
          <Logo />
          <Menu className="hidden md:flex" />
          <a href="mailto:contact@kreaftbase.com">
            <button className="primary-button">Contact us</button>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

const Menu = ({ className }: PropsWithClassName) => {
  return (
    <>
      <ul className={clsx('my-auto flex w-full gap-5 self-start ', className)}>
        <li className="text-lg font-medium text-gray-600 hover:text-black">
          <Link href={'/services'}>Services</Link>
        </li>
        <li className="text-lg font-medium text-gray-600 hover:text-black">
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </>
  );
};
