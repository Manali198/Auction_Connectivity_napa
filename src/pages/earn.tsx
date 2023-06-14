import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../../styles/pages/Home.module.scss';
import EarnPage from '../components/Earn/EarnPage';

const Earn: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Staking </title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <EarnPage />
        </div>
      </section>
    </>
  );
};

export default Earn;
