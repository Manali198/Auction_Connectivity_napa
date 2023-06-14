import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

import NapaLounge from '../components/NapaLounge/NapaLounge';

const Home: NextPage = () => {
  useEffect(() => {
    document.body.classList.add('home_page');
    return () => {
      document.body.classList.remove('home_page');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>NAPA Society | Home</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hm_sc hm_sc_nplng" id="scrollElement">
        <NapaLounge />
      </div>
    </>
  );
};

export default Home;
