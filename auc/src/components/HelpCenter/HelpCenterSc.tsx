import React from 'react'
import styles from './HelpCenterSc.module.scss';
import Footer from '../Footer/Footer';
import Container from '../../Layout/Container/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function HelpCenterSc() {
  return (
    <>
    <div
      className={styles.WidthFull}
    >
      <Container
        className={`${styles.napaLoungeContainer} asinnerContainer`}
      >
        <div className={styles.MainContact}>
          <div className={styles.MainTextHelp}>
           <h1>Hi, How Can We Help?</h1>
            {/* <div className={styles.InputInHelp}>
              <Image src="/img/search_ic.png" alt="" width={18} height={18} />
              <input type="text" placeholder='Search..' />
            </div> */}
            <div className={styles.ThreeLinks}>
                <Link href="/support">
                  <a className={styles.InrAThre}>
                    <div className={styles.MainImgTxtHlp}>
                      <Image src="/img/support_lft.png" alt="" width={32} height={32} />
                      <h6>Support</h6>
                    </div>
                    <div className={styles.ArrowImg}>
                      <Image src="/img/right_arrow_help.png" alt="" width={36} height={24}  />
                    </div>
                  </a>
                </Link>
                <Link href="/faq">
                  <a className={styles.InrAThre}>
                    <div className={styles.MainImgTxtHlp}>
                      <Image src="/img/help_icon_qtsn.png" alt="" width={32} height={32} />
                      <h6>FAQ</h6>
                    </div>
                    <div className={styles.ArrowImg}>
                      <Image src="/img/right_arrow_help.png" alt="" width={36} height={24}  />
                    </div>
                  </a>
                </Link>
                <Link href="/contact-us">
                  <a className={styles.InrAThre}>
                    <div className={styles.MainImgTxtHlp}>
                      <Image src="/img/mail_icon.png" alt="" width={32} height={32} />
                      <h6>Contact Us</h6>
                    </div>
                    <div className={styles.ArrowImg}>
                      <Image src="/img/right_arrow_help.png" alt="" width={36} height={24}  />
                    </div>
                  </a>
                </Link>
                <Link href="/tutorials">
                  <a className={styles.InrAThre}>
                    <div className={styles.MainImgTxtHlp}>
                      <Image src="/img/send_icon_tip_turil_aj.png" alt="" width={32} height={32} />
                      <h6>Tips and Tutorials</h6>
                    </div>
                    <div className={styles.ArrowImg}>
                      <Image src="/img/right_arrow_help.png" alt="" width={36} height={24}  />
                    </div>
                  </a>
                </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footerContainer}>
        <Footer footerIconShow={false} />
      </div>
    </div>
    </>
  )
}
