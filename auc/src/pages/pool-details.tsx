import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewPoolScFour from '../components/CreateNewPool/CreateNewPoolScFour';

const CreateNewPool: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Co-Batching Pool</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={` ${styles.container} pool-detail-bg`}
        id="earn-container"
      >
        <div
          className={`${styles.child} earnpage mrktplcbg`}
          id="scrollElement"
        >
          <CreateNewPoolScFour />
        </div>
      </section>
    </>
  );
};

export default CreateNewPool;
