import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './LaunchPadSc.module.scss';
import React from 'react';
import LaunchPad from './LaunchPad';
import LaunchPadTab from './LaunchPadTab';

export default function LaunchPadSc() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.OverLayLaunchpad}>
        <Container className={`${styles.settingsContainer} asinnerContainer lnchpadbg`}>
          <div className={`${styles.StaylinkFrst}`}>
            <LaunchPad />
          </div>
        </Container>
        </div>
        <Container className={`${styles.settingsContainer} asinnerContainer`}>
          <div className={`${styles.LaunchPadTabMain}`}>
           <LaunchPadTab />
          </div>
        </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
