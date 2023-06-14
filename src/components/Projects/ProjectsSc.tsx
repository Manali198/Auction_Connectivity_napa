import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './ProjectsSc.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SadNessActivity from './ProjectsActivity';
import SadNessItem from './ProjectsItem';
import SadNessAnalytics from './ProjectsAnalytics';

export default function ProjectsSc() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <div className={styles.pdingTop}>
          <div className={styles.StaylinkFrst}>
            <Link href="/marketplace"><a> <Image src="/img/arrow_icon.svg" alt="" width="30px" height="16px"/>Marketplace</a></Link>
          </div>
          <div className={styles.LncpadDtlUpCont}>
            <div className={styles.onlyImgBox}>
              <Image
                  src="/img/launchpad_datal_imgaj.png"
                  height="294px"
                  width="294px"
                  alt=""
              />
            </div>
            <div className={styles.rightContnt}>
              <h1>Bless the Fallout Sadness</h1>
              <p>Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in.</p>
              <div className={styles.flxBlleinnr}>
                <div className={styles.upCont}>
                  <Image
                      src="/img/feed_small_img01.png"
                      height="40px"
                      width="40px"
                      alt=""
                      className=""
                  />
                  <p>@DorothyMccoy</p>
                </div>
                <div className={styles.AllLinkFlex}>
                  <div className={styles.SocialLinks}>
                    <Link href="/"><a><Image src="/img/facebook_ic.svg" height="24px" width="24px" alt="" className=""/></a></Link>
                    <Link href="/"><a><Image src="/img/instagram_ic.svg" height="24px" width="24px" alt="" className=""/></a></Link>
                    <Link href="/"><a><Image src="/img/twitter_ic.svg" height="24px" width="24px" alt="" className=""/></a></Link>
                  </div>
                  <button><Image src="/img/star_ic.svg" height="24px" width="24px" alt="" className=""/></button>
                  <Link href="/"><a><Image src="/img/share_ic.svg" height="24px" width="24px" alt="" className=""/></a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.MianPentBasisBox}>
            <div className={styles.CurrentBitBoxInrr}>
              <p>Total Volume</p>
              <div className={styles.imgAdnHH}>
                  <Image
                      src="/img/napa_ic.svg"
                      height="28px"
                      width="28px"
                      alt=""
                      className=""
                  />
                  <h3>4.6</h3>
              </div>
            </div>
            <div className={styles.CurrentBitBoxInrr}>
              <p>Floor Price</p>
              <div className={styles.imgAdnHH}>
                  <Image
                      src="/img/napa_ic.svg"
                      height="28px"
                      width="28px"
                      alt=""
                      className=""
                  />
                  <h3>1.02</h3>
              </div>
            </div>
            <div className={styles.CurrentBitBoxInrr}>
              <p>Best Offer</p>
              <div className={styles.imgAdnHH}>
                  <Image
                      src="/img/napa_ic.svg"
                      height="28px"
                      width="28px"
                      alt=""
                      className=""
                  />
                  <h3>0.93</h3>
              </div>
            </div>
            <div className={styles.CurrentBitBoxInrr}>
              <p>Items</p>
              <div className={styles.imgAdnHH}>
                <h3>1.2 K</h3>
              </div>
            </div>
            <div className={styles.CurrentBitBoxInrr}>
              <p>Owners</p>
              <div className={styles.imgAdnHH}>
                <h3>2.3 K</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ourlyPerntAj}>
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="default_tab mb-30 default_tab_wt_scroll"
          >
            <Tab eventKey="home" title="Items">
              <SadNessItem />
            </Tab>
            <Tab eventKey="Analytics" title="Analytics">
                <SadNessAnalytics />
            </Tab>
            <Tab eventKey="Activity" title="Activity">
              <SadNessActivity />
            </Tab>
          </Tabs>
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
