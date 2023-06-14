import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import styles from './ProjectsItem.module.scss';
import Link from 'next/link';

export default function ProjectsItem() {
  const optionstow = [
    { value: '1', label: 'Price 20 MRP' },
    { value: '2', label: 'Price 250 MRP' },
    { value: '3', label: 'Price 50 MRP' },
  ];
  const optionsthree = [
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
      {/* napa_ic */}

      <div className={styles.tipandtotolmain}>
        <div className="select_main">
          <Select
            options={optionsthree}
            // menuIsOpen={true}
            className="select_pernt slctrspnsv"
            placeholder="Price (from low)"
            classNamePrefix="cntrslct"
          />
          <Select
            options={optionstow}
            // menuIsOpen={true}
            className="select_pernt slctrspnsv"
            placeholder="Rating"
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
            <Image src="/img/exit_icon.svg" alt="" width="24px" height="24px" />
          </button>
          <div className={`${styles.MobileDatpcker} MobileDatpckertips`}>
            <div className="select_main">
              <Select
                options={optionsthree}
                // menuIsOpen={true}
                className="select_pernt slctrspnsv"
                placeholder="Price (from low)"
                classNamePrefix="cntrslct"
              />
              <Select
                options={optionstow}
                // menuIsOpen={true}
                className="select_pernt slctrspnsv"
                placeholder="Rating"
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
            </div>
          </div>
        </div>
        <div className={styles.buttonperntAj}>
          <button>
            <Image
              src="/img/search_icon_aj.svg"
              alt=""
              height="24px"
              width="24px"
              className=""
            />
          </button>
          <button className={styles.marginPrnt}>
            <Image
              src="/img/grid_ic_light.svg"
              alt=""
              height="24px"
              width="24px"
              className=""
            />
          </button>
          <button>
            <Image
              src="/img/grid_ic_dark.svg"
              alt=""
              height="24px"
              width="24px"
              className=""
            />
          </button>
        </div>
      </div>

      <div className={styles.scrollPernt}>
        <div className={styles.CustomGridContainer}>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="#">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img01.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>Mysterious Space Squares</h3>
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
                            <p>0.21 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>6h 49 min</h3>
                        </div>
                      </div>
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
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img02.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>That Which Falls Upwards</h3>
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
                            <p>0.45 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>1h 26 min</h3>
                        </div>
                      </div>
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
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img03.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>Infinite Space of variations</h3>
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
                            <p>0.48 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>5h 44 min</h3>
                        </div>
                      </div>
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
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img04.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>Endless Rays of a Carefree Past</h3>
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
                            <p>0.29 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>2h 22 min</h3>
                        </div>
                      </div>
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
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img05.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
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
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="#">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img06.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
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
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="#">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img07.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>Expulsion from Paradise</h3>
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
                            <p>0.56 NAPA</p>
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
          <div className={styles.CustomGrid}>
            <div className={styles.TipsTulsOverlay}>
              <div className={styles.boxinnrcont}>
                <Link href="#">
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img08.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>NFT Name Hallucination</h3>
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
                            <p>0.98 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>2h 28 min</h3>
                        </div>
                      </div>
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
                  <a href="" className={`${styles.apernt} hovereffect`}>
                    <Image
                      src="/img/feeg_grid_img08.png"
                      height="372px"
                      width="282px"
                      alt=""
                      className="evmtimg"
                    />
                    <div className={styles.downCont}>
                      <h3>NFT Name</h3>
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
                            <p>0.98 NAPA</p>
                          </div>
                        </div>
                        <div className={styles.endingIn}>
                          <p>Ending In</p>
                          <h3>2h 28 min</h3>
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
  );
}
