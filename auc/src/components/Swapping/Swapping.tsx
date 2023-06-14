import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Swapping.module.scss';
import Link from 'next/link';

export default function Swapping() {
    const options = [
      { value: 'Pending', label: 'Pending' },
      { value: 'completed', label: 'Completed' },
      { value: 'rejected', label: 'Rejected' },
    ];
  return (
    <>
      <ul
        className="nav nav-tabs poolt_teb_prnt swap-tab"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Offers by Users <span>136</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            My Swaps <span>28</span>
          </button>
        </li>
      </ul>

      <div className={styles.tipandtotolmain}>
        <div className="select_main">
          <Select
            options={options}
            // menuIsOpen={true}
            className="select_pernt slctrspnsv"
            placeholder="Status "
            classNamePrefix="cntrslct"
          />
        </div>
        <div className={styles.buttonperntAj}>
          <button className={styles.SearchBtnHad}>
            <Image
              src="/img/search_icon_aj.svg"
              alt=""
              height="24px"
              width="24px"
              className=""
            />
          </button>
          {/* <button >Create New</button> */}
          <Link href="/create-new-swapping">
            <a className={`${styles.marginPrnt} ${styles.CreateNewBtn}`}>
              Create New
            </a>
          </Link>
          {/* <button><Image src='/img/grid_ic_dark.svg' alt='' height="24px" width="24px" className='' /></button> */}
        </div>
      </div>

      <div className="tab-content my-batching" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className={styles.GridprntAbOvrliy}>
            <div className={styles.GridprntAb}>
              <div className={styles.GridprntAbPaading}>
                <div className={styles.SwappingMain}>
                  <div className={styles.SwappingMainInnr}>
                    <div className={styles.ExpolatinForm}>
                      <div className={styles.ExpolatinBg}>
                        <Image
                          src="/img/expoltion.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>NFT Name of SNFT Title</h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/expoyr_tex.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.34 NAPA</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/expoyer_text_secnd.svg"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>NFT or SNFT Owner</span>
                          </div>
                        </div>
                        <div className={styles.ExpolatinSecndImgAbsolat}>
                          <Image
                            src="/img/absolat_img.png"
                            alt=""
                            height="48px"
                            width="48px"
                            className=""
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.ExpolatinBg} ${styles.PdingLft}`}
                      >
                        <Image
                          src="/img/secand_sec_ic.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>NFT Name or SNFT Title</h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/expoyr_tex.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.36 NAPA</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/expolyer_avtar.png"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>NFT or SNFT Owner</span>
                          </div>
                        </div>
                      </div>

                      <div className={styles.ExpolatinThrd}>
                        <div className={styles.ExpolatinDflx}>
                          <div className={styles.ExpolatiSactionThrd}>
                            <Image
                              src="/img/thrd_sec_ic.svg"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>0.24</span>
                          </div>
                          <div className={styles.ExpolatiSacsesFull}>
                            <Image
                              src="/img/thrd_sec_aroo.svg"
                              alt=""
                              height="14px"
                              width="14px"
                              className=""
                            />
                            <span>Completed</span>
                          </div>
                        </div>
                        <div className={styles.ExpolationBatn}>
                          <button className={styles.marginPrnt}>
                            Contact Swap Owner
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ExpolatinForm}>
                      <div className={styles.ExpolatinBg}>
                        <Image
                          src="/img/expoyer_bringme.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>Bring Me the Space </h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/etherm_ic_intabl.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.34 ETH</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/feed_small_img02.png"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>Tom Bradley</span>
                          </div>
                        </div>
                        <div className={styles.ExpolatinSecndImgAbsolat}>
                          <Image
                            src="/img/absolat_img.png"
                            alt=""
                            height="48px"
                            width="48px"
                            className=""
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.ExpolatinBg} ${styles.PdingLft}`}
                      >
                        <Image
                          src="/img/expotion_ic.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>Expulsion to Paradise</h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/etherm_ic_intabl.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.36 ETH</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/feed_small_img03.png"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>Dorothy Mccoy</span>
                          </div>
                        </div>
                      </div>

                      <div className={styles.ExpolatinThrd}>
                        <div className={styles.ExpolatinDflx}>
                          <div className={styles.ExpolatiSactionThrd}>
                            <Image
                              src="/img/etherium_ic.svg"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>0.46</span>
                          </div>
                          <div
                            className={` ${styles.ExpolatiSacsesFull} pending `}
                          >
                            <Image
                              src="/img/pending.svg"
                              alt=""
                              height="14px"
                              width="14px"
                              className=""
                            />
                            <span>Pending</span>
                          </div>
                        </div>
                        <div className={` ${styles.ExpolationBatn} d-flex`}>
                          <button className={styles.marginPrnt}>Accept</button>
                          <button className={` ${styles.marginPrnt} reject-btn`}>
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.ExpolatinForm}>
                      <div className={styles.ExpolatinBg}>
                        <Image
                          src="/img/expoltion.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>NFT Name of SNFT Title</h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/expoyr_tex.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.34 NAPA</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/expoyer_text_secnd.svg"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>NFT or SNFT Owner</span>
                          </div>
                        </div>
                        <div className={styles.ExpolatinSecndImgAbsolat}>
                          <Image
                            src="/img/absolat_img.png"
                            alt=""
                            height="48px"
                            width="48px"
                            className=""
                          />
                        </div>
                      </div>
                      <div
                        className={`${styles.ExpolatinBg} ${styles.PdingLft}`}
                      >
                        <Image
                          src="/img/secand_sec_ic.png"
                          height="94px"
                          width="94px"
                          alt=""
                          className="expolr"
                        />
                        <div className={styles.ExpolatinText}>
                          <h4>NFT Name or SNFT Title</h4>
                          <div className={styles.ExpolatinNapaLogo}>
                            <Image
                              src="/img/expoyr_tex.svg"
                              alt=""
                              height="10px"
                              width="13px"
                              className=""
                            />
                            <span>0.36 NAPA</span>
                          </div>
                          <div className={styles.ExpolatinSecndImg}>
                            <Image
                              src="/img/expolyer_avtar.png"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>NFT or SNFT Owner</span>
                          </div>
                        </div>
                      </div>

                      <div className={styles.ExpolatinThrd}>
                        <div className={styles.ExpolatinDflx}>
                          <div className={styles.ExpolatiSactionThrd}>
                            <Image
                              src="/img/thrd_sec_ic.svg"
                              alt=""
                              height="24px"
                              width="24px"
                              className=""
                            />
                            <span>0.24</span>
                          </div>
                          <div
                            className={` ${styles.ExpolatiSacsesFull} reject`}
                          >
                            <Image
                              src="/img/reject.svg"
                              alt=""
                              height="14px"
                              width="14px"
                              className=""
                            />
                            <span>Rejeceted</span>
                          </div>
                        </div>
                        <div className={styles.ExpolationBatn}>
                          <button className={styles.marginPrnt}>
                            Contact Swap Owner
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          No Active Pools
        </div>
      </div>
    </>
  );
}
