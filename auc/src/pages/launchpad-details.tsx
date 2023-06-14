import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import LaunchpadDatalsSc from '../components/Launchpad/LaunchpadDatalsSc';

const LaunchpadDatals: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Launchpad</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage launchpad_datals_bg`}
          id="scrollElement"
        >
          <LaunchpadDatalsSc />
        </div>
      </section>
    </>
  );
};

export default LaunchpadDatals;
