import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import RankingsSc from '../components/Rankings/RankingsSc';

const Rankings: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Rankings</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage`} id="scrollElement">
          <RankingsSc />
        </div>
      </section>
    </>
  );
};

export default Rankings;
