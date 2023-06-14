import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './CreateNewNFTScTow.module.scss';
import React from 'react';
import CreateNewNFTTow from './CreateNewNFTTow';

export default function CreateNewNFTScTow() {
  return (
    <div className={`${styles.container} snft-bg`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        {/* <div className={styles.pdingTop}>
          sdgg
        </div> */}
        <div className={styles.pdingTop}>
          <CreateNewNFTTow />
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
