import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const NotFound: NextPage = () => {
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>Staging Site 404</title>
        <meta name="description" content="NAPA Demo Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <span className="not-fount-description">
          This page could not be found.
        </span>
        <button className="not-found-btn" onClick={() => push('/')}>
          Return to NAPA
        </button>
      </div>
    </>
  );
};

export default NotFound;
