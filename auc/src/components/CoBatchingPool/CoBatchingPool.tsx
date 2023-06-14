import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './CoBatchingPool.module.scss';

import { Avatar, NapaIcon, TimeIcon } from '../assets';

type CoBatchingPoolsCardProps = {};

const CoBatchingPoolsPool: NextPage<CoBatchingPoolsCardProps> = () => {
  return (
    <>
    <div className={`${styles.cardContainer} ${styles.DesktopcardContainer}`}>
      <div className={styles.leftSide}>
        <div className={styles.innerContainer}>
          <Image src="/img/ab_napa_icon_card_01.png" alt="" width={24} height={24} />
          <p>2 ETH</p>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className='btvn_bx_ab'>
          <div className={styles.SpaceBtwnBx}>
            <h2 className={styles.title}>That Which Falls Upwards</h2>
            <button role="button" data-bs-toggle="dropdown" aria-expanded="true">
                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end drpdwn_list drpdwn_list_empty">
                <li>
                    <a>Sell Item</a>
                </li>
                <li>
                    <a>Cancel Pool</a>
                </li>
            </ul>
        </div>
        </div>
        <div className={styles.timeContainer}>
          <Image src={TimeIcon} alt="TimeIcon" width={20} height={20} />
          <span className={styles.time}>Aug 16, 2022  15:30</span>
        </div>
        <div className={styles.amountContainer}>
          <h3 className={styles.amountTitle}>Amount to Contribute</h3>
          <div className={styles.amountInnerContainer}>
            <Image src='/img/ab_napa_eht_ic_card_01.svg' alt="NapaIcon" width={8} height={12} />
            <span className={styles.amount}>0.25 - 2.00</span>
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
               <Image src='/img/ab_napa_eht_ic_card_01.svg' alt="NapaIcon" width={8} height={12} />
               <span>1.24</span>
            </div>
            <div className={styles.innerProgressContainer}>
              <Image src='/img/ab_napa_eht_ic_card_01.svg' alt="NapaIcon" width={8} height={12} />
              <span>2</span>
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

export default CoBatchingPoolsPool;
