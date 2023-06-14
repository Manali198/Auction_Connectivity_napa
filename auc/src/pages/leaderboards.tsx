import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import LeaderboardsSc from '../components/Leaderboards/LeaderboardsSc';

const Leaderboards: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | SNFT Leaaders</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage`} id="scrollElement">
          <LeaderboardsSc />
        </div>
      </section>
    </>
  );
};

export default Leaderboards;
