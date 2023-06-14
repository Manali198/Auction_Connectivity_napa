import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './SellNFTPage.module.scss';
import Input from '../Input/Input';
import Select from 'react-select';
import moment from 'moment';
import Image from 'next/image';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Link from 'next/link';



export default function SellNFTPage() {
    const optionsone = [
        { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="20px" height="20px" />Napa NAPA</div> },
        { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="20px" height="20px" />Napa NAPA</div> },
        { value: 'Napa NAPA', label: <div className='cstm_napa_slct'><Image src="/img/napa_ic.svg" alt="" width="20px" height="20px" />Napa NAPA</div> },
      ];
      const [name, setName] = useState('');
     
  return (
    <>
        <div className={styles.SellNFTPage}>
            <div className={styles.CustomGridContainer}>
                <div className={styles.CustomGrid}>
                    <div className={styles.TypeSidCont}>
                        <div className={styles.typePrnt}>
                            <h1 className={styles.DefHed}>Type</h1>
                            <div className={styles.dublBtn}>
                                <button className={styles.Active}><Image src="/img/dollar_icon.svg" alt="" width={20} height={20} /> Fixed Price</button>
                                <button><Image src="/img/time_icon.svg" alt="" width={20} height={20} />Time Based Auction</button>
                            </div>
                        </div>
                        <div className={styles.typePrnt}>
                            <h1 className={styles.DefHed}>Price & Collection</h1>
                            <div className={styles.MixInputPool}>
                                <div className="selectprntnft">
                                    <p>Collection</p>
                                    <Select
                                        options={optionsone}
                                        // menuIsOpen={true}
                                        className="select_pernt"
                                        placeholder=""
                                        classNamePrefix="cntrslct"
                                    />
                                </div>
                                <div className={styles.FrstInput}>
                                    <Input
                                        value={name}
                                        type="text"
                                        placeholder=""
                                        label="Amount"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.typePrnt}>
                            <h1 className={styles.DefHed}>Duration</h1>
                            <div className="datepickerBox datepickerBoxpool">
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
                                <div className="datepiker_img_bx">
                                    <img src='/img/calendar_icon.png' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.typePrnt} typePrntaj`}>
                            <h1 className={styles.DefHed}>Other Options</h1>
                            <div className={`${styles.switchpool} switchpool`}>
                                <div className="form-check form-switch">
                                    {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Sell as a Bundle</label> */}
                                </div>
                            </div>
                            <div className={`${styles.switchpool} switchpool`}>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <div className={styles.flexBox}>
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Reserve for specific buyer</label>
                                        <p>This item can be purchased as soon as it{"'"}s listed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.typePrnt} `}>
                            <h1 className={styles.DefHed}>Fees</h1>
                            <div className={styles.flexFees}>
                                <p>Service</p>
                                <h6>2.5%</h6>
                            </div>
                            <div className={styles.flexFees}>
                                <p>Creator</p>
                                <h6>0%</h6>
                            </div>
                        </div>
                        <div className={`${styles.typePrnt} `}>
                            <Link href="/"><a className={styles.linkPrnt}>Complete Listing</a></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.CustomGrid}>
                    <div className={`${styles.typePrnt} `}>
                        <h1 className={styles.DefHed}>Preview</h1>
                        <div className={styles.imgPernt}>
                            <Image src="/img/preview_img.png" alt="" width={540} height={540} />
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </>
  )
}
