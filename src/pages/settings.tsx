import type { NextPage } from 'next';
import Head from 'next/head';
import SettingsComponent from '../components/Settings/Settings';
import styles from '../../styles/pages/Settings.module.scss';

const Settings: NextPage = () => {
  return (
    <>
      <Head>
        <title>NAPA Society | Settings</title>
        <meta name="description" content="NAPA Demo Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.settingsContainer} id="scrollElement">
        <SettingsComponent />
      </div>
    </>
  );
};

export default Settings;
