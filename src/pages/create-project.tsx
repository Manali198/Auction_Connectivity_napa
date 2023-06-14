import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CreateProjectSc from '../components/CreateProject/CreateProjectSc';
// import CreateNewNFTSc from '@/components/CreateNewNFT/CreateNewNFTSc';

const CreateProject: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Create Project</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage `} id="scrollElement">
          {/* <CreateNewNFTSc /> */}
          <CreateProjectSc />
        </div>
      </section>
    </>
  );
};

export default CreateProject;
