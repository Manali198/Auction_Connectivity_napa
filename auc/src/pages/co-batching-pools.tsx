import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import CoBatchingPoolsSc from '../components/CoBatchingPools/CoBatchingPoolsSc';
import ReactGA from 'react-ga';
const TRACKING_ID = 'G-QDKH4LLBNW'; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const CoBatchingPools: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Co-Batching Pools</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={ `${styles.container} cobating-bg`} id="earn-container">
        <div
          className={`${styles.child} earnpage mrktplcbg`}
          id="scrollElement"
        >
          <CoBatchingPoolsSc />
        </div>
      </section>
    </>
  );
};

export default CoBatchingPools;
