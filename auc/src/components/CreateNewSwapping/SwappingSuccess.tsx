import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './SwappingSuccess.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function SwappingSuccess() {
   
  return (
    <>
        <div className={styles.SwappingSuccessMain}>
            <div className={styles.Successin}>
                <Image
                    src="/img/success.png"
                    height="120px"
                    width="120px"
                    alt=""
                    className=""
                />
                <h1>Swapping Completed Successfully!</h1>
                <div className={styles.succesBtnThree}>
                    <button className={styles.SuccesFrstBtn}>
                        <Image
                            src="/img/twitter_success.png"
                            height="16px"
                            width="16px"
                            alt=""
                            className=""
                        />
                            Share on Twitter
                    </button>
                    <button className={styles.SuccesScndBtn}>
                        <Image
                            src="/img/napasuccess.png"
                            height="14px"
                            width="16px"
                            alt=""
                            className=""
                        />
                           Share on Napa Society
                    </button>
                    <button className={styles.SuccesScndBtn}>
                        Share on the NAPA Popular Feed
                    </button>
                    <Link href="/swapping">Return to Swapping List</Link>
                </div>
            </div>

        </div>
    </>
  )
}
