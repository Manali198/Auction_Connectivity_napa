import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import ProjectsSc from '../components/Projects/ProjectsSc';

const Projects: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Collection Details</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div
          className={`${styles.child} earnpage mrktplcbg`}
          id="scrollElement"
        >
          <ProjectsSc />
        </div>
      </section>
    </>
  );
};

export default Projects;
