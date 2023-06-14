import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import TipsAndTutorialsSc from '../components/TipsAndTutorials/TipsAndTutorialsSc';

const TipsAndTutorials: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Tips & Tutorials</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage help_sc_bg`} id="scrollElement">
          <TipsAndTutorialsSc />
        </div>
      </section>
    </>
  );
};

export default TipsAndTutorials;
