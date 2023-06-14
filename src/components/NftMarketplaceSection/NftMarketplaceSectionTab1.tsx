import NftProjectCard from '../NftProjectCard/NftProjectCard';
import React from 'react';
import styles from './NftMarketplaceSection.module.scss';
import LeaderboardsSliderComponent from '../Leaderboards/LeaderboardsSlider';
import { Avatar } from '../../components/assets';
import HighlightButton from '../HighlightButton/HighlightButton';

const NftMarketplaceSectionTab1 = () => {
  const data = [
    {
      background: '',
      userName: '@TomBradley',
      title: 'Illusions of Darkness Illusions of Darkness',
      currentBid: '200',
      ending: '10',
      avatar: Avatar,
    },
    {
      background: '',
      userName: '@TomBradley',
      title: 'Illusions of Darkness',
      currentBid: '200',
      ending: '10',
      avatar: Avatar,
    },
    {
      background: '',
      userName: '@TomBradley',
      title: 'Illusions of Darkness',
      currentBid: '200',
      ending: '10',
      avatar: Avatar,
    },
    {
      background: '',
      userName: '@TomBradley',
      title: 'Illusions of Darkness',
      currentBid: '200',
      ending: '10',
      avatar: Avatar,
    },
  ];
  return (
    <>
      <div id="sliderComponent">
      <div className={styles.btn}>
            <HighlightButton
              title="Explore All NFT Projects"
              link="/marketplace?redirect=NFTs"
              arrow={true}
              as='/marketplace'
            />
          </div>
        <LeaderboardsSliderComponent dataLength={data.length}>
          {data.map((val) => {
            return (
              <div key={1} className={styles.projectCardContainer}>
                <NftProjectCard
                  backgroundImg={''}
                  avatar={val.avatar}
                  ending={val.ending}
                  currentBid={val.currentBid}
                  userName={val.userName}
                  title={val.title}
                />
              </div>
            );
          })}
        </LeaderboardsSliderComponent>
      </div>
    </>
  );
};

export default NftMarketplaceSectionTab1;
