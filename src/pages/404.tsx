import Link from 'next/link';

const ErrorPage = () => {
  return (
    <>
      <section className="container flex min-h-screen flex-col  items-center justify-center pt-32">
        <div className="relative -mt-20 mb-4">
          <span className="glitch text-9xl" title="404">
            404
          </span>
        </div>
        <h3 className="mb-4 text-2xl font-medium">Page not Found</h3>
        <Link href={'/'}>
          <button className="primary-button"> Return to Home Page</button>
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
