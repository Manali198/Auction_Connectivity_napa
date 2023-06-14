import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './NftProjectCard.module.scss';
import { NapaIcon } from '../../components/assets';

type Props = {
  backgroundImg?: string;
  userName: string;
  title: string;
  currentBid: string;
  ending: string;
  avatar: string;
};

const NftProjectCard: NextPage<Props> = ({
  userName,
  title,
  currentBid,
  ending,
  avatar,
  backgroundImg,
}) => {
  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundImage: backgroundImg
          ? `${`url(${backgroundImg})`}`
          : `url(/assets/images/nftprojectcard.png)`,
        backgroundSize: backgroundImg && 'cover',
      }}
    >
      <div className={styles.avatarContainer}>
        <img
          src={avatar ? avatar : '/assets/images/img_avatar.png'}
          alt="Avatar"
          className={styles.avatar}
          width={52}
          height={52}
        />
        <span className={styles.username}>{userName}</span>
      </div>
      <div className={styles.cardInfoContainer}>
        <span className={styles.title}>{title}</span>
        <div className={styles.description}>
          <div className={styles.bitContainer}>
            <span className={styles.bit}>Current Bid</span>
            <div className={styles.bitContainerLeftSide}>
              <Image src={NapaIcon} alt="NapaIcon" width={26} height={26} />
              <span className={styles.bitContainerLeftSideText}>
                {currentBid} NAPA
              </span>
            </div>
          </div>
          <div className={styles.bitContainer}>
            <span className={styles.bit}>Ending In</span>
            <div className={styles.bitContainerRightSide}>
              <span className={styles.bitContainerRightSideText}>{ending}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftProjectCard;
