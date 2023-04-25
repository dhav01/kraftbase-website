import clsx from 'clsx';
import Link from 'next/link';
interface LogoProps {
  classNames?: string;
}

const Logo = ({ classNames = '' }: LogoProps) =>{
  return (
    <Link href={'/'} passHref className={clsx('mr-6 flex translate-y-[-2px] items-center font-serif text-2xl text-black md:mr-12',classNames)}>
      <span className="text-3xl font-bold text-black">Kraftbase</span>
    </Link>
  );
};

export default Logo;
