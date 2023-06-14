import React from 'react'
import styles from './SectionthreeTbl.module.scss';
import Image from 'next/image';

export default function SectionThreeTbl() {
  return (
    <div className={styles.SectionThree}>
        <div className="col-lg-12 ">
            <div className={styles.MainTable}>
                <h4>Previous Listings</h4>
            </div>
            <div className={styles.MainTableTable}>
                <div className={styles.TableHead}>
                    <h4>Price</h4>
                    <h4 className={styles.centrContnt}>USD Price</h4>
                    <h4 className={styles.centrContnt}>Expiration</h4>
                    <h4 className={styles.centrContnt}>From</h4>
                    <h4></h4>
                </div>
                <div className={styles.TableRowMain}>
                    <div className={styles.TableRow}>
                        <h4>
                            <label>Price</label>
                            <div className={styles.flexPrntnap}>
                                <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                                <h4 className={styles.marginPernt}>0.604 </h4>
                                <span>ETH</span>
                            </div>
                        </h4>
                        <h4>
                            <label>USD Price</label>
                            $ 1.604
                        </h4>
                        <h4>
                            <label>Expiration</label>
                            9 hours
                        </h4>
                        <h4>
                            <label>From</label>
                            You
                        </h4>
                        <h4>
                            <label>&nbsp;</label>
                            <button className={styles.ClaimBtn}>Cancel</button>
                        </h4>
                    </div>
                <div className={styles.TableRow}>
                    <h4>
                        <label>Price</label>
                        <div className={styles.flexPrntnap}>
                            <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                            <h4 className={styles.marginPernt}>0.715</h4>
                            <span>ETH</span>
                        </div>
                    </h4>
                    <h4>
                        <label>USD Price</label>
                        $ 1.715
                    </h4>
                    <h4>
                        <label>Expiration</label>
                        2 weeks
                    </h4>
                    <h4>
                        <label>From</label>
                        You
                    </h4>
                    <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Cancel</button>
                    </h4>
                </div>
                <div className={styles.TableRow}>
                    <h4>
                        <label>Price</label>
                        <div className={styles.flexPrntnap}>
                            <Image src="/img/napa_ic_white.svg" alt="" width={17} height={13} />
                            <h4 className={styles.marginPernt}>1.204 </h4>
                            <span>ETH</span>
                        </div>
                    </h4>
                    <h4>
                        <label>USD Price</label>
                        $ 2.204
                    </h4>
                    <h4>
                        <label>Expiration</label>
                        1 month
                    </h4>
                    <h4>
                        <label>From</label>
                        You
                    </h4>
                    <h4>
                        <label>&nbsp;</label>
                        <button className={styles.ClaimBtn}>Cancel</button>
                    </h4>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
