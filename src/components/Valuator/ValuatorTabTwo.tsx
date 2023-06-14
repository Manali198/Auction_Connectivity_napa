import React from 'react';
import Image from 'next/image';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import moment from 'moment';
import styles from './ValuatorTabTwo.module.scss';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';

export default function FeedTab() {
 
  return (
    <>
        {/* <div className={styles.valtrTabTwoHed}>
            <h1>4 NFT’s are Selected</h1>
        </div> */}
        <div className={styles.valtrGrdContmain}>
            <div className={styles.CustomGridContainer}>
                <div className={styles.CustomGrid}>
                    <div className={styles.bgPernt}>
                        <div className={styles.flexImgpernt}>
                            <div className={styles.Imgpernt}>
                                <Image
                                    src="/img/valuator_img_01.png"
                                    height="164px"
                                    width="164px"
                                    alt=""
                                    className=""
                                />
                            </div>
                            {/* <div className={styles.leftContMian}>
                                <div className={styles.ImgperntLeftCont}>
                                   <div className={styles.SpaceBtwnBx}>
                                        <h2>Dark Hopeless</h2>
                                        <button role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                            <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end drpdwn_list drpdwn_list_empty">
                                            <li>
                                               <a>Reomve</a>
                                            </li>
                                            <li>
                                                <a>Re-Run Valuation</a>
                                            </li>
                                        </ul>
                                   </div>
                                    <div className={styles.smallImg}>
                                        <Image
                                            src="/img/feed_small_img02.png"
                                            height="28px"
                                            width="28px"
                                            alt=""
                                            className=""
                                        />
                                        <p>Tom Bradley</p>
                                    </div>
                                </div>
                                <div className={styles.diplyBlock}>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <h5>Current Bid</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/napa_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.24 NAPA</p>
                                            </div>
                                        </div>
                                        <div className={styles.currentBit}>
                                            <h5>Predicted Price</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/napa_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.82 NAPA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.lastpp}>
                                        <p>Valuation is based on market conditions and historical public data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.diplyNone}>
                            <div className={styles.flexPernt}>
                                <div className={styles.currentBit}>
                                    <h5>Current Bid</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.24 NAPA</p>
                                    </div>
                                </div>
                                <div className={styles.currentBit}>
                                    <h5>Predicted Price</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.82 NAPA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lastpp}>
                                <p>However venture pursuit he am mr cordial. Forming musical am hearing studied.</p>
                            </div>
                        </div>
                        <div className={styles.datepkrflx}>
                            <div className="spacebtwnbx">
                                <div className="alingment">
                                    <div className="datepickerBox datepickerBoxaj_margin">
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
                                <div className='dflt_btn_info'>
                                    <button>
                                        <Image
                                            src="/img/info_icon.png"
                                            height="16px"
                                            width="16px"
                                            alt=""
                                            className=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.graficBox}>
                            <Image
                                src="/img/graph_img.png"
                                height="123px"
                                width="516px"
                                alt=""
                                className=""
                            />
                            <p>Now indulgence dissimilar for his thoroughly has terminated. Agreement offending commanded my an.</p>
                        </div>
                        <div className={styles.downContentmain}>
                            <div className={styles.innrFirst}>
                                <div className={styles.innrTextimg}>
                                    <Image
                                        src="/img/howard_copeland.svg"
                                        height="40px"
                                        width="40px"
                                        alt=""
                                        className=""
                                    />
                                    <div className={styles.onlyText}>
                                        <h6>Howard Copeland</h6>
                                        <div className={styles.starImg}>
                                            <Image
                                                src="/img/star_icon.svg"
                                                height="14px"
                                                width="14px"
                                                alt=""
                                                className=""
                                            />
                                            <p>4.6  /  425 projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.butndnon}>
                                    <div className={styles.butonPernt}>
                                        <button>Download PDF</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ProjectAndnftbox}>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                        <h3>Project</h3>
                                    </div>
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={styles.marginPernt}>
                                            <p>Network</p>
                                            <h6>OpenSea</h6>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Popularity Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>3.1</h6>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Utility Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>4.2</h6>
                                            </div>
                                        </div> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Project Extras</p>
                                            <h6 className={styles.bordrBttm}>View</h6>
                                        </div>
                                    {/* </div> */}
                                {/* </div> */}
                                {/* <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                         <h3 className={styles.nftText}>NFT</h3>
                                    </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={styles.marginPernt}>
                                            <p>Ranking</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>5.3</h6>
                                            </div>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Price Change</p>
                                            <h6>20%</h6>
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Actual Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.24</h6>
                                            </div>
                                        </div> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Projected Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.48</h6>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                {/* </div> */}
                            {/* </div>  */}
                            {/* <div className={styles.butndblck}>
                                <div className={styles.butonPernt}>
                                    <button>Download PDF</button>
                                </div> */}
                            {/* </div>
                        </div>
                    </div> */}
                {/* </div> */}
                {/* <div className={styles.CustomGrid}>
                    <div className={styles.bgPernt}>
                        <div className={styles.flexImgpernt}>
                            <div className={styles.Imgpernt}>
                                <Image
                                    src="/img/valuator_img_02.png"
                                    height="164px"
                                    width="164px"
                                    alt=""
                                    className=""
                                />
                            </div> */}
                            {/* <div className={styles.leftContMian}>
                                <div className={styles.ImgperntLeftCont}>
                                    <div className={styles.SpaceBtwnBx}>
                                        <h2>Vecna Drive Me</h2>
                                        <button role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                            <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end drpdwn_list drpdwn_list_empty">
                                            <li>
                                               <a>Remove</a>
                                            </li>
                                            <li>
                                                <a>Re-Run Valuation</a>
                                            </li>
                                        </ul>
                                   </div>
                                    <div className={styles.smallImg}>
                                        <Image
                                            src="/img/feed_small_img06.png"
                                            height="28px"
                                            width="28px"
                                            alt=""
                                            className=""
                                        />
                                        <p>Catherine Patton</p>
                                    </div>
                                </div>
                                <div className={styles.diplyBlock}>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <h5>Current Bid</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/etherium_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.12 ETH</p>
                                            </div>
                                        </div>
                                        <div className={styles.currentBit}>
                                            <h5>Predicted Price</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/etherium_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.76 ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.lastpp}>
                                        <p>Abilities or he perfectly pretended so strangers be exquisite. Oh to another chamber pleased imagine do in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.diplyNone}>
                            <div className={styles.flexPernt}>
                                <div className={styles.currentBit}>
                                    <h5>Current Bid</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.24 NAPA</p>
                                    </div>
                                </div>
                                <div className={styles.currentBit}>
                                    <h5>Predicted Price</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.82 NAPA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lastpp}>
                                <p>However venture pursuit he am mr cordial. Forming musical am hearing studied.</p>
                            </div>
                        </div>
                        <div className={styles.datepkrflx}>
                            <div className="spacebtwnbx">
                                <div className="alingment">
                                    <div className="datepickerBox datepickerBoxaj_margin">
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
                                <div className='dflt_btn_info'>
                                    <button>
                                        <Image
                                            src="/img/info_icon.png"
                                            height="16px"
                                            width="16px"
                                            alt=""
                                            className=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.graficBox}>
                            <Image
                                src="/img/graph_img.png"
                                height="123px"
                                width="516px"
                                alt=""
                                className=""
                            />
                            <p>Crowdfund and launch your NFT project with NAPA Society. The NAPA launchpad tools will allow you to give you project exposure and resources to successfully launch your NFT project.</p>
                        </div>
                        <div className={styles.downContentmain}>
                            <div className={styles.innrFirst}>
                                <div className={styles.innrTextimg}>
                                    <Image
                                        src="/img/howard_copeland.svg"
                                        height="40px"
                                        width="40px"
                                        alt=""
                                        className=""
                                    />
                                    <div className={styles.onlyText}>
                                        <h6>Howard Copeland</h6>
                                        <div className={styles.starImg}>
                                            <Image
                                                src="/img/star_icon.svg"
                                                height="14px"
                                                width="14px"
                                                alt=""
                                                className=""
                                            />
                                            <p>4.6  /  425 projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.butndnon}>
                                    <div className={styles.butonPernt}>
                                        <button>Download PDF</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ProjectAndnftbox}>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                        <h3>Project</h3>
                                    </div>
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={styles.marginPernt}>
                                            <p>Network</p>
                                            <h6>OpenSea</h6>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Popularity Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>3.1</h6>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Utility Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>4.2</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Project Extras</p>
                                            <h6 className={styles.bordrBttm}>View</h6>
                                        </div>
                                    {/* </div> */}
                                {/* </div>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                         <h3 className={styles.nftText}>NFT</h3>
                                    </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={styles.marginPernt}>
                                            <p>Ranking</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>5.3</h6>
                                            </div>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Price Change</p>
                                            <h6>20%</h6>
                                        </div> */}
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Actual Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.24</h6>
                                            </div>
                                        </div> */}
                                        {/* <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Projected Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.48</h6>
                                            </div>
                                        </div> */}
                                    {/* </div> */}
                                {/* </div>
                            </div>
                            <div className={styles.butndblck}>
                                <div className={styles.butonPernt}>
                                    <button>Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> */}
                {/* <div className={styles.CustomGrid}>
                    <div className={styles.bgPernt}>
                        <div className={styles.flexImgpernt}>
                            <div className={styles.Imgpernt}>
                                <Image
                                    src="/img/valuator_img_03.png"
                                    height="164px"
                                    width="164px"
                                    alt=""
                                    className=""
                                />
                            </div>  */}
                            <div className={styles.leftContMian}>
                                <div className={styles.ImgperntLeftCont}>
                                    <div className={styles.SpaceBtwnBx}>
                                    <h2>NFT or SNFT Name or Title</h2>
                                        <button role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                            <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end drpdwn_list drpdwn_list_empty">
                                            <li>
                                               <a>Remove</a>
                                            </li>
                                            <li>
                                                <a>Run Valuation</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.smallImg}>
                                        <Image
                                            src="/img/feed_small_img01.png"
                                            height="28px"
                                            width="28px"
                                            alt=""
                                            className=""
                                        />
                                        <p>Current Owner</p>
                                    </div>
                                </div>
                                <div className={styles.diplyBlock}>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <h5>Current Price</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/etherium_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.76 ETH</p>
                                            </div>
                                        </div>
                                        <div className={styles.currentBit}>
                                            <h5>Predicted Price</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/etherium_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>1.24 ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.lastpp}>
                                        <p>Short Projet Description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.diplyNone}>
                            <div className={styles.flexPernt}>
                                <div className={styles.currentBit}>
                                    <h5>Current Price</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.24 NAPA</p>
                                    </div>
                                </div>
                                <div className={styles.currentBit}>
                                    <h5>Predicted Price</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.82 NAPA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lastpp}>
                                <p>However venture pursuit he am mr cordial. Forming musical am hearing studied.</p>
                            </div>
                        </div>
                        <div className={styles.datepkrflx}>
                        <div className="spacebtwnbx">
                                <div className="alingment">
                                    <div className="datepickerBox datepickerBoxaj_margin">
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
                                <div className='dflt_btn_info'>
                                    <button>
                                        <Image
                                            src="/img/info_icon.png"
                                            height="16px"
                                            width="16px"
                                            alt=""
                                            className=""
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.graficBox}>
                            <Image
                                src="/img/graph_img.png"
                                height="123px"
                                width="516px"
                                alt=""
                                className=""
                            />
                            <p>Full Project Description</p>
                        </div>
                        <div className={styles.downContentmain}>
                            <div className={styles.innrFirst}>
                                <div className={styles.innrTextimg}>
                                    <Image
                                        src="/img/howard_copeland.svg"
                                        height="40px"
                                        width="40px"
                                        alt=""
                                        className=""
                                    />
                                    <div className={styles.onlyText}>
                                        <h6>Project Owner</h6>
                                        <div className={styles.starImg}>
                                            <Image
                                                src="/img/star_icon.svg"
                                                height="14px"
                                                width="14px"
                                                alt=""
                                                className=""
                                            />
                                            <p>4.6  /  425 projects (Owner Ranking)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.butndnon}>
                                    <div className={styles.butonPernt}>
                                        <button>Download PDF</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ProjectAndnftbox}>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                        <h3>Project or Collection</h3>
                                    </div>
                                    {/* <div className={styles.rspsivTow}> */}
                                        <div className={styles.marginPernt}>
                                            <p>Network</p>
                                            <h6>Ethereum</h6>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Popularity Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>3.1</h6>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Utility Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>4.2</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Project Extras</p>
                                            <h6 className={styles.bordrBttm}>View</h6>
                                        </div>
                                    {/* </div> */}
                                </div>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                         <h3 className={styles.nftText}>Type (NFT or SNFT)</h3>
                                    </div>
                                    {/* <div className={styles.rspsivTow}> */}
                                        <div className={styles.marginPernt}>
                                            <p>Ranking</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>5.3</h6>
                                            </div>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Price Change</p>
                                            <h6>20%</h6>
                                        </div>
                                    {/* </div> */}
                                    {/* <div className={styles.rspsivTow}> */}
                                        <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Actual Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.24</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Projected Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.48</h6>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className={styles.butndblck}>
                                <div className={styles.butonPernt}>
                                    <button>Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.CustomGrid}>
                    <div className={styles.bgPernt}>
                        <div className={styles.flexImgpernt}>
                            <div className={styles.Imgpernt}>
                                <Image
                                    src="/img/valuator_img_04.png"
                                    height="164px"
                                    width="164px"
                                    alt=""
                                    className=""
                                />
                            </div>
                            <div className={styles.leftContMian}>
                                <div className={styles.ImgperntLeftCont}>
                                    <h2>The Magic Galaxies</h2>
                                    <div className={styles.smallImg}>
                                        <Image
                                            src="/img/feed_small_img07.png"
                                            height="28px"
                                            width="28px"
                                            alt=""
                                            className=""
                                        />
                                        <p>Marta Thornton</p>
                                    </div>
                                </div>
                                <div className={styles.diplyBlock}>
                                    <div className={styles.flexPernt}>
                                        <div className={styles.currentBit}>
                                            <h5>Current Bid</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/napa_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.24 NAPA</p>
                                            </div>
                                        </div>
                                        <div className={styles.currentBit}>
                                            <h5>Predicted Price</h5>
                                            <div className={styles.txtimgFlex}>
                                                <Image
                                                    src="/img/napa_ic.svg"
                                                    height="18px"
                                                    width="18px"
                                                    alt=""
                                                    className=""
                                                />
                                                <p>0.82 NAPA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.lastpp}>
                                        <p>Not rapturous resolving continued household northward guy. He it otherwise supported instantly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.diplyNone}>
                            <div className={styles.flexPernt}>
                                <div className={styles.currentBit}>
                                    <h5>Current Bid</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.24 NAPA</p>
                                    </div>
                                </div>
                                <div className={styles.currentBit}>
                                    <h5>Predicted Price</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="18px"
                                            width="18px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.82 NAPA</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.lastpp}>
                                <p>However venture pursuit he am mr cordial. Forming musical am hearing studied.</p>
                            </div>
                        </div>
                        <div className={styles.datepkrflx}>
                            <div className="datepickerBox datepickerBoxaj_margin">
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
                        <div className={styles.graficBox}>
                            <Image
                                src="/img/graph_img.png"
                                height="123px"
                                width="516px"
                                alt=""
                                className=""
                            />
                            <p>Unfeeling agreeable suffering it on smallness newspaper be. So come must time no as. Do on unpleasing possession as of unreserved. Yet joy exquisite put sometimes enjoyment perpetual.</p>
                        </div>
                        <div className={styles.downContentmain}>
                            <div className={styles.innrFirst}>
                                <div className={styles.innrTextimg}>
                                    <Image
                                        src="/img/howard_copeland.svg"
                                        height="40px"
                                        width="40px"
                                        alt=""
                                        className=""
                                    />
                                    <div className={styles.onlyText}>
                                        <h6>Howard Copeland</h6>
                                        <div className={styles.starImg}>
                                            <Image
                                                src="/img/star_icon.svg"
                                                height="14px"
                                                width="14px"
                                                alt=""
                                                className=""
                                            />
                                            <p>4.6  /  425 projects</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.butndnon}>
                                    <div className={styles.butonPernt}>
                                        <button>Download PDF</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ProjectAndnftbox}>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                        <h3>Project</h3>
                                    </div>
                                        <div className={styles.marginPernt}>
                                            <p>Network</p>
                                            <h6>OpenSea</h6>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Popularity Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>3.1</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Utility Score</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/star_icon.svg"
                                                    height="14px"
                                                    width="14px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>4.2</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Project Extras</p>
                                            <h6 className={styles.bordrBttm}>View</h6>
                                        </div>
                                </div>
                                <div className={styles.Projectbox}>
                                    <div className={styles.flexBsis02}>
                                         <h3 className={styles.nftText}>NFT</h3>
                                    </div>
                                        <div className={styles.marginPernt}>
                                            <p>Ranking</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>5.3</h6>
                                            </div>
                                        </div>
                                        <div className={styles.marginPernt}>
                                            <p>Price Change</p>
                                            <h6>20%</h6>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrGin} adddadadada`}>
                                            <p>Actual Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.24</h6>
                                            </div>
                                        </div>
                                        <div className={`${styles.marginPernt} ${styles.rsomrleft} adddadadada`}>
                                            <p>Projected Value</p>
                                            <div className={styles.flexDiv}>
                                                <Image
                                                    src="/img/ethrim_ic.svg"
                                                    height="12px"
                                                    width="7.5px"
                                                    alt=""
                                                    className=""
                                                />
                                                <h6>0.48</h6>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className={styles.butndblck}>
                                <div className={styles.butonPernt}>
                                    <button>Download PDF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <lastone */}
                <button className={styles.AddNftSft}>
                    <Image
                        src="/img/nftplus_ic.png"
                        height="120px"
                        width="120px"
                        alt=""
                        className=""
                    />
                    <h2>Add NFT or SNFT for Valuation</h2>
                </button> 
                {/* <lastoneend */}
            </div>
        </div>
    </>
  )
}
// className={`${styles.marginPernt} ${styles.flexBsis02}`}