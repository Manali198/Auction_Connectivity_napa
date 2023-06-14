import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './CreateNewNFTSc.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CreateNewNFT from './CreateNewNFT';

export default function CreateNewNFTSc() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
      <div className={styles.StaylinkFrst}>
          <Link href="/marketplace"><a> <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px"/>Marketplace</a></Link>
        </div>
          <h1 className={styles.settings}>Create New SNFT</h1>
        <div>
          <CreateNewNFT />
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
