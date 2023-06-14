import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import LiveStreamSc from '../components/LiveStream/LiveStreamSc';

const Launchpad: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Livestream</title>
        <meta name="description" content="NAPA Society Livestream" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage`} id="scrollElement">
          <LiveStreamSc />
        </div>
      </section>
    </>
  );
};

export default Launchpad;
