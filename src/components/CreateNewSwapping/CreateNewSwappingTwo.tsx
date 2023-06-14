import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewSwappingTwo.module.scss';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import Select from 'react-select';
import Link from 'next/link';

export default function CreateNewSwappingTwo() {

    const optionsthree = [
        { value: '16  :  00', label: '16  :  00' },
        { value: '17  :  00', label: '17  :  00' },
        { value: '18  :  00', label: '18  :  00' },
      ];
      const optionsfor = [
        { value: '50', label: '50' },
        { value: '60', label: '60' },
        { value: '70', label: '70' },
      ];
  return (
    <>
          <div className={styles.CreatePoolTwo}>
            <div className={styles.GeneralPool}>
                <div className={styles.DateTimeExpirationBx}>
                    <h5 className={styles.DefultPoolh5}>Swap Expiration Time and Date</h5>
                    <div className={styles.MixInputPool}>
                        <div className="datepickerBox datepickerBoxpool datepickerBoxswappng">
                        <p className={`${styles.SwappingPTag} ${styles.SwappingDatePtag}`} >Date</p>
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
                        <div className="selectprntpool selectprntswapping">
                            <p className={styles.SwappingPTag}>Time</p>
                            <Select
                                options={optionsthree}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv"
                                placeholder="16  :  00"
                                classNamePrefix="cntrslct"
                            />
                        </div>
                    </div>
                    <div className={styles.QuantityNftBx}>
                    <h5 className={styles.DefultPoolh5}>Quantity NFTs for Exchange</h5>
                        <div className={styles.MixInputPool}>
                            <div className="selectprntpool selectprntswapping">
                                <p className={styles.SwappingPTag}>Quantity</p>
                                <Select
                                    options={optionsfor}
                                    // menuIsOpen={true}
                                    className="select_pernt slctrspnsv"
                                    placeholder="50"
                                    classNamePrefix="cntrslct"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="checkboxswapping">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I accept NAPA social media minted NFTs for my swap!
                            </label>
                        </div>
                    </div>
                    <div className={styles.ContinueBtn}>
                        <Link href="/create-new-swapping-offers"><a>Continue</a></Link>
                    </div>
                </div>
            </div>
          </div>

    </>
  )
}
