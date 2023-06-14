import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './ProjectsAnalytics.module.scss';
import Link from 'next/link';

export default function ProjectsAnalytics() {
      const optionsthree = [
        { value: '1', label: 'Last 7 Days' },
        { value: '2', label: 'Last 30 Days' },
        { value: '3', label: 'Last 90 Days ' },
      ];
      const optionsfour = [
        { value: '1', label: '20Rs' },
        { value: '2', label: '30Rs' },
        { value: '3', label: '40Rs' },
      ];
      const optionsfive = [
        { value: '1', label: '0.05' },
        { value: '2', label: '0.06' },
        { value: '3', label: '0.07' },
      ];
     
      const optionssix = [
        { value: '1', label: 'Top 250' },
        { value: '2', label: 'Top 350' },
        { value: '3', label: 'Top 450' },
      ];
     
      const optionsseven = [
        { value: '1', label: '1 weeks' },
        { value: '2', label: '2 weeks' },
        { value: '3', label: '3 weeks' },
      ];
     
      const [active, setActive] = React.useState(false);
      const handleClick = () => {
        setActive(!active);
      };
    
  return (
    <>
    {/* napa_ic */}
       
        <div className={styles.tipandtotolmain}>
            <div className="select_main">
            <Select
                        options={optionsthree}
                        // menuIsOpen={true}
                        className="select_pernt slctrspnsv"
                        placeholder="Last 7 Days"
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
                        options={optionsthree}
                        // menuIsOpen={true}
                        className="select_pernt slctrspnsv"
                        placeholder="Last 7 Days"
                        classNamePrefix="cntrslct"
                    />
                </div>
            </div>
        </div>
            <div className={styles.buttonperntAj}>
                <Link href="#"><a>Make Collection Offer</a></Link>
            </div>
        </div>
        <div className={styles.AnalisisMainInnr}>
            <div className={styles.FrstAnalis}>
                <div className={`${styles.VolumeAnalisis} ${styles.VolumeAnalisisbrdr}`}>
                    <h6>Volume</h6>
                    <h1>10.85</h1>
                    <div className={styles.ImgTxt}>
                        <Image src="/img/dawn_red_arrow.png" alt="" width={16} height={16} /> 
                        <p>-36%</p>
                    </div>
                </div>
                <div className={`${styles.VolumeAnalisis} ${styles.VolumeAnalisisbrdr}`}>
                    <h6>Sales</h6>
                    <h1>34</h1>
                    <div className={styles.ImgTxt}>
                        <Image src="/img/dawn_blue_arrow.png" alt="" width={16} height={16} /> 
                        <p className={styles.BlueP}>+36%%</p>
                    </div>
                </div>
                <div className={`${styles.VolumeAnalisis} ${styles.VolumeAnalisisbrdr}`}>
                    <h6>Floor Price</h6>
                    <h1>0.37</h1>
                    <div className={styles.ImgTxt}>
                        <Image src="/img/dawn_blue_arrow.png" alt="" width={16} height={16} /> 
                        <p className={styles.BlueP}>-36%</p>
                    </div>
                </div>
            </div>
            <div className={styles.ScndAnalis}>
                <div className={`${styles.VolumePriceBox} ${styles.VolumeAnalisisbrdr}`}>
                    <div className={styles.VolumePriceTxtBx}>
                        <h1>Volume and Price</h1>
                        <div className={styles.SpcBtwnTwoP}>
                            <p>Volume (NAPA)</p>
                            <p>Average Price (NAPA)</p>
                        </div>
                    </div>
                    <div className={styles.VolumeImgGraff}>
                        <Image src="/img/volume_price_graf.png" alt="" width={524} height={254} /> 
                    </div>
                </div>
                <div className={`${styles.VolumePriceBoxRight} ${styles.VolumeAnalisisbrdr}`}>
                    <div className={styles.VolumePriceTxtBxRight}>
                        <div className={`${styles.SpcBtwnTwoPRight} ${styles.Emty}`}>
                            <h1>Volume and Price</h1>
                            <div className="form-check checkbx_analitics">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Outliers
                                </label>
                            </div>
                        </div>
                        <p>Price (NAPA)</p>
                    </div>
                    <div className={styles.VolumeImgGraff}>
                        <Image src="/img/volume_price_graf02.png" alt="" width={524} height={254} /> 
                    </div>
                </div>
            </div>
            <div className={`${styles.VolumePriceBoxRight} ${styles.VolumeAnalisisbrdr} ${styles.VolumePriceBoxBigGraff}`}>
                <div className={styles.VolumePriceTxtBxRight}>
                    <div className={`${styles.SpcBtwnTwoPRight} ${styles.Emty}`}>
                        <h1>Floor Price</h1>
                        <div className="slct_analitics">
                            <Select
                                options={optionsseven}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv select_perntanalitics"
                                placeholder="2 weeks"
                                classNamePrefix="cntrslct"
                            />
                        </div>
                    </div>
                    <p>Floor Price (NAPA)</p>
                </div>
                <div className={styles.VolumeImgGraff}>
                    <Image src="/img/volume_price_graf03.png" alt="" width={1136} height={254} /> 
                </div>
            </div>
            <div className={styles.ListingsSalesBox}>
                <div className={`${styles.ListingsBox} ${styles.Emty}`}>
                    <div className={styles.listingTxts}>
                        <h1>Listings</h1>
                        <div className="slct_analitics">
                            <Select
                                options={optionsfour}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv select_perntanalitics"
                                placeholder="Prize"
                                classNamePrefix="cntrslct"
                            />
                        </div>
                    </div>
                    <div className={styles.ListingOvrLay}>
                        <div className={styles.ListingOverflow}>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing01.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Endless Rays of a Carefree Past</h1>
                                        <p>19 hours ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.24</h3>
                                    </div>
                                <h4>At Floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing02.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Infinite Space of variations</h1>
                                        <p>2 day ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.37</h3>
                                    </div>
                                <h4 className={styles.Blueh4}>+4% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing03.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>That Which Falls Upwards</h1>
                                        <p>3 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.29</h3>
                                    </div>
                                <h4 className={styles.Redh4}>-5% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing04.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Mysterious Space Squares</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.45</h3>
                                    </div>
                                <h4>+8% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing05.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Futuristic Fierce Radiant Cube</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.36</h3>
                                    </div>
                                    <h4>+8% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/listing05.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Futuristic Fierce Radiant Cube</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.36</h3>
                                    </div>
                                    <h4>+8% floor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* rightside  */}
                <div className={`${styles.ListingsBox} ${styles.RightSalesBx}`}>
                    <div className={styles.listingTxts}>
                        <h1>Sales</h1>
                    </div>
                    <div className={styles.ListingOvrLay}>
                        <div className={styles.ListingOverflow}>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales01.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Escape from the Wave of Negative</h1>
                                        <p className={styles.Blueh4}>19 hours ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.28</h3>
                                    </div>
                                <h4 className={styles.Blueh4}>+41% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales02.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Bless the Fallout Sadness</h1>
                                        <p>2 day ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.24</h3>
                                    </div>
                                <h4 className={styles.Redh4}>+6% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales03.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Cyberpunk Reality in your Eyes</h1>
                                        <p className={styles.Blueh4}>3 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.32</h3>
                                    </div>
                                <h4 className={styles.Blueh4}>+12% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales04.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Stairs to the Future of Beauty</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.54</h3>
                                    </div>
                                <h4 className={styles.Redh4}>+4% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales05.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Molecules of your Strange Feelings</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.48</h3>
                                    </div>
                                <h4 className={styles.Redh4}>+4% floor</h4>
                                </div>
                            </div>
                            <div className={styles.ListingInrBx}>
                                <div className={styles.EndlessImgTxt}>
                                    <Image src="/img/sales05.png" alt="" width={56} height={56} /> 
                                    <div className={styles.PastTxtsBx}>
                                        <h1>Molecules of your Strange Feelings</h1>
                                        <p>5 days ago</p>
                                    </div>
                                </div>
                                <div className={styles.AtFloorRghtTxt}>
                                    <div className={styles.Right24txt}>
                                        <Image src="/img/napa_ic.svg" alt="" width={20} height={20} /> 
                                        <h3>0.48</h3>
                                    </div>
                                <h4 className={styles.Redh4}>+4% floor</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.VolumePriceBoxRight} ${styles.VolumeAnalisisbrdr} ${styles.VolumePriceBoxBigGraff}`}>
                <div className={styles.VolumePriceTxtBxRight}>
                    <div className={`${styles.SpcBtwnTwoPRight} ${styles.Emty}`}>
                        <h1>Price Distribution</h1>
                        <div className="slct_analitics">
                            <Image src="/img/npa_ic_an.png" alt="" width={17} height={15} /> 
                            <Select
                                options={optionsfive}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv select_perntanalitics"
                                placeholder="0.05"
                                classNamePrefix="cntrslct"
                            />
                        </div>
                    </div>
                    <div className={styles.OffrListingBx}>
                        <div className={styles.OfferBxBfr}>
                            <h5>Offers</h5>
                        </div>
                        <div className={styles.ListinggBxBfr}>
                            <h5>Listings</h5>
                        </div>
                    </div>
                </div>
                <div className={styles.VolumeImgGraff}>
                    <Image src="/img/volume_price_graf04.png" alt="" width={1136} height={254} /> 
                </div>
            </div>
            <div className={styles.ListingsSalesBox}>
                <div className={`${styles.ListingsBox} ${styles.Emty}`}>
                    <div className={styles.listingTxts}>
                        <h1>Owner Distribution  <span>1,362</span></h1>
                    </div>
                    <div className={styles.VolumeImgGraff}>
                    <Image src="/img/volume_price_graf05.png" alt="" width={524} height={300} /> 
                </div>
                </div>
                {/* rightside  */}
                <div className={`${styles.ListingsBox} ${styles.RightOwnerBox}`}>
                    <div className={styles.listingTxts}>
                        <h1>Owners</h1>
                        <div className="slct_analitics">
                            <Select
                                options={optionssix}
                                // menuIsOpen={true}
                                className="select_pernt slctrspnsv select_perntanalitics"
                                placeholder="Top 250"
                                classNamePrefix="cntrslct"
                            />
                        </div>      
                    </div>
                    <div className={styles.MainOwnerRight}>
                        <div className={styles.HadOnwer}>
                            <h4 className={styles.Frst5Prs}></h4>
                            <h4 className={styles.Frst33Prs}>Name</h4>
                            <h4 className={styles.Frst32Prs}>Wallet</h4>
                            <h4 className={styles.Frst15Prs}>Owned</h4>
                            <h4 className={styles.Frst15Prs}>% Owned</h4>
                        </div>
                        <div className={styles.ListingOvrLaytwo}>
                            <div className={styles.ListingOverflow}>
                                <div className={styles.OwnerInnrTbl}>
                                    <h2 className={styles.Frst5Prs}>1</h2>
                                    <h2 className={styles.Frst33Prs}>
                                        <Image src='/img/tablegirl02.png' alt="" width={40} height={40} />
                                        VecnaСurse
                                    </h2>
                                    <h2 className={styles.Frst32Prs}>0xdb4f..4ba2</h2>
                                    <h2 className={styles.Frst15Prs}>147</h2>
                                    <h2 className={styles.Frst15Prs}>2.89%</h2>
                                </div>
                                <div className={styles.OwnerInnrTbl}>
                                    <h2 className={styles.Frst5Prs}>2</h2>
                                    <h2 className={styles.Frst33Prs}>
                                        <Image src='/img/tablegirl01.png' alt="" width={40} height={40} />
                                        Mayfield74
                                    </h2>
                                    <h2 className={styles.Frst32Prs}>0xdf2f..860b</h2>
                                    <h2 className={styles.Frst15Prs}>104</h2>
                                    <h2 className={styles.Frst15Prs}>2.05%</h2>
                                </div>
                                <div className={styles.OwnerInnrTbl}>
                                    <h2 className={styles.Frst5Prs}>3</h2>
                                    <h2 className={styles.Frst33Prs}>
                                        <Image src='/img/tablegirl06.png' alt="" width={40} height={40} />
                                        TonekDma
                                    </h2>
                                    <h2 className={styles.Frst32Prs}>0x2f3e..b8c9</h2>
                                    <h2 className={styles.Frst15Prs}>86</h2>
                                    <h2 className={styles.Frst15Prs}>1.69%</h2>
                                </div>
                                <div className={styles.OwnerInnrTbl}>
                                    <h2 className={styles.Frst5Prs}>4</h2>
                                    <h2 className={styles.Frst33Prs}>
                                        <Image src='/img/tablegirl05.png' alt="" width={40} height={40} />
                                        PeterStorm
                                    </h2>
                                    <h2 className={styles.Frst32Prs}>0xb569..df54</h2>
                                    <h2 className={styles.Frst15Prs}>71</h2>
                                    <h2 className={styles.Frst15Prs}>1.40%</h2>
                                </div>
                                <div className={styles.OwnerInnrTbl}>
                                    <h2 className={styles.Frst5Prs}>5</h2>
                                    <h2 className={styles.Frst33Prs}>
                                        <Image src='/img/tablegirl07.png' alt="" width={40} height={40} />
                                        PeterStorm
                                    </h2>
                                    <h2 className={styles.Frst32Prs}>0xb569..df54</h2>
                                    <h2 className={styles.Frst15Prs}>71</h2>
                                    <h2 className={styles.Frst15Prs}>1.40%</h2>
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
