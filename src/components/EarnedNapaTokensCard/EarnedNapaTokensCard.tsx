import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './EarnedNapaTokensCard.module.scss';


type ActiveMintedPostsCardProps = {};

const lockDurations = [
  {
    title: 'Lock Start Date',
    date: '12 Mar 2022',
  },
  {
    title: 'Interest Period',
    date: '1 month',
  },
  {
    title: 'Lock Duration',
    date: '2 months',
  },
];

const redeemRewards = [
  {
    title: 'APY',
    value: '9.45%',
  },
  {
    title: 'Daily APY',
    value: '5.4%',
  },
  {
    title: 'Redeem Rewards',
    value: '2.450.00',
  },
];

const EarnedNapaTokensCard: NextPage<ActiveMintedPostsCardProps> = () => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.subtitle}>Amount Locked</h3>
      <div className={styles.amountContainer}>
        <Image src="/img/napa_icon_card.png" alt="" width={56} height={56} />
        <span className={styles.amount}>(tokens earned TD)</span>
        <span className={styles.napa}>NAPA</span>
      </div>
      <div className={styles.lockDurationContainer}>
        {lockDurations.map((item, index) => {
          return (
            <div key={index} className={styles.lockDurationInnerContainer}>
              <span className={styles.lockDuratspan}>{item.title}</span>
              <span>{item.date}</span>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 0 }} className={styles.lockDurationContainer}>
        {redeemRewards.map((item, index) => {
          return (
            <div key={index} className={styles.lockDurationInnerContainer}>
              <span className={styles.lockDuratspan}>{item.title}</span>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className={styles.MobileGrid}>
        {lockDurations.map((item, index) => {
            return (
              <div key={index} className={styles.lockDurationInnerContainer}>
                <span className={styles.lockDuratspan}>{item.title}</span>
                <span>{item.date}</span>
              </div>
            );
          })}
          {redeemRewards.map((item, index) => {
          return (
            <div key={index} className={styles.lockDurationInnerContainer}>
              <span className={styles.lockDuratspan}>{item.title}</span>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EarnedNapaTokensCard;
