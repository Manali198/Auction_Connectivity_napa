import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import MarketplaceSc from '../components/Marketplace/MarketplaceSc';

const Marketplace: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Marketplace</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <MarketplaceSc />
        </div>
      </section>
    </>
  );
};

export default Marketplace;
