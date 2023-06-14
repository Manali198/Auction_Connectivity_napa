import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewPoolScThree from '../components/CreateNewPool/CreateNewPoolScThree';

const CreateNewPoolThree: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | New Co-Batching Pool</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <CreateNewPoolScThree />
        </div>
      </section>
    </>
  );
};

export default CreateNewPoolThree;
