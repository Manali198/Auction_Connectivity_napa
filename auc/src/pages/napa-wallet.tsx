import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import WalletTwo from '@/components/Wallet/napa-wallet';


const Marketplace: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Wallet</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <WalletTwo />
        </div>
      </section>
    </>
  );
};

export default Marketplace;
