import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './LiveStreamSc.module.scss';
import React from 'react';
import LiveStreamBannner from './LiveStreamBannner';
import LiveStreamTabs from './LiveStreamTabs';

export default function LiveStreamSc() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.OverLayLiveStream}>
        <Container
          className={`${styles.settingsContainer} asinnerContainer lnchpadbg`}
        >
          <div className={`${styles.StaylinkFrst}`}>
            <LiveStreamBannner />
          </div>
        </Container>
      </div>
      <div className={styles.tabsContiner}>
        <Container className={`${styles.settingsContainer} asinnerContainer`}>
          <LiveStreamTabs />
        </Container>
      </div>
      <div className={styles.footer}> 
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
