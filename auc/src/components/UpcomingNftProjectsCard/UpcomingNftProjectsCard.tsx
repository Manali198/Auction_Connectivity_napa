import type { NextPage } from 'next';
import styles from './UpcomingNftsProjectsCard.module.scss';

type UpcomingNftProjectsCardProps = {
  title: string;
  subTitle: string;
  backgroundImage: string;
  time?: string;
};

const UpcomingNftProjectsCard: NextPage<UpcomingNftProjectsCardProps> = ({
  subTitle,
  title,
  backgroundImage,
  time,
}) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundImage: backgroundImage }}
    >
      <div className={styles.time}>{time && time}</div>
      <div className={styles.cardInfo}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>{subTitle}</p>
      </div>
    </div>
  );
};

export default UpcomingNftProjectsCard;
