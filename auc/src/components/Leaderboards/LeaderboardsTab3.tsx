import React from 'react';
import styles from './Leaderboards.module.scss';
import LeaderboardsRankCards from './LeaderboardsRankCards';
import LeaderboardsSliderComponent from './LeaderboardsSlider';
import LeaderboardsRankList from './LeaderboardsRankList';
import { MostViewedPosts } from '../../types/post';
import { FadeLoader } from 'react-spinners';
import { NextPage } from 'next';

type LeaderboardsTab3Props = {
  mostCommentedPosts: MostViewedPosts[] | null;
  loading: boolean;
};

const LeaderboardsTab3: NextPage<LeaderboardsTab3Props> = ({
  mostCommentedPosts,
  loading,
}) => {
  return (
    <>
      <div className={styles.cardBoxContainer}>
        {loading || mostCommentedPosts?.length == 0 ? (
          <div className={styles.loading}>
            {loading ? <FadeLoader color="#ffffff" /> : <h3>No Post Found</h3>}
          </div>
        ) : (
          <>
            <div className={styles.CardBox}>
              <div id="nft-marketplace" className={styles.SliderMain}>
                <LeaderboardsSliderComponent
                  dataLength={mostCommentedPosts?.length}
                >
                  {mostCommentedPosts?.map((val, index) => {
                    return (
                      <>
                        <LeaderboardsRankCards
                          image={val.thumbnail}
                          itemName={'comments'}
                          itemAmount={val.comments || 0}
                          rank={index + 1}
                          userName={val.userName}
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
                  {mostCommentedPosts?.map((val, index) => {
                    return (
                      <>
                        <LeaderboardsRankList
                          img={val.thumbnail}
                          rank={index + 1}
                          userName={val.userName}
                          count={val.comments || 0}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LeaderboardsTab3;
