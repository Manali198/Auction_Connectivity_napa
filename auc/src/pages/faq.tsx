import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import FAQSc from '../components/Faq/FAQSc';

const FAQ: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | FAQ</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage contact_sc_bg faq_sc_hgt`}
          id="scrollElement"
        >
          <FAQSc />
        </div>
      </section>
    </>
  );
};

export default FAQ;
