import type { NextPage } from 'next';
import { useState } from 'react';
import Container from '../../Layout/Container/Container';
import styles from './LeaderboardSection.module.scss';

import Tab from '../Tab/Tab';
import SliderComponent from '../Slider/Slider';
import HighlightButton from '../HighlightButton/HighlightButton';
import LeaderboardCard from '../LeaderboardCard/LeaderboardCard';
//import image1 from .... (asset location in S3 bucket) ASSETS SHOULD BE IMPORTED AND DEFINED, DO NOT HARDCODE ASSETS PLEASE

type LeaderboardSection = {};

const LeaderboardTab = [
  {
    title: 'Most Viewed Post',
    value: 'Post',
  },
  {
    title: 'Most Token Rewards',
    value: 'Rewards',
  },
  {
    title: 'Most Discussed',
    value: 'Discussed',
  },
  {
    title: 'Hot Sprints',
    value: 'Sprints',
  },
];

const LeaderboardCards = [
  {
    likeCount: 8716,
    count: '01',
    title: 'Dwight Holland',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
  {
    likeCount: 5369,
    count: '02',
    title: 'Catherine Patton',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
  {
    likeCount: 4672,
    count: '03',
    title: 'Marta Thornton',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
  {
    likeCount: 3861,
    count: '04',
    title: 'Madeline Keller',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
  {
    likeCount: 3861,
    count: '04',
    title: 'Madeline Keller',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
  {
    likeCount: 3861,
    count: '04',
    title: 'Madeline Keller',
    backgroundImage: 'url(/assets/images/dwight-holland.png)',
  },
];

const LeaderboardSection: NextPage<LeaderboardSection> = () => {
  const [tab, setTab] = useState('Post');

  return (
    <div className={styles.backgroundImage} id="leaderboard">
      <Container className={`${styles.leaderboardContainer} asinnerContainer`}>
        <div>
          <h2 className={styles.leaderboard}>Leaderboards</h2>
          <div className={styles.tabsContainer}>
            <div className={styles.tabsInnerContainer}>
              <ul className={styles.tab}>
                {LeaderboardTab.map(({ title, value }, index) => (
                  <Tab
                    value={value}
                    key={index}
                    setTab={setTab}
                    title={title}
                    tab={tab}
                  />
                ))}
              </ul>
            </div>
            <HighlightButton title="Explore All Projects" link="" />
          </div>
        </div>

        <SliderComponent centerMode={false} slidesToShow={4}>
          {LeaderboardCards.map(
            ({ likeCount, count, title, backgroundImage }) => {
              return (
                <div key={1} className={styles.projectCardContainer}>
                  <LeaderboardCard
                    likeCount={likeCount}
                    count={count}
                    title={title}
                    backgroundImage={backgroundImage}
                  />
                </div>
              );
            }
          )}
        </SliderComponent>
      </Container>
    </div>
  );
};

export default LeaderboardSection;
