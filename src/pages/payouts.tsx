import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import Payouts from '../components/Payouts/Payouts';

const PayoutsDetail: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Payouts</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={`${styles.child} earnpage earnbg`} id="scrollElement">
        <Payouts />
      </section>
    </>
  );
};

export default PayoutsDetail;
