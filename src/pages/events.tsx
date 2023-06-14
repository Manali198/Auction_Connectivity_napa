 import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import EventsList from '../components/events/EventsList';

const Events: NextPage = () => {

  return (
    <>
      <Head>
        <title>NAPA Society | Events</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <EventsList />
        </div>
      </section>
    </>
  );
};

export default Events;
