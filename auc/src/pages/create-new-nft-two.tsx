import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewNFTScTow from '../components/CreateNewNFT/CreateNewNFTScTow';

const CreateNewPool: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | NFT Details</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage mrktplcbg`}
          id="scrollElement"
        >
          <CreateNewNFTScTow />
        </div>
      </section>
    </>
  );
};

export default CreateNewPool;
