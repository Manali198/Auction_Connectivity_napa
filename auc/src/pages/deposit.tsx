import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import DepositSc from '@/components/Deposit/DepositSc';


const Deposit: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Deposit</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <DepositSc />
        </div>
      </section>
    </>
  );
};

export default Deposit;
