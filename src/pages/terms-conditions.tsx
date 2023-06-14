import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import TermsConditionsSc from '../components/TermsandConditions/TermsConditionsSc';

const TermsConditions: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Terms and Conditions</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage contact_sc_bg`}
          id="scrollElement"
        >
          <TermsConditionsSc />
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
