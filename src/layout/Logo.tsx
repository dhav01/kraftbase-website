import clsx from 'clsx';
import Link from 'next/link';
interface LogoProps {
  classNames?: string;
}

const Logo = ({ classNames = '' }: LogoProps) =>{
  return (
    <Link href={'/'} passHref className={clsx('xsm:ml-14 block translate-y-[-2px] font-serif text-2xl text-zinc-600 md:ml-11',classNames)}>
      <span className="text-3xl font-bold text-black">Kraftbase</span>
    </Link>
  );
};

export default Logo;
