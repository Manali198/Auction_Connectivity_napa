import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './Leaderboards.module.scss';
import React from 'react';
import LeaderboardsTabs from './LeaderboardsTabs';

export default function LeaderboardsSc() {
  return (
    <>
      <div className={styles.LederBordBg}>
        <div className={`${styles.container}`}>
          <Container className={`${styles.settingsContainer} asinnerContainer`}>
            <h1 className={styles.settings}>SNFT Leaders</h1>
            <LeaderboardsTabs />
          </Container>
          <div>
            <hr />
            <Footer footerIconShow={false} />
          </div>
        </div>
      </div>
    </>
  );
}
