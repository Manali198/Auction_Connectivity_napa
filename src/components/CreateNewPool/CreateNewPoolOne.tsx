import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import styles from './CreateNewPoolOne.module.scss';
import Link from 'next/link';

export default function CreateNewPoolOne() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
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
      const optionsfour = [
        { value: 'chocolate', label: '4h 32 min' },
        { value: 'strawberry', label: '4h 32 min' },
        { value: 'vanilla', label: '4h 32 min' },
      ];
      const [active, setActive] = React.useState(false);
      const handleClick = () => {
        setActive(!active);
      };
  return (
    <>
       
            <div className={styles.tipandtotolmain}>
                <div className="select_main">
                    <Select
                        options={options}
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
                        options={optionsfour}
                        // menuIsOpen={true}
                        className="select_pernt"
                        placeholder="Time"
                        classNamePrefix="cntrslct"
                    />
                    <Select
                        options={optionstow}
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
                        <div className="select_main">
                            <Select
                            options={options}
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
                                options={optionsfour}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv"
                                placeholder="Time"
                                classNamePrefix="cntrslct"
                            />
                            <Select
                                options={optionstow}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv"
                                placeholder="Rating"
                                classNamePrefix="cntrslct"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonperntAj}>
                    <button><Image src='/img/search_icon_aj.svg' alt='' height="24px" width="24px" className='' /></button>
                    <button className={styles.marginPrnt}><Image src='/img/grid_ic_light.svg' alt='' height="24px" width="24px" className='' /></button>
                    <button><Image src='/img/grid_ic_dark.svg' alt='' height="24px" width="24px" className='' /></button>
                </div>
            </div>
            <div className={styles.scrollPernt}>
                <div className={styles.CustomGridContainer}>
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool01.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img08.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@MadelineKeller</p>
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>Mysterious Space  Squares</h3>
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
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool02.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img07.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@MartaThornton</p>
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>That Which Falls Upwards</h3>
                                            <div className={styles.flexPernt}>
                                                <div className={styles.currentBit}>
                                                    <h5>Current Bid</h5>
                                                    <div className={styles.txtimgFlex}>
                                                        <Image
                                                            src="/img/etherium_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.45 ETH</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>1h 26 min</h3>
                                                </div>
                                            </div>
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details" target="_blank"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool03.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img06.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@CatherinePatton</p>
                                        </div>
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
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* 4 box */}
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool04.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img05.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@DwightHolland</p>
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>Endless Rays of a Carefree Past</h3>
                                            <div className={styles.flexPernt}>
                                                <div className={styles.currentBit}>
                                                    <h5>Current Bid</h5>
                                                    <div className={styles.txtimgFlex}>
                                                        <Image
                                                            src="/img/etherium_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.29 ETH</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>2h 22 min</h3>
                                                </div>
                                            </div>
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* 5 box */}
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool05.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img03.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@RufusFlores</p>
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>Endless Rays of a Carefree Past</h3>
                                            <div className={styles.flexPernt}>
                                                <div className={styles.currentBit}>
                                                    <h5>Current Bid</h5>
                                                    <div className={styles.txtimgFlex}>
                                                        <Image
                                                            src="/img/etherium_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.29 ETH</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>2h 22 min</h3>
                                                </div>
                                            </div>
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* 6 box */}
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool06.png"
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
                                                            src="/img/etherium_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.36 ETH</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>1h 45 min</h3>
                                                </div>
                                            </div>
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* 7 box */}
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool07.png"
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
                                            <h3>Expulsion from Paradise</h3>
                                            <div className={styles.flexPernt}>
                                                <div className={styles.currentBit}>
                                                    <h5>Current Bid</h5>
                                                    <div className={styles.txtimgFlex}>
                                                        <Image
                                                            src="/img/etherium_ic.svg"
                                                            height="24px"
                                                            width="24px"
                                                            alt=""
                                                            className=""
                                                        />
                                                        <p>0.56 ETH</p>
                                                    </div>
                                                </div>
                                                <div className={styles.endingIn}>
                                                    <p>Ending In</p>
                                                    <h3>4h 32 min</h3>
                                                </div>
                                            </div>
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* last box */}
                    <div className={styles.CustomGrid}>
                        <div className={styles.TipsTulsOverlay}>
                            <div className={styles.boxinnrcont}>
                                {/* <Link href="#"> */}
                                    <div className={`${styles.apernt} hovereffect`}>
                                        <Image
                                            src="/img/createnew_pool08.png"
                                            height="372px"
                                            width="282px"
                                            alt=""
                                            className="evmtimg"
                                        />
                                        <div className={styles.upCont}>
                                            <Image
                                                src="/img/feed_small_img01.png"
                                                height="40px"
                                                width="40px"
                                                alt=""
                                                className=""
                                            />
                                            <p>@DorothyMccoy</p>
                                        </div>
                                        <div className={styles.downCont}>
                                            <h3>Raphael{"'"}s Hallucination</h3>
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
                                            <div className={styles.chosBtnPernt}>
                                               <Link href="/create-new-pool-details"><a>Choose</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    </>
  )
}
