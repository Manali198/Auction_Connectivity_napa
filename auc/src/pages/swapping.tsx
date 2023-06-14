import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import SwappingSc from '../components/Swapping/SwappingSc';

const Swapping: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Swapping</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${styles.container} swap-bg`} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <SwappingSc />
        </div>
      </section>
    </>
  );
};

export default Swapping;
