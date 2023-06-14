import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './LaunchPadTabThree.module.scss';
import Image from 'next/image';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Select from 'react-select';
import Link from 'next/link';


export default function LaunchPadTabThree() {
  const optionsone = [
    { value: '1', label: '20%' },
    { value: '2', label: '50%' },
    { value: '3', label: '100%' },
  ];
  const optionsthree = [
    { value: '1', label: '20%' },
    { value: '2', label: '50%' },
    { value: '3', label: '100%' },
  ];
  const optionsfour = [
    { value: '1', label: '20%' },
    { value: '2', label: '50%' },
    { value: '3', label: '100%' },
  ];
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
        <div className={styles.LaunchPadTabThreeMain}>
          <div className={styles.tipandtotolmain}>
            <div className="select_main">
                <Select
                    options={optionsone}
                    // menuIsOpen={true}
                    className="select_pernt slctrspnsv"
                    placeholder="Project"
                    classNamePrefix="cntrslct"
                />
                <Select
                    options={optionsthree}
                    // menuIsOpen={true}
                    className="select_pernt slctrspnsv"
                    placeholder="Price (from low)"
                    classNamePrefix="cntrslct"
                />
                <Select
                    options={optionsfour}
                    // menuIsOpen={true}
                    className="select_pernt slctrspnsv"
                    placeholder="Rating"
                    classNamePrefix="cntrslct"
                />
            </div>

            <div className={styles.AnyObjects}>
                <button className={styles.FilterButton} onClick={handleClick}>
                Filters
                </button>
            </div>
            <div className={styles.buttonperntAj}>
                <button><Image src='/img/search_icon_aj.svg' alt='' height="24px" width="24px" className='' /></button>
                <button className={styles.marginPrnt}><Image src='/img/grid_ic_light.svg' alt='' height="24px" width="24px" className='' /></button>
                <button><Image src='/img/grid_ic_dark.svg' alt='' height="24px" width="24px" className='' /></button>
            </div>
        </div>
        <div className={styles.OverLayIn}>
          <div className={styles.scrollPernt}>
              <div className={styles.CustomGridContainer}>
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                              <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad01.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>00 : 02 : 06</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Bless the Fallout Sadness</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Abilities or he perfectly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* SECND */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                          <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                              <div className={`${styles.apernt} hovereffect`}>
                                  <Image
                                      src="/img/launchpad02.png"
                                      height="372px"
                                      width="282px"
                                      alt=""
                                      className="evmtimg"
                                  />
                                  <div className={styles.upCont}>
                                      <p>02 : 32 : 44</p>
                                  </div>
                                  <div className={styles.downCont}>
                                      <h3>Escape from the Wave of Negative</h3>
                                      <div className={styles.flexPernt}>
                                          <div className={styles.currentBit}>
                                              <div className={styles.txtimgFlex}>
                                                  <p>Oh to another chamber pleased.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </a>
                  </Link>

                  {/* 4 box */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad03.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>01 : 12 : 24</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Cyberpunk Reality in your Eyes</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Went me rank at last loud shot.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* 5 box */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad04.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>05 : 05 : 46</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Stairs to the Future of Beauty</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Valley afford uneasy joy she thrown .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* 6 box */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad05.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>04 : 56 : 12</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Molecules of your Strange Feelings</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Went me rank at last loud shot.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* 7 box */}
                 <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad06.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>00 : 10 : 52</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>All that Remains of Them</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Valley afford uneasy joy she thrown .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                 </Link>
                  {/* last box */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad07.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>02 : 52 : 12</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Northlane  as your Personal Radar</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Oh to another chamber pleased.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* commnt */}
                  <Link href="/launchpad-details">
                    <a>
                      <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                          <div className={styles.boxinnrcont}>
                            <div className={`${styles.apernt} hovereffect`}>
                                <Image
                                    src="/img/launchpad08.png"
                                    height="372px"
                                    width="282px"
                                    alt=""
                                    className="evmtimg"
                                />
                                <div className={styles.upCont}>
                                    <p>00 : 45 : 09</p>
                                </div>
                                <div className={styles.downCont}>
                                    <h3>Fly in Parallel Worlds with a Thrill</h3>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <div className={styles.txtimgFlex}>
                                                <p>Abilities or he perfectly.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                  {/* commnt */}
              </div>
            </div>
          </div>      
        </div>
    </>
  )
}
