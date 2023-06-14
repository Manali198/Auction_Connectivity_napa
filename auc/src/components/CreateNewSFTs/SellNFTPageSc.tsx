import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './SellNFTPageSc.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SellNFTPage from './SellNFTPage';

export default function SellNFTPageSc() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
      <div className={styles.StaylinkFrst}>
          <Link href="/create-new-nft-two"><a> <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px"/>Marketplace</a></Link>
        </div>
          <h1 className={styles.settings}>Sell NFT</h1>
        <div>
          <SellNFTPage />
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
