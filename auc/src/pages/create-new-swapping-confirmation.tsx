import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewSwappingFourSc from '../components/CreateNewSwapping/CreateNewSwappingFourSc';

const CreateNewSwapping: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Create New Swapping</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage mrktplcbg`} id="scrollElement">
          <CreateNewSwappingFourSc />
        </div>
      </section>
    </>
  );
};

export default CreateNewSwapping;
