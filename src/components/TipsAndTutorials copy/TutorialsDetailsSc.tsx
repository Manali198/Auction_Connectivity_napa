import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './TutorialsDetailsSc.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TutorialsDetailsSc() {
 
  return (
    <>
      <div className={`${styles.container} `}>
        <div className="bottom_overly_pernt">
          <Container className={`${styles.settingsContainer} asinnerContainer`}>
            <div className={styles.StaylinkFrst}>
              <Link href="tutorials"><a> <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px"/>Tips and Tutorials</a></Link>
            </div>
              <h1 className={styles.settings}>How to make an SNFT of your video</h1>
              <div className={styles.StaylsHed}>
                <div className={styles.StaylsSecHead}>
                  <Image
                      src="/img/six_ic01.svg"
                      alt=""
                      width="60px"
                      height="60px"
                    />
                    <div className={styles.StaylsSecSixhed}>
                      <h4>Tutorials</h4>
                      <h2>6 videos</h2>
                    </div>
                </div>
                <div className={styles.StaylsSecHead}>
                  <Image
                      src="/img/six_ic02.svg"
                      alt=""
                      width="60px"
                      height="60px"
                    />
                    <div className={styles.StaylsSecSixhed}>
                      <h4>Duration</h4>
                      <h2>1 hrs  12 min</h2>
                    </div>
                </div>
              </div>
              <div className={styles.StaylsSecSixPregrf}>
                <p>Cryptocurrency, blockchain, NFT: these are all terms that are gradually becoming more and more present in everyday conversations.</p>
              </div>
              <div className={styles.LdrbrdListOverlay}>
                <div className={styles.LdrbrdList}>
                  <div className={styles.CustomGridContainer}>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>02:44</p>
                      <h4>1. Blockchain Tutorial for Beginners</h4>
                    </div>
                    
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img02.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>04:56</p>
                      <h4>2. What is Blockchain Technology?</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img03.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>15:24</p>
                      <h4>3. Why is Blockchain Important?</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img04.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>01:23</p>
                      <h4>4. What is Blockchain? Features and Use Cases</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img05.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>08:34</p>
                      <h4>5. Bitcoin vs Ethereum: Which One is Better?</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img06.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>06:12</p>
                      <h4>6. The Complete Guide for Types of Blockchain!</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img04.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>01:23</p>
                      <h4>4. What is Blockchain? Features and Use Cases</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img05.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                      <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>08:34</p>
                      <h4>5. Bitcoin vs Ethereum: Which One is Better?</h4>
                    </div>
                    <div className={styles.ostmImg}>
                      <Image
                        src="/img/gread_img06.png"
                        height="270px"
                        width="373px"
                        alt=""
                      />
                     <div className={styles.VideobButton}>
                        <button className={styles.VideobButtonPlay}>
                          <Image src="/img/butan_ic.png" alt="" width="48px" height="48px"/>
                        </button>
                      </div>
                      <p>06:12</p>
                      <h4>6. The Complete Guide for Types of Blockchain!</h4>
                    </div>
                  </div>
                </div>
              </div>
          </Container>
        </div>
        <div>
          <hr />
          <Footer footerIconShow={false} />
        </div>
      </div>
    </>
  );
}
