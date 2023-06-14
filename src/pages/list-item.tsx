import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';

import SellNFTPageSc from '../components/CreateNewNFT/SellNFTPageSc';

const CreateNewPool: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Sell NFT</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage`} id="scrollElement">
          <SellNFTPageSc />
        </div>
      </section>
    </>
  );
};

export default CreateNewPool;
