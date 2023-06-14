import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import SocialArtSc from '../components/SocialArt/SocialArtSc';
import ReactGA from 'react-ga';
const TRACKING_ID = "G-QDKH4LLBNW"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const SocialArt: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Social Art</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <SocialArtSc />
        </div>
      </section>
    </>
  );
};

export default SocialArt;
