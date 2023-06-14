import { SnftResponse } from '../../../types/marketplace';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import styles from './SectionTow.module.scss';
import { UsdtYellowBgIcon } from '@/components/assets';
import { payoutsCategoryName } from '../../../utils/snft';

type SectionTowProps = {
  snftDetails: SnftResponse | null;
};

const formatString = (str: string) => {
  if (str) {
    return str.substring(0, 6) + '...' + str.substring(str.length - 6);
  }
  return '';
};

export default function SectionTow({ snftDetails }: SectionTowProps) {
  return (
    <div className={styles.SectionTow}>
      <div className={styles.CustomGridContainer}>
        <div className={styles.CustomGrid}>
          <div className={styles.DetailsCont}>
            <h1>SNFT Details</h1>
            <div className={styles.flexPrntSc02}>
              <h6>NAPA Payouts Category</h6>
              <p>
                {payoutsCategoryName(snftDetails?.payoutsCategory as string)}
              </p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Contract Address</h6>
              <p>{formatString(snftDetails?.SNFTAddress as string)}</p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Original Creator</h6>
              <p>{snftDetails?.generatorName}</p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Collection</h6>
              <p>{snftDetails?.SNFTCollection}</p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Token ID</h6>
              <p>{snftDetails?.tokenId}</p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Token Standard</h6>
              <p>ERC-721</p>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Network</h6>
              <div className={styles.flexNapa}>
                {snftDetails?.currencyType == '0' ? (
                  <Image
                    src="/img/napa_ic_aj.svg"
                    alt=""
                    width={17}
                    height={13}
                  />
                ) : snftDetails?.currencyType == '1' ? (
                  <Image src={UsdtYellowBgIcon} alt="" width={17} height={13} />
                ) : (
                  <Image src={UsdtYellowBgIcon} alt="" width={17} height={13} />
                )}
                <p>
                  {snftDetails?.currencyType == '0'
                    ? 'NAPA'
                    : snftDetails?.currencyType == '1'
                    ? 'USDT'
                    : 'ETH'}
                </p>
              </div>
            </div>
            <div className={styles.flexPrntSc02}>
              <h6>Last Updated</h6>
              <p>
                {moment(snftDetails?.updatedAt).startOf('seconds').fromNow()}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.CustomGrid}>
          <div className={styles.PriceHistoryCont}>
            <h1>Views History</h1>
            <Image
              src="/img/graph_img_aj.png"
              alt=""
              width={540}
              height={288}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
