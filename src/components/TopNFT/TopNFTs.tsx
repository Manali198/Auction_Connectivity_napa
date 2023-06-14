import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './TopNFTs.module.scss';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Select from 'react-select';
import Image from 'next/image';

export default function TopNFTs() {
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

  return (
    <>
      <div className={styles.LaunchPadMain}>
        <div className={styles.LeftLaunchPad}>
          <h1 className={styles.LaunchPadDeflt}>Rankings</h1>
        </div>
        <div className={styles.tipandtotolmain}>
          <div className="select_main select_mainonn">
            <Select
              options={optionsone}
              // menuIsOpen={true}
              className="select_pernt slctrspnsv"
              placeholder="Project"
              classNamePrefix="cntrslct"
            />
            <Select
              options={optionsone}
              // menuIsOpen={true}
              className="select_pernt slctrspnsv"
              placeholder="Type"
              classNamePrefix="cntrslct"
              // Type is NFT or SFT //
            />
            <Select
              options={optionsthree}
              // menuIsOpen={true}
              className="select_pernt slctrspnsv"
              placeholder="Last 24 hours"
              classNamePrefix="cntrslct"
            />
            <Select
              options={optionsfour}
              // menuIsOpen={true}
              className="select_pernt slctrspnsv"
              placeholder="All Chains"
              classNamePrefix="cntrslct"
            />
          </div>
        </div>
        <div className={styles.MainListBox}>
          <div className={styles.MainListHead}>
            <div className={`${styles.HeadLabel} ${styles.Labeleeight}`}></div>
            <div className={`${styles.HeadLabel} ${styles.LabelOne}`}>
              Project
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelTwo}`}>
              Volume
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelThree}`}>
              24h %
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelFour}`}>
              7d %
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelFive}`}>
              Floor Price
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelSix}`}>
              Owners
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelSeven}`}>
              Items
              {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
            </div>
          </div>
          <div className={styles.MainListShdo}>
            <div className={styles.MainListList}>
              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  1
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts01.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>1.</span>Crypto Punks
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      989.29
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>989.29</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+537.25%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+96.77%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>0.35</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>3.6 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>10.0 K</h6>
                </div>
              </div>
              {/* Second Box */}
              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  2
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts02.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>2.</span>Babbys
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      480.03
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>480.03</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+136.98%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+89.72%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>0.24</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>2.5 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>9.0 K</h6>
                </div>
              </div>
              {/* ThirdBox */}
              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  3
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts03.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>3.</span>The Potatoes
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      392.49
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>392.49</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+163.89%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+781.93%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>0.67</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>1.8 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>2.8 K</h6>
                </div>
              </div>
              {/* ForthBox */}
              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  4
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts04.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>4.</span>Rakkudos
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      289.92
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>289.92</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+874.28%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+507.32%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>0.22</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>2.3 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>1.2 K</h6>
                </div>
              </div>
              {/* fiveBox */}
              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  5
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts05.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>4.</span>Moonbirds
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      160.31
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>160.31</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+61.05%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+15.47%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>16.99</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>6.6 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>2.1 K</h6>
                </div>
              </div>

              {/* lastone */}

              <div className={styles.MainListListInn}>
                <div className={`${styles.RowFrstStart} ${styles.RowSeven}`}>
                  5
                </div>
                <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                  <Image src="/img/nfts05.png" alt="" width={72} height={72} />
                  <div className={styles.RspnsvListtext}>
                    <div className={styles.TxtH3}>
                      <h3>
                        <span>4.</span>Moonbirds
                      </h3>
                    </div>
                    <div className={styles.RspnsvEarn}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      160.31
                      <span className={styles.DefSpan}>Earned</span>
                    </div>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>Volume</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h6>160.31</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>24h %</h4>
                  </div>
                  <h6 className={styles.colorPernt}>+61.05%</h6>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                  <div className={styles.Rspnsvh4}>
                    <h4>7d %</h4>
                  </div>
                  <div className={styles.RspnsvIcnSpn}>
                    <h6 className={styles.colorPernt}>+15.47%</h6>
                  </div>
                </div>
                <div className={`${styles.RowLabel} ${styles.RowFour} `}>
                  <div className={`${styles.Rspnsvh4} ${styles.Rspnsvh4v2} `}>
                    <Image
                      src="/img/etherm_ic_intabl.svg"
                      alt=""
                      width="9.38px"
                      height="15px"
                    />
                    <h4>Floor Price</h4>
                  </div>
                  <Image
                    src="/img/etherm_ic_intabl.svg"
                    alt=""
                    width="9.38px"
                    height="15px"
                  />
                  <h6>16.99</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Owners</h4>
                  </div>
                  <h6>6.6 K</h6>
                </div>
                <div
                  className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj RowLabelprnt_ajv2`}
                >
                  <div className={styles.Rspnsvh4}>
                    <h4>Items</h4>
                  </div>
                  <h6>2.1 K</h6>
                </div>
              </div>
              {/* fiveBox */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
