import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './CreateNewPoolScThree.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CreateNewPoolThree from './CreateNewPoolThree';


export default function CreateNewPoolScThree() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <div className={styles.StaylinkFrst}>
          <Link href="/co-batching-pools"><a> <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px"/>Co-Batching Pools</a></Link>
        </div>
        <h1 className={styles.settings}>Create New Pool</h1>
        <div className={styles.threeLinkMain}>
          <ul>
            <li className={styles.active}>1.<Link href="#"><a> Select SNFT</a></Link> </li>
            <li className={styles.active}>2.<Link href="#"><a> Set Up Your Pool</a></Link> </li>
            <li className={styles.active}>3.<Link href="#"><a> Invite Participants</a></Link> </li>
          </ul>
        </div>
        <div>
          <CreateNewPoolThree />
        </div>
      </Container>

      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
