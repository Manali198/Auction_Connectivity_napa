import React from 'react';
import styles from './LeaderboardsRankList.module.scss';
import type { NextPage } from 'next';

type ListData = {
  userName: string;
  rank: number;
  img: string;
  count: number;
};

const LeaderboardsRankList: NextPage<ListData> = ({
  userName,
  rank,
  img,
  count,
}) => {
  return (
    <>
      <div className={styles.LdrbrdItems}>
        <div className={styles.LdrbrdItemsRaigt}>
          <h4>{rank}</h4>
          <img src={img} alt="" width={80} height={80} />
          <p>{userName}</p>
        </div>
        <div className={styles.LdrbrdItemsLeft}>
          <h6>{count}</h6>
        </div>
      </div>
    </>
  );
};

export default LeaderboardsRankList;
