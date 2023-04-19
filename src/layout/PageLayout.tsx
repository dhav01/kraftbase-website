import { useRouter } from 'next/router';
import { Fragment, PropsWithChildren } from 'react';
import Navbar from 'layout/Navbar';
import Footer from 'shared/components/static/Footer';

function PageLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Navbar></Navbar>
        <Fragment key={router.asPath}>{children}</Fragment>
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
