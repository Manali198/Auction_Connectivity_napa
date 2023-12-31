import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import ValuatorSc from '../components/Valuator/ValuatorSc';

const Valuator: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | DAVE</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <ValuatorSc />
        </div>
      </section>
    </>
  );
};

export default Valuator;
