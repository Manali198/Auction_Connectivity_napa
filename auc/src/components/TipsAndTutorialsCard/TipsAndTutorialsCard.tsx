import type { NextPage } from 'next';
import styles from './TipsAndTutorialsCard.module.scss';

type LeaderboardCardProps = {
  title: string;
  date: string;
  backgroundImage: string;
  time?: string;
};

const TipsAndTutorialsCard: NextPage<LeaderboardCardProps> = ({
  date,
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
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default TipsAndTutorialsCard;
