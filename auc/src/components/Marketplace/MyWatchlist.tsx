import React from 'react'
import styles from './MyWatchlist.module.scss';
import Image from 'next/image';
import { SearchIcon } from '../assets';

export default function MintedTabList() {
  return (
    <>    
        <div className={styles.myWachtUpcontnt}>
            <ul>
                <li className={styles.active}><button>1h</button></li>
                <li><button>6h</button></li>
                <li><button>24h</button></li>
                <li><button>7d</button></li>
                <li><button>30d</button></li>
                <li><button>All</button></li>
            </ul>
            <div><Image src={SearchIcon} width={24} height={24} /></div>
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
                </div>
            </div>
        </div>
    </>

  )
}
