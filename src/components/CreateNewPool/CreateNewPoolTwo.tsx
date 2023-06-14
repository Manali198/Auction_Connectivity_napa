import React , { useState} from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewPoolTwo.module.scss';
import Input from '../Input/Input';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import Select from 'react-select';
import Link from 'next/link';

export default function CreateNewPoolTwo() {
    const [name, setName] = useState('');
    const [nametwo, setNametwo] = useState('');
    const [namethree, setNamethree] = useState('');
    const [namefor, setNamefor] = useState('');
    const [namefive, setNamefive] = useState('');
    const [namesix, setNamesix] = useState('');

    const optionsthree = [
        { value: '19  :  00', label: '19  :  00' },
        { value: '19  :  00', label: '19  :  00' },
        { value: '19  :  00', label: '19  :  00' },
      ];
  return (
    <>
          <div className={styles.CreatePoolTwo}>
            <div className={styles.GeneralPool}>
                <h5 className={styles.DefultPoolh5}>Set Max Paricipants</h5>
                <div className={styles.InputAllPool}>
                    <div className={styles.FrstInput}>
                        <Input
                            value={name}
                            type="text"
                            placeholder=""
                            label="Max Number of Participants is 20"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <h5 className={styles.DefultPoolh5}>Set Contribution Min - Max</h5>
                    <div className={styles.MixInputPool}>
                        <div className={styles.FrstInput}>
                            <Input
                            value={nametwo}
                            type="text"
                            placeholder="0.25"
                            label="Minimum "
                            onChange={(e) => setNametwo(e.target.value)}
                            />
                        </div>
                        <div className={styles.FrstInput}>
                            <Input
                                value={namethree}
                                type="text"
                                placeholder="3.00"
                                label="Maximum"
                                onChange={(e) => setNamethree(e.target.value)}
                            />
                        </div>
                    </div>
                    <h5 className={styles.DefultPoolh5}>Possibility to Add the Bid Price</h5>
                    <div className="radiopoolbox">
                        <div className="form-check frst_radio">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Yes
                            </label>
                            </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                No
                            </label>
                        </div>
                    </div>
                    <div className='switchpool'>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Buy Now</label>
                        </div>
                    </div>
                    <div className={styles.BottmDateExprstio}>
                        <div className={`${styles.FrstInput} ${styles.secondFrstInput}`}>
                            <Input
                                value={namefor}
                                type="text"
                                placeholder="3.00"
                                label="Price "
                                onChange={(e) => setNamefor(e.target.value)}
                            />
                        </div>
                        <div className={styles.DateTimeExpirationBx}>
                            <h5 className={styles.DefultPoolh5}>Date and Time Expiration</h5>
                            <div className={styles.MixInputPool}>
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
                                <div className="selectprntpool">
                                    <Select
                                        options={optionsthree}
                                        // menuIsOpen={true}
                                        className="select_pernt slctrspnsv"
                                        placeholder="19  :  00"
                                        classNamePrefix="cntrslct"
                                    />
                                </div>
                            </div>
                            <div className={styles.DateTxtP}>
                                <p>If the pool does not reach its goal by the end of the term, the pool will be cancelled.</p>
                            </div>
                            <h5 className={styles.DefultPoolh5}>Type Pool</h5>
                            <div className="radiopoolbox">
                                <div className="form-check frst_radio">
                                    <input className="form-check-input" type="radio" name="exampleRadiosTwo" id="exampleRadios3" value="option3" checked />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Public
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadiosTwo" id="exampleRadios4" value="option4" />
                                    <label className="form-check-label" htmlFor="exampleRadios4">
                                        Private (Only Invted Paricipants Will View Your Pool)
                                    </label>
                                </div>
                            </div>
                            <div className={styles.ContinueBtn}>
                                {/* <button>Continue</button> */}
                                <Link href="/create-new-pool-participants"><a>Continue</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ExitConditionsPool}>
                <h5 className={styles.DefultPoolh5}>Exit Conditions</h5>
                <div className={styles.RightFrstRadio}>
                    <h4 className={styles.DefualtRightH4}>Fractionalize can sell sell their contribution on the secondary market.</h4>
                    <div className="radiopoolbox">
                        <div className="form-check frst_radio">
                            <input className="form-check-input1" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" checked />
                            <label className="form-check-label" htmlFor="exampleRadios5">
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input1" type="radio" name="exampleRadios" id="exampleRadios6" value="option6" />
                            <label className="form-check-label" htmlFor="exampleRadios6">
                                No
                            </label>
                        </div>
                    </div>
                </div>
                <div className={`${styles.RightFrstRadio} ${styles.RightScndRadio}`}>
                    <h4 className={styles.DefualtRightH4}>Set the consensus value for exiting the pool and selling the NFT</h4>
                    <div className="radiopoolbox">
                        <div className="form-check frst_radio">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="option7" checked />
                            <label className="form-check-label" htmlFor="exampleRadios7">
                                51%
                            </label>
                        </div>
                        <div className="form-check scnd_radio">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="option8" />
                            <label className="form-check-label" htmlFor="exampleRadios8">
                                75%
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="option9" />
                            <label className="form-check-label" htmlFor="exampleRadios9">
                                100%
                            </label>
                        </div>
                    </div>
                    <div className={styles.RightRadioP}>
                        <p>Once the pool has reached the funding target. The pool administrator will issue a sell price for the pool participants to vote, based on the exit criteria established to sell the item. The particpapnts in the pool must have either 51%, 75% or 100% consensus to list the item in the NAPA marketplace for sale.</p>
                    </div>
                    <div className={styles.LastSWitchBx}>
                        <div className='switchpool'>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Auto List Price</label> */}
                            </div>
                        </div>
                        <div className={styles.FrstInput}>
                            <Input
                                value={namefive}
                                type="text"
                                placeholder="4.20"
                                label="Price"
                                onChange={(e) => setNamefive(e.target.value)}
                            />
                        </div>
                        <div className={styles.FrstInput}>
                            <Input
                                value={namesix}
                                type="text"
                                placeholder="2.40"
                                label="Delist Price"
                                onChange={(e) => setNamesix(e.target.value)}
                            />
                        </div>
                        <p>The NFT will be auto-listed once the floor price has reached the auto-list price. </p>
                    </div>
                </div>
            </div>
          </div>

    </>
  )
}
