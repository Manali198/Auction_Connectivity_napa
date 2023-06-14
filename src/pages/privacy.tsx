import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import PrivacyPolicySc from '../components/PrivacyPolicy/PrivacyPolicySc';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Privacy Policy</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage contact_sc_bg`}
          id="scrollElement"
        >
          <PrivacyPolicySc />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
