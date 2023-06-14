import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewSwappingFour.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function CreateNewSwappingFour() {
    
  return (
    <>
            <div className={styles.OvtliyPernt}>
                
                    <div className={styles.CustomGridContainer}>
                       <div className={styles.SwappingLftBox}>
                            <div className={styles.TipsTulsOverlay}>
                                <div className={styles.boxinnrcont}>
                                    {/* <Link href="#"> */}
                                        <div className={`${styles.apernt} hovereffect`}>
                                            <Image
                                                src="/img/Offers_by_Users_04.png"
                                                height="372px"
                                                width="282px"
                                                alt=""
                                                className="evmtimg"
                                            />
                                            <div className={styles.upCont}>
                                                <Image
                                                    src="/img/feed_small_img04.png"
                                                    height="40px"
                                                    width="40px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>@HowardCopeland</p>
                                            </div>
                                            <div className={styles.downCont}>
                                                <h3>Futuristic Fierce Radiant Cube</h3>
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
                                                            <p>0.36 NAPA</p>
                                                        </div>
                                                    </div>
                                                    <div className={styles.endingIn}>
                                                        <p>Ending In</p>
                                                        <h3>1h 45 min</h3>
                                                    </div>
                                                </div>                                                
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                    </div>      
                                </div>
                                <div className={styles.TipsTulsOverlay}>
                                <div className={styles.boxinnrcont}>
                                    {/* <Link href="#"> */}
                                        <div className={`${styles.apernt} hovereffect`}>
                                            <Image
                                                src="/img/Offers_by_Users_02.png"
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
                                        </div>
                                    {/* </Link> */}
                                    <div className={styles.midBtn}>
                                        <button>
                                            <Image
                                                src="/img/swap_icon_btn_ic.png"
                                                height="24px"
                                                width="24px"
                                                alt=""
                                                className=""
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                       <div className={styles.FeeRightBox}>
                            <h3>Fee</h3>
                            <div className={styles.FeeborBtmBox}>
                                <div className={styles.SpbtBox}>
                                    <h4>Transfer</h4>
                                    <div className={styles.ImgTextBox}>
                                            <Image
                                                    src="/img/napa_ic.svg"
                                                    height="24px"
                                                    width="24px"
                                                    alt=""
                                                    className=""
                                                />
                                            <h5>0.16</h5>
                                    </div>
                                </div>
                                <div className={styles.SpbtBox}>
                                    <h4>Exchange</h4>
                                    <div className={styles.ImgTextBox}>
                                        <Image
                                                src="/img/napa_ic.svg"
                                                height="24px"
                                                width="24px"
                                                alt=""
                                                className=""
                                            />
                                        <h5>0.10</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.SpbtPartBox}>
                                <div className={styles.SpbtBox}>
                                    <h4>Total</h4>
                                    <div className={styles.ImgTextBox}>
                                        <Image
                                                src="/img/napa_ic.svg"
                                                height="32px"
                                                width="32px"
                                                alt=""
                                                className=""
                                            />
                                        <h5>0.26</h5>
                                    </div>
                                </div>
                                <Link href='/create-new-swapping-success'>Pay & Confirm Swap</Link>
                            </div>
                       </div>
                    </div>
            </div>
    </>
  )
}
