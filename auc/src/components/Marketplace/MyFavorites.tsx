import React from 'react';
import Image from 'next/image';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './MyFavorites.module.scss';
import Link from 'next/link';
import { SearchIcon } from '../assets';

export default function MyFavorites() {
  return (
    <>
            <div className={styles.scrollPernt}>
            <div className={styles.iconContainer}>
                         <Image src={SearchIcon} width={24} height={24} />
                    </div>
                <div className={styles.CustomGridContainer}>
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                <Link href="#">
                                    <a href="#" className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/feeg_grid_img02.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img02.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@TomBradley</p>
                                        </div>
                                        <div className={styles.starIcWhite}>
                                            <Image
                                                src="/img/star_ic_white.svg"
                                                height="20px"
                                                width="20px"
                                                alt=""
                                                className=""
                                            />
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>Illusions of Darkness</h3>
                                            <div className={styles.flexPernt}>
                                                <div className={styles.currentBit}>
                                                    <h5>Current Bid</h5>
                                                    <div className={styles.txtimgFlex}>
                                                        <Image
                                                            src="/img/napa_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.24 NAPA</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>4h 32 min</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </>
  )
}