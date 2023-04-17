import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren } from 'react';
import Navbar from 'layout/Navbar';

function PageLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center">
        <Navbar></Navbar>
        <Fragment key={router.asPath}>{children}</Fragment>
      </div>
    </>
  );
}

export default PageLayout;
