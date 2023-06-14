import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './TipsAndTutorialsSc.module.scss';
import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import Link from 'next/link';

export default function TipsAndTutorialsSc() {
  const options = [
    { value: 'Video Creations', label: 'Video Creations' },
    { value: 'Crypto', label: 'Crypto' },
    { value: 'Marketing on NAPA', label: 'Marketing on NAPA' },
  ];
  const optionstow = [
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
    
      <div className={`${styles.container} `}>
        <div className="bottom_overly_pernt">
          <Container className={`${styles.settingsContainer} asinnerContainer`}>
            <h1 className={styles.settings}>Tips And Tutorials</h1>
            <div className={styles.tipandtotolmain}>
              <div className="select_main">
                <Select
                  options={options}
                  // menuIsOpen={true}
                  className="select_pernt"
                  placeholder="Category"
                  classNamePrefix="cntrslct"
                />
                <div className="datepickerBox">
                  <DateRangePicker
                    initialSettings={{
                      singleDatePicker: true,
                      showDropdowns: true,
                      maxYear: parseInt(moment().format('YYYY'), 10),
                      opens: 'left',
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="End Date"
                    />
                  </DateRangePicker>
                </div>
                <Select
                  options={optionstow}
                  // menuIsOpen={true}
                  className="select_pernt"
                  placeholder="Rating"
                  classNamePrefix="cntrslct"
                />
              </div>
              <div className={styles.AnyObjects}>
                <button className={styles.FilterButton} onClick={handleClick}>
                  Filters
                </button>
              </div>
              <div
                className={
                  active
                    ? `${styles.FilterBox} ${styles.active}`
                    : `${styles.FilterBox}`
                }
              >
                <button className={styles.ExitButton} onClick={handleClick}>
                  <Image
                    src="/img/exit_icon.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                </button>
                <div className={`${styles.MobileDatpcker} MobileDatpckertips`}>
                  <div className="select_main select_mainas">
                    <Select
                      options={options}
                      // menuIsOpen={true}
                      className="select_pernt"
                      placeholder="Category"
                      classNamePrefix="cntrslct"
                    />
                    <div className="datepickerBox">
                      <DateRangePicker
                        initialSettings={{
                          singleDatePicker: true,
                          showDropdowns: true,
                          maxYear: parseInt(moment().format('YYYY'), 10),
                          opens: 'left',
                        }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="End Date"
                        />
                      </DateRangePicker>
                    </div>
                    <Select
                      options={optionstow}
                      // menuIsOpen={true}
                      className="select_pernt"
                      placeholder="Rating"
                      classNamePrefix="cntrslct"
                    />
                  </div>
                </div>
              </div>
              {/* <div className={styles.buttonpernt}>
                        <button><Image src='/img/search_icon_aj.svg' alt='' height="24px" width="24px" className='' /></button>
                    </div> */}
            </div>
            <div className={styles.ForShadow}>
              <div className={styles.CustomGridContainer}>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="tutorials-details">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img01.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>6 tutorials</p>
                            </div>
                            <div className={styles.timecont}>
                              <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                1 hrs <span>12 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>How to make an SNFT of your video</h4>
                            <p>
                              Cryptocurrency, blockchain, NFT: these are all
                              terms that are gradually becoming more and more
                              present in everyday conversations.
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="#">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img02.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>12 tips</p>
                            </div>
                            <div className={styles.timecont}>
                              <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                6 hrs <span>34 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>Buying and Trading NFTs Like a Pro</h4>
                            <p>
                              Soon anyone from anywhere in the world will be
                              able to create and sell an NFT on Swappable
                              without approval from any central authority.{' '}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="#">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img03.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>7 tutorials</p>
                            </div>
                            <div className={styles.timecont}>
                              <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                2 hrs <span>16 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>Double-Check the Smart Contract</h4>
                            <p>
                              Checking the smart contract info is a great way to
                              be sure you’re buying the correct NFT. Reach out
                              to the creator for clarity on the smart.
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="#">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img04.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>4 tips</p>
                            </div>
                            <div className={styles.timecont}>
                            <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                2 hrs <span>24 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>Check the Artist’s Social Media Accounts</h4>
                            <p>
                              Normally, an artist would add his social media
                              links on his collection page. If that is not the
                              case, feel free to check with him.
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="#">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img05.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>10 tutorials</p>
                            </div>
                            <div className={styles.timecont}>
                            <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                2 hrs <span>54 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>How to Make an NFT out of a VidLook</h4>
                            <p>
                              Some high-profile collections on Swappable such as
                              Jani Leinonen’s will have a verified collection
                              badge.
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.CustomGrid}>
                  <div className={styles.TipsTulsOverlay}>
                    <div className={styles.boxinnrcont}>
                      <Link href="#">
                        <a href="#" className={`${styles.apernt} hovereffect`}>
                          <Image
                            src="/img/tutorial_img06.png"
                            height="373px"
                            width="372px"
                            alt=""
                            className="evmtimg"
                          />
                          <div className={styles.linkupcontent}>
                            <div className={styles.tutoril}>
                              <Image
                                src="/img/tutorl_ic.svg"
                                alt=""
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>16 tips</p>
                            </div>
                            <div className={styles.timecont}>
                            <Image 
                                src="/img/time_ic.svg" 
                                alt="" 
                                className=""
                                height="16px"
                                width="16px"
                              />
                              <p>
                                7 hrs <span>46 min</span>
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.dwoncontent} OvelayContent`}
                          >
                            <h4>Beware of fake Web3 wallet prompts</h4>
                            <p>
                              Fake Metamask interfaces are a common way to scam
                              people and trick them into sharing their seed
                              phrase.
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.CustomGrid}>
                            <div  className={styles.TipsTulsOverlay}>
                                <div className={styles.boxinnrcont}>
                                    <Link href="#">
                                        <a href='#' className={`${styles.apernt} hovereffect`}>
                                            <Image src='/img/tutorial_img06.png' height="373px" width="372px" alt='' className="evmtimg" />
                                            <div className={styles.linkupcontent}>
                                                <div className={styles.tutoril}>
                                                    <Image 
                                                      src='/img/tutorl_ic.svg' 
                                                      alt='' 
                                                      className='' 
                                                       height="16px"
                                                        width="16px"
                                                    />
                                                    <p>16 tips</p>
                                                </div>
                                                <div className={styles.timecont}>
                                                     <Image 
                                                        src="/img/time_ic.svg" 
                                                        alt="" 
                                                        className=""
                                                        height="16px"
                                                        width="16px"
                                                      />
                                                    <p>7 hrs  <span>46 min</span></p>
                                                </div>
                                            </div>
                                            <div className={`${styles.dwoncontent} OvelayContent`}>
                                                <h4>Beware of fake Web3 wallet prompts</h4>
                                                <p>Fake Metamask interfaces are a common way to scam people and trick them into sharing their seed phrase.</p>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
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
