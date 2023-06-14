import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './ProjectsActivity.module.scss';

export default function ProjectsActivity() {
      const optionsthree = [
        { value: '1', label: '20%' },
        { value: '2', label: '50%' },
        { value: '3', label: '100%' },
      ];
  return (
    <>
    {/* napa_ic */}
       
        <div className={styles.tipandtotolmain}>
            <div className="select_main">
                <Select
                    options={optionsthree}
                    // menuIsOpen={true}
                    className="select_pernt slctrspnsv"
                    placeholder="Event Type"
                    classNamePrefix="cntrslct"
                />
            </div>
            <div className={styles.buttonperntAj}>
                <button><Image src='/img/search_icon_aj.svg' alt='' height="24px" width="24px" className='' /></button>
            </div>
        </div>
        <div className={styles.InnrActivityBxMain}>
            <div className={styles.ActivityTable}>
                <div className={styles.MainListBox}>
                    <div className={styles.MainListHead}>
                        <div className={`${styles.HeadLabel} ${styles.LabelOne}`}>
                        Item
                        </div>
                        <div className={`${styles.HeadLabel} ${styles.LabelTwo}`}>
                        Price
                         {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>
                        <div className={`${styles.HeadLabel} ${styles.LabelThree} ${styles.HeadLabelcntr}`}>
                        Quantity
                             {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>
                        <div className={`${styles.HeadLabel} ${styles.LabelFour} ${styles.HeadLabelstart}`}>
                        From
                             {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>
                        <div className={`${styles.HeadLabel} ${styles.LabelFive} ${styles.HeadLabelstart}`}>
                        To
                             {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>
                        <div className={`${styles.HeadLabel} ${styles.LabelSix} ${styles.HeadLabelstart}`}>
                        Time
                             {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>   
                        <div className={`${styles.HeadLabel} ${styles.LabelSeven} ${styles.HeadLabelstart}`}>
                           {/* <Image src="/img/tbl_sort.png" alt="" width={16} height={16} /> */}
                        </div>
                    </div>
                   <div>
                        <div>
                            <div className={styles.MainListShdo}>
                                <div className={styles.MainListList}>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Endless Rays of a Carefree Past</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.33</h6>
                                            <p className={styles.peraAj}>$827.3</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={`${styles.RspnsvIcnSpn} `} >
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>VecnaCurse</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>Wiska0x</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>6 hours ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Infinite Space of variations</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.50</h6>
                                            <p className={styles.peraAj}>$765.37</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn} >
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>Mayfield74</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>MadFly</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>1 hour ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> That Which Falls Upwards</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.44</h6>
                                            <p className={styles.peraAj}>$637.53</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn} >
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>TonekDma</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>MifxFAZ</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>2 days ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Mysterious Space Squares</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.34</h6>
                                            <p className={styles.peraAj}>$928.34</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>SaintWsk</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>Nais08</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>1 week ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Bless the Fallout Sadness</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.28</h6>
                                            <p className={styles.peraAj}>$148.64</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>Wolek1</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>ScoreUc</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>3 hours ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Cyberpunk Reality in your Eyes</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.56</h6>
                                            <p className={styles.peraAj}>$324.41</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>24Saintx0</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>UnderCx</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>4 days ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>
                                    <div className={styles.MainListListInn}>
                                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                                            <div className={styles.RspnsvListtext}>
                                                <div className={styles.TxtH3}>
                                                    <h3> <span className={styles.Rsponsv1}>1.</span> Stairs to the Future of Beauty</h3>
                                                </div>
                                                <div className={styles.RspnsvEarn}>
                                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                                    12.35
                                                    <span className={styles.DefSpan}>Earned</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabel} ${styles.RowFour} ${styles.RowLabelNew} RowLabelprnt_aj`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6><Image src="/img/npa_ic_an.png" alt="" width={17} height={13} />0.49</h6>
                                            <p className={styles.peraAj}>$214.25</p>
                                        </div>
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFive} ${styles.RowLabel} ${styles.DisplBlok}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6>1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowThree} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>Kel0w77</h6>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFive} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <div className={styles.RspnsvIcnSpn}>
                                                {/* <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" /> */}
                                                <h6 className={styles.BlueTxts}>Des0ut</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.RowLabelStart} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <h6 className={styles.BlueTxts}>5 hours ago<Image src="/img/up_right_arrow.png" alt="" width="8px" height="8px" /></h6>
                                        </div>
                                    
                                        <div className={`${styles.RowLabelCneter} ${styles.RowFour} ${styles.RowLabel}`}>
                                            <div className={styles.Rspnsvh4}>
                                                <h4>Date Minted</h4>
                                            </div>
                                            <p className={styles.peraAj}><Image src="/img/trolly.png" alt="" width="16px" height="11px" />Sale</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}
