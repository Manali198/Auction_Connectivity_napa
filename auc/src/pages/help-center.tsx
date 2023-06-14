import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import HelpCenterSc from '../components/HelpCenter/HelpCenterSc';

const HelpCenter: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Help Center</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage help_sc_bg`}
          id="scrollElement"
        >
          <HelpCenterSc />
        </div>
      </section>
    </>
  );
};

export default HelpCenter;
