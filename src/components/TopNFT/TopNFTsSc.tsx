import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './TopNFTsSc.module.scss';
import React from 'react';
import TopNFTs from './TopNFTs';

export default function TopNFTsSc() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.TopNFT}>
        <Container className={`${styles.settingsContainer} asinnerContainer`}>
          <div className={`${styles.StaylinkFrst}`}>
            <TopNFTs />
          </div>
        </Container>
        </div>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
