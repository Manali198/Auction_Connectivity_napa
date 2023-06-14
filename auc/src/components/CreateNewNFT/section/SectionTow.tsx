import Image from 'next/image';
import React from 'react'
import styles from './SectionTow.module.scss';

export default function SectionTow() {
  return (
    <div className={styles.SectionTow}>
        <div className={styles.CustomGridContainer}>
            <div className={styles.CustomGrid}>
                <div className={styles.DetailsCont}>
                    <h1>NFT Details</h1>
                    <div className={styles.flexPrntSc02}>
                        <h6>NFT Project</h6>
                        <p>(project name)</p>
                    </div>
                    <div className={styles.flexPrntSc02}>
                        <h6>Etherscan Address</h6>
                        <p>(etherscan address)</p>
                    </div>
                    <div className={styles.flexPrntSc02}>
                        <h6>Token ID</h6>
                        <p>2193</p>
                    </div>
                    <div className={styles.flexPrntSc02}>
                        <h6>Token Standard</h6>
                        <p>ERC-721</p>
                    </div>  
                    <div className={styles.flexPrntSc02}>
                        <h6>Network</h6>
                        <div className={styles.flexNapa}>
                            <Image src="/img/napa_ic_aj.svg" alt="" width={17} height={13} />
                            <p>(network)</p>
                        </div>
                        
                    </div>
                    <div className={styles.flexPrntSc02}>
                        <h6>Last Updated</h6>
                        <p>(date)</p>
                    </div>
                    <div className={styles.flexPrntSc02}>
                        <h6>Creator Earnings</h6>
                        <p>(earnings)</p>
                    </div>
                </div>
            </div>
            <div className={styles.CustomGrid}>
                <div className={styles.PriceHistoryCont}>
                    <h1>Price History</h1>
                    <Image src="/img/graph_img_aj.png" alt="" width={540} height={288} />
                </div>
            </div>
        </div>
    </div>
  )
}
