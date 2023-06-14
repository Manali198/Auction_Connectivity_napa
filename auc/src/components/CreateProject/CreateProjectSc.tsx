import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './CreateProjectSc.module.scss';
import React from 'react';
import CreateProject from './CreateProject';
// import CreateNewNFT from './CreateNewNFT';

export default function CreateProjectSc() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
      <div className={styles.StaylinkFrst}>
          {/* <Link href="/marketplace"><a> <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px"/>Marketplace</a></Link> */}
        </div>
          <h1 className={styles.settings}>Create Project</h1>
        <div>
          {/* <CreateNewNFT /> */}
          <CreateProject />
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
