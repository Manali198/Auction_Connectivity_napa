import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import WithdrawalSc from '@/components/Withdrawal/WithdrawalSc';

const Withdrawal: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Withdrawal</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <WithdrawalSc />
        </div>
      </section>
    </>
  );
};

export default Withdrawal;
