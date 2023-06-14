import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewNFTSc from '../components/CreateNewSFTs/CreateNewNFTSc';

const CreateNewSFTs: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Create SNFT</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg `} id="scrollElement">
          <CreateNewNFTSc />
        </div>
      </section>
    </>
  );
};

export default CreateNewSFTs;
