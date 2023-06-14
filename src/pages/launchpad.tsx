import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import LaunchPadSc from '../components/Launchpad/LaunchPadSc';

const Launchpad: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Launchpad</title>
        <meta name="description" content="NAPA Society Launchpad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage`} id="scrollElement">
          <LaunchPadSc />
        </div>
      </section>
    </>
  );
};

export default Launchpad;
