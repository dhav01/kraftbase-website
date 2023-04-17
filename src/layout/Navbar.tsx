import Link from 'next/link';
import Logo from 'layout/Logo';

const Navbar = () => {
  return (
    <>
      <nav className="container fixed top-0 flex justify-between border-b-2 border-gray-200 px-12 py-5">
        <Logo/>
        <Menu />
        <button className="primary-button">Contact us</button>
      </nav>
    </>
  );
};

export default Navbar;

const Menu = () => {
  return (
    <>
      <ul className="my-auto flex gap-5">
        <li className="text-lg font-medium text-gray-600 hover:text-black"><Link href={'/services'}>Services</Link></li>
        <li className="text-lg font-medium text-gray-600 hover:text-black"><Link href={'/blog'}>Blog</Link></li>
      </ul>
    </>
  );
};
