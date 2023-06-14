import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewPoolSc from '../components/CreateNewPool/CreateNewPoolSc';

const CreateNewPool: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | New Co-Batching Pool</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <CreateNewPoolSc />
        </div>
      </section>
    </>
  );
};

export default CreateNewPool;
