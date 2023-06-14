import type { NextPage } from 'next';
import styles from './LeaderboardCard.module.scss';

type LeaderboardCardProps = {
likeCount: number,
count: string,
title: string
 backgroundImage: string 
}

const LeaderboardCard: NextPage<LeaderboardCardProps> = ({ likeCount, count, title, backgroundImage }) => {
  return (
    <div
      className={styles.cardContainer}
     style={{ backgroundImage: backgroundImage }}
    >
        <div className={styles.likesContainer}>
            <span className={styles.likesCount}>{likeCount}</span>
            <span className={styles.likes}>likes</span>
        </div>
        <div className={styles.titleContainer}>
            <span className={styles.count}>{count}</span>
            <span className={styles.title}>{title}</span>
        </div>
    </div>
  );
};

export default LeaderboardCard;
