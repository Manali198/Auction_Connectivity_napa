import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import SupportSc from '../components/Support/SupportSc';

const Support: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Support</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage contact_sc_bg`}
          id="scrollElement"
        >
          <SupportSc />
        </div>
      </section>
    </>
  );
};

export default Support;
