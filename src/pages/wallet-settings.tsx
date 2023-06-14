import Head from 'next/head';
import styles from '../../styles/pages/Home.module.scss';
import type { NextPage } from 'next';
import WalletSettingsSc from '@/components/WalletSettings/WalletSettingsSc';

const WalletSettings: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Wallet Settings</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.container} id="earn-container">
        <div className={`${styles.child} earnpage earnbg`} id="scrollElement">
          <WalletSettingsSc />
        </div>
      </section>
    </>
  );
};

export default WalletSettings;
