import React from 'react';
import styles from './Leaderboards.module.scss';
import LeaderboardsRankCards from './LeaderboardsRankCards';
import LeaderboardsSliderComponent from './LeaderboardsSlider';
import LeaderboardsRankList from './LeaderboardsRankList';

const LeaderboardsTab4 = () => {
  const Data = [
    {
      img: '/img/letherbord_ic02.png',
      name: 'Catherine Patton',
      rank: 1,
      item: 'like',
      itemA: 5369,
    },
    {
      img: '/img/letherbord_ic02.png',
      name: 'Catherine Patton',
      rank: 2,
      item: 'like',
      itemA: 5369,
    },
    {
      img: '/img/letherbord_ic02.png',
      name: 'Catherine Patton',
      rank: 3,
      item: 'like',
      itemA: 5369,
    },
    {
      img: '/img/letherbord_ic02.png',
      name: 'Catherine Patton',
      rank: 4,
      item: 'like',
      itemA: 5369,
    },
  ];
  return (
    <>
      <div className={styles.cardBoxContainer}>
        <div className={styles.CardBox}>
          <div id="nft-marketplace" className={styles.SliderMain}>
            <LeaderboardsSliderComponent dataLength={Data.length}>
              {Data.map((val) => {
                return (
                  <>
                    <LeaderboardsRankCards
                      image={val.img}
                      itemName={val.item}
                      itemAmount={val.itemA}
                      rank={val.rank}
                      userName={val.name}
                    />
                  </>
                );
              })}
            </LeaderboardsSliderComponent>
          </div>
        </div>
        <div className={styles.LdrbrdListMain}>
          <div className={styles.LdrbrdListOverlay}>
            <div className={styles.LdrbrdList}>
            {Data.map((val) => {
                return (
                  <>
                    <LeaderboardsRankList 
                      img={val.img}
                      rank={val.rank}
                      userName={val.name}
                      count={val.rank}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardsTab4;
