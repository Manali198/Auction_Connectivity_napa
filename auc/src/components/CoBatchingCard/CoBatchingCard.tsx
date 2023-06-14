import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './CoBatchingCard.module.scss';

import { Avatar, NapaIcon, TimeIcon } from '../assets';

type CoBatchingPoolsCardProps = {};

const CoBatchingPoolsCard: NextPage<CoBatchingPoolsCardProps> = () => {
  return (
    <>
    <div className={`${styles.cardContainer} ${styles.DesktopcardContainer}`}>
      <div className={styles.leftSide}>
        <div className={styles.innerContainer}>
          <Image src="/img/napa_icon_card.png" alt="" width={24} height={24} />
          <p>20 NAPA</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>Illusions Darkness</h2>
        <div className={styles.timeContainer}>
          <Image src={TimeIcon} alt="TimeIcon" width={20} height={20} />
          <span className={styles.time}>Jul 28, 2022 19:00</span>
        </div>
        <div className={styles.amountContainer}>
          <h3 className={styles.amountTitle}>Amount to Contribute</h3>
          <div className={styles.amountInnerContainer}>
            <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
            <span className={styles.amount}>0.25 - 3.00</span>
          </div>
        </div>
        <div className={styles.users}>
          <Image src={Avatar} alt="Avatar" width={32} height={32} />
          <Image
            style={{ marginLeft: '-0.2rem !important' }}
            src={Avatar}
            alt="Avatar"
            width={32}
            height={32}
          />
          <Image
            style={{ marginLeft: '-0.2rem !important' }}
            src={Avatar}
            alt="Avatar"
            width={32}
            height={32}
          />
          <Image
            style={{ marginLeft: '-0.2rem !important  ' }}
            src={Avatar}
            alt="Avatar"
            width={32}
            height={32}
          />
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.innerProgressParentContainer}>
            <div className={styles.innerProgressContainer}>
              <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
              <span>14.02</span>
            </div>
            <div className={styles.innerProgressContainer}>
              <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
              <span>14.02</span>
            </div>
          </div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBarParent}>
              <div className={styles.progressBarChild}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.MobileCard}>
        <div className={styles.MobileCardTop}>
          <div className={styles.leftSide}>
            <div className={styles.innerContainer}>
              <Image src="/img/napa_icon_card.png" alt="" width={24} height={24} />
              <p>20</p>
            </div>
          </div>
          <div className={styles.rightSide}>
          <h2 className={styles.title}>Illusions Darkness</h2>
          <div className={styles.timeContainer}>
            <Image src={TimeIcon} alt="TimeIcon" width={20} height={20} />
            <span className={styles.time}>Jul 28, 2022 19:00</span>
          </div>
          <div className={styles.amountContainer}>
            <h3 className={styles.amountTitle}>Amount to Contribute</h3>
            <div className={styles.amountInnerContainer}>
              <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
              <span className={styles.amount}>0.25 - 3.00</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className={styles.MobileCardbottom}>
        <div className={styles.users}>
            <Image src={Avatar} alt="Avatar" width={32} height={32} />
            <Image
              style={{ marginLeft: '-0.2rem !important' }}
              src={Avatar}
              alt="Avatar"
              width={32}
              height={32}
            />
            <Image
              style={{ marginLeft: '-0.2rem !important' }}
              src={Avatar}
              alt="Avatar"
              width={32}
              height={32}
            />
            <Image
              style={{ marginLeft: '-0.2rem !important  ' }}
              src={Avatar}
              alt="Avatar"
              width={32}
              height={32}
            />
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.innerProgressParentContainer}>
              <div className={styles.innerProgressContainer}>
                <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
                <span>14.02</span>
              </div>
              <div className={styles.innerProgressContainer}>
                <Image src={NapaIcon} alt="NapaIcon" width={13} height={10} />
                <span>14.02</span>
              </div>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBarParent}>
                <div className={styles.progressBarChild}></div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default CoBatchingPoolsCard;
