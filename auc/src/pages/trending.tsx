import type { NextPage } from 'next';
import { useEffect } from 'react';
import Head from 'next/head';
// import styles from '../../styles/pages/Home.module.scss';

import { WEBSOCKET_URL } from '../constants/url';
import styles from '../../styles/pages/Home.module.scss';

import TrendingSection from '../components/TrendingSection/Trending';
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-QDKH4LLBNW'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const WhatsTrending: NextPage = () => {
  const socket = new WebSocket(WEBSOCKET_URL);
  useEffect(() => {
    socket.addEventListener('open', () => {
      console.log('connected from client');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        <title>NAPA Society | Trending</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container}>
        <div className={`${styles.child} earnpage trending-bg`} id="scrollElement">
          <TrendingSection socket={socket} />
        </div>
      </section>
    </>
  );
};

export default WhatsTrending;
