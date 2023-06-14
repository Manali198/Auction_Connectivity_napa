import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewNFTScTow from '../components/CreateNewSFTs/CreateNewNFTScTow';

const CreateNeSFTsTwo: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | SNFT Details </title>
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

export default CreateNeSFTsTwo;
