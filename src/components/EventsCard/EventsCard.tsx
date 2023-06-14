import type { NextPage } from 'next';
import styles from './EventsCard.module.scss';

type EventsCardProps = {
  title: string;
  date: string;
  backgroundImage: string;
  time?: string;
};

const EventsCard: NextPage<EventsCardProps> = ({
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

export default EventsCard;
