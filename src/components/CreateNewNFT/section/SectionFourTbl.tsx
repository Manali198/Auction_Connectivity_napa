import React from 'react'
import styles from './SectionFourTbl.module.scss';
import Image from 'next/image';

export default function SectionFourTbl() {
  return (
    <div className={styles.SectionThree}>
        <div className="col-lg-12 ">
            <div className={styles.MainTable}>
                <h4>Offers</h4>
            </div>
            <div className={styles.MainTableTable}>
                <div className={styles.TableHead}>
                    <h4>Price</h4>
                    <h4>USD Price</h4>
                    <h4>Floor Difference</h4>
                    <h4>Expiration</h4>
                <h4 className={styles.centrContnt}>From</h4>
                </div>
                <div className={styles.TableRowMain}>
                    <div className={styles.TableRow}>
                        <h4>
                            <label>Price</label>
                            <div className={styles.flexPrntnap}>
                                <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                                <h4 className={styles.marginPernt}>2.937</h4>
                                <span>ETH</span>
                            </div>
                        </h4>
                        <h4>
                            <label>USD Price</label>
                            $ 3,937.62
                        </h4>
                        <h4>
                            <label>Floor Difference</label>
                            9% below
                        </h4>
                        <h4>
                            <label>Expiration</label>
                            1 day
                        </h4>
                        <h4>
                            <label>From</label>
                            <button className={styles.ClaimBtn}>JayHawk007</button>
                        </h4>
                    </div>
                <div className={styles.TableRow}>
                    <h4>
                        <label>Price</label>
                        <div className={styles.flexPrntnap}>
                            <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                            <h4 className={styles.marginPernt}>2.826</h4>
                            <span>ETH</span>
                        </div>
                    </h4>
                    <h4>
                        <label>USD Price</label>
                        $ 3,823.22
                    </h4>
                    <h4>
                        <label>Floor Difference</label>
                        9% below
                    </h4>
                    <h4>
                        <label>Expiration</label>
                        3 day
                    </h4>
                    <h4>
                        <label>From</label>
                        <button className={styles.ClaimBtn}>PeterStorm12</button>
                    </h4>
                </div>
                <div className={styles.TableRow}>
                    <h4>
                        <label>Price</label>
                        <div className={styles.flexPrntnap}>
                            <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                            <h4 className={styles.marginPernt}>2.715</h4>
                            <span>ETH</span>
                        </div>
                    </h4>
                    <h4>
                        <label>USD Price</label>
                        $ 3,774.12
                    </h4>
                    <h4>
                        <label>Floor Difference</label>
                        9% below
                    </h4>
                    <h4>
                        <label>Expiration</label>
                        4 hours
                    </h4>
                    <h4>
                        <label>From</label>
                        <button className={styles.ClaimBtn}>TonekDMA77</button>
                    </h4>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
