import React from 'react'
import styles from './WatchlistRanking.module.scss';
import Image from 'next/image';
import Select from 'react-select';

export default function WatchlistRanking() {
    const options = [
        { value: 'Project 1', label: 'Project 1' },
        { value: 'Project 2', label: 'Project 2' },
        { value: 'Project 3', label: 'Project 3' },
      ];
      const optionsthree = [
        { value: '1', label: '20%' },
        { value: '2', label: '50%' },
        { value: '3', label: '100%' },
      ];
      const optionsfour = [
        { value: 'chocolate', label: '4h 32 min' },
        { value: 'strawberry', label: '3h 32 min' },
        { value: 'vanilla', label: '2h 32 min' },
      ];
      const [active, setActive] = React.useState(false);
      const handleClick = () => {
        setActive(!active);
      };
  return (
    <>    
    
        <div className={styles.tipandtotolMain}>
            <div className="select_main slectmainmargnsmll">
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
                    placeholder="Last 24 hours"
                    classNamePrefix="cntrslct"
                />
                <Select
                    options={optionsfour}
                    // menuIsOpen={true}
                    className="select_pernt"
                    placeholder="All Chains"
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
                        placeholder="Last 24 hours"
                        classNamePrefix="cntrslct"
                    />
                    <Select
                        options={optionsfour}
                        // menuIsOpen={true}
                        className="select_pernt"
                        placeholder="All Chains"
                        classNamePrefix="cntrslct"
                    />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.MainListBox}>
            <div className={styles.MainListHead}>
                <div className={`${styles.HeadLabel} ${styles.LabelOne}`}>
                    Collection
                </div>
                <div className={`${styles.HeadLabel} ${styles.LabelTwo}`}>
                    Volume <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>
                <div className={`${styles.HeadLabel} ${styles.LabelThree}`}>
                    % Change <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>
                <div className={`${styles.HeadLabel} ${styles.LabelFour}`}>
                    Floor Price <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>
                <div className={`${styles.HeadLabel} ${styles.LabelFive}`}>
                    Sales <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>
                <div className={`${styles.HeadLabel} ${styles.LabelSix}`}>
                    % Unique Owners <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>   
                <div className={`${styles.HeadLabel} ${styles.LabelSeven}`}>
                    % Items Listed<Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
                </div>
                <div className={`${styles.HeadLabel} ${styles.Labeleeight}`}>

                </div>
            </div>
            <div className={styles.MainListShdo}>
                <div className={styles.MainListList}>
                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Scream Silence</h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>1.4</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPernt}>+7%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>1.4</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>12</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>38%</h6>
                            <p className={styles.peraAj}>2,831 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>24%</h6>
                            <p className={styles.peraAj}>1,928 of 8,927</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/unpin_collection_img.svg" alt="" width={20} height={20} />
                                        Unpin Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/delete_icon.svg" alt="" width={20} height={20} />
                                        Remove from Watchlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Second Box */}
                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img02.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Freaks and Geeks</h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>4.4</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPerntRed}>-4%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>0.24</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>32</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>42%</h6>
                            <p className={styles.peraAj}>3,237 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>16%</h6>
                            <p className={styles.peraAj}>1,254 of 3,234</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/unpin_collection_img.svg" alt="" width={20} height={20} />
                                        Unpin Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/delete_icon.svg" alt="" width={20} height={20} />
                                        Remove from Watchlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ThirdBox */}
                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img03.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Stranger Pinks</h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>5.3</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPernt}>+8%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>0.67</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>8</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>26%</h6>
                            <p className={styles.peraAj}>1,926 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>24%</h6>
                            <p className={styles.peraAj}>1,928 of 8,927</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/unpin_collection_img.svg" alt="" width={20} height={20} />
                                        Unpin Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/delete_icon.svg" alt="" width={20} height={20} />
                                        Remove from Watchlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ForthBox */}

                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img04.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Lumens Darkness</h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>1.6</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPernt}>+5%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>0.22</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>24</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>54%</h6>
                            <p className={styles.peraAj}>4,642 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>42%</h6>
                            <p className={styles.peraAj}>3,657 of 5,873</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/unpin_collection_img.svg" alt="" width={20} height={20} />
                                        Unpin Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/delete_icon.svg" alt="" width={20} height={20} />
                                        Remove from Watchlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* fiveBox */}
                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img05.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Moon City </h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>3.2</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPerntRed}>-2%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>16.99</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>15</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>18%</h6>
                            <p className={styles.peraAj}>1,092 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>12%</h6>
                            <p className={styles.peraAj}>972 of 1,584</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/unpin_collection_img.svg" alt="" width={20} height={20} />
                                        Unpin Collection
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/delete_icon.svg" alt="" width={20} height={20} />
                                        Remove from Watchlist
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* sixBox */}
                    <div className={styles.MainListListInn}>
                        <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                            <Image src="/img/mywatchlist_tbl_img01.png" alt="" width={72} height={72} />
                            <div className={styles.RspnsvListtext}>
                                <div className={styles.TxtH3}>
                                    <h3>Scream Silence</h3>
                                </div>
                                <div className={styles.RspnsvEarn}>
                                    <Image src="/img/napa_icon_blue.png" alt="" width={17} height={13} />
                                    12.35
                                    <span className={styles.DefSpan}>Earned</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>1.4</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6 className={styles.colorPernt}>+7%</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <div className={styles.RspnsvIcnSpn}>
                                <Image src="/img/etherm_ic_intabl.svg" alt="" width="9.38px" height="15px" />
                                <h6>1.4</h6>
                            </div>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>12</h6>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>38%</h6>
                            <p className={styles.peraAj}>2,831 Owners</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowFour} RowLabelprnt_aj`}>
                            <div className={styles.Rspnsvh4}>
                                <h4>Date Minted</h4>
                            </div>
                            <h6>24%</h6>
                            <p className={styles.peraAj}>1,928 of 8,927</p>
                        </div>
                        <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                            <button role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/gift_icon.png" alt="" width={20} height={20} />
                                        Redeem Tokens
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <Image src="/img/send_icon.png" alt="" width={20} height={20} />
                                        Submit to Marketplace    
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* seven box */}
                </div>
            </div>
        </div>
    </>

  )
}
