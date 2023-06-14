import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateNewSwappingThreeSc from '../components/CreateNewSwapping/CreateNewSwappingThreeSc';

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
          <CreateNewSwappingThreeSc />
        </div>
      </section>
    </>
  );
};

export default CreateNewSwapping;
