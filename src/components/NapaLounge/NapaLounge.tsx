import { useCallback, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Container from '../../Layout/Container/Container';
import styles from './NapaLounge.module.scss';

import { NapaLoungeTab } from '../../typing/typing';
import {
  events,
  tipsAndTutorialsCards,
  upcomingNftProjects,
} from '../../constants/home.constants';

import HighlightButton from '../HighlightButton/HighlightButton';
import TipsAndTutorialsCard from '../TipsAndTutorialsCard/TipsAndTutorialsCard';
import CoBatchingPoolsCard from '../CoBatchingCard/CoBatchingCard';
import UpcomingNftProjectsCard from '../UpcomingNftProjectsCard/UpcomingNftProjectsCard';
import SliderComponent from '../Slider/Slider';
import EventsCard from '../EventsCard/EventsCard';
import ActiveMintedPostsCard from '../ActiveMintedPosts/ActiveMintedPostsCard';
import EarnedNapaTokensCard from '../EarnedNapaTokensCard/EarnedNapaTokensCard';
import Footer from '../Footer/Footer';
import {
  ActiveMintedPostsBackground,
  CoBatchingPoolsBackground,
  EarnedNapaTokensBackground,
  EventsBackground,
  LeftWhiteArrowIcon,
  NapaLoungeDesktopBackground,
  NftProjectsBackground,
  RightWhiteArrowIcon,
} from '../assets';

const TABS = [
  NapaLoungeTab.TIPS_AND_TUTORIALS,
  NapaLoungeTab.CO_BATCHING_POOLS,
  NapaLoungeTab.UPCOMING_NFT_PROJECTS,
  NapaLoungeTab.EVENTS,
  NapaLoungeTab.ACTIVE_MINTED_POSTS,
  NapaLoungeTab.EARNED_NAPA_TOKENS,
];

const TAB_TITLES = {
  [NapaLoungeTab.TIPS_AND_TUTORIALS]: 'Whats Trending',
  [NapaLoungeTab.CO_BATCHING_POOLS]: 'Co-Batching Pools',
  [NapaLoungeTab.UPCOMING_NFT_PROJECTS]: 'Top Ranked Projects',
  [NapaLoungeTab.EVENTS]: 'Events',
  [NapaLoungeTab.ACTIVE_MINTED_POSTS]: 'My Active SNFTs',
  [NapaLoungeTab.EARNED_NAPA_TOKENS]: 'My Earned NAPA Tokens',
};

const NapaLounge: NextPage = () => {
  const [tabs, setTabs] = useState(NapaLoungeTab.TIPS_AND_TUTORIALS);
  const tutorialRef = useRef(null);

  const changeBackgroundHandler = useCallback(() => {
    if (tabs === NapaLoungeTab.TIPS_AND_TUTORIALS) {
      return `url(${NapaLoungeDesktopBackground})`;
    }
    if (tabs === NapaLoungeTab.CO_BATCHING_POOLS) {
      return `url(${CoBatchingPoolsBackground})`;
    }
    if (tabs === NapaLoungeTab.UPCOMING_NFT_PROJECTS) {
      return `url(${NftProjectsBackground})`;
    }
    if (tabs === NapaLoungeTab.EVENTS) {
      return `url(${EventsBackground})`;
    }
    if (tabs === NapaLoungeTab.ACTIVE_MINTED_POSTS) {
      return `url(${ActiveMintedPostsBackground})`;
    }
    return `url(${EarnedNapaTokensBackground})`;
  }, [tabs]);

  const titleHandler = useCallback(() => {
    if (tabs === NapaLoungeTab.TIPS_AND_TUTORIALS) {
      return 'Whats Trending';
    }
    if (tabs === NapaLoungeTab.CO_BATCHING_POOLS) {
      return 'More Pools';
    }
    if (tabs === NapaLoungeTab.UPCOMING_NFT_PROJECTS) {
      return 'More Projects';
    }
    if (tabs === NapaLoungeTab.EVENTS) {
      return 'NAPA Events';
    }
    if (tabs === NapaLoungeTab.ACTIVE_MINTED_POSTS) {
      return 'My Active SNFTs';
    }
    return 'Earned Tokens ';
  }, [tabs]);

  const linkHandler = useCallback(() => {
    if (tabs === NapaLoungeTab.TIPS_AND_TUTORIALS) {
      return 'trending';
    } else if (tabs === NapaLoungeTab.CO_BATCHING_POOLS) {
      return 'co-batching-pools';
    } else if (tabs === NapaLoungeTab.EVENTS) {
      return 'events';
    } else if (tabs === NapaLoungeTab.EARNED_NAPA_TOKENS) {
      return 'earn';
    } else if (tabs === NapaLoungeTab.ACTIVE_MINTED_POSTS) {
      return 'socialart';
    } else if (tabs === NapaLoungeTab.UPCOMING_NFT_PROJECTS) {
      return 'top-nft';
    }

    return '';
  }, [tabs]);

  const tabsHandler = useCallback(
    (tab: NapaLoungeTab) => {
      setTabs(tab);
    },
    [setTabs]
  );

  const previousHandler = useCallback(() => {
    // @ts-ignore
    tutorialRef.current.slickPrev();
  }, [tutorialRef]);

  const nextHandler = useCallback(() => {
    // @ts-ignore
    tutorialRef.current.slickNext();
  }, []);

  return (
    <div
      className={styles.backgroundImage}
      style={{ backgroundImage: changeBackgroundHandler() }}
      id="napa-lounge"
    >
      <Container
        className={`${styles.napaLoungeContainer} asinnerContainer asinnerContainerv2`}
      >
        <h1 className={styles.Napa_scty_h1}>
          <span className={styles.napa}>NAPA</span>
          <span className={styles.lounge}> Society</span>
        </h1>
        <div className={`row col-12 ${styles.napaLoungeBodyContainer}`}>
          <div className={`col-xl-6 col-md-12 rspnsv_order2 ${styles.napaLoungeBody}`}>
            <div className={`row cstm-box col-12 ${styles.leftSideContainer}`}>
              {TABS.map((tab) => (
                <div
                  className={`col-2 col-sm-6 ${styles.boxes} ${
                    tabs === tab ? styles.active : ''
                  }`}
                  onClick={() => tabsHandler(tab)}
                  key={tab}
                >
                  <span className={styles.description}>{TAB_TITLES[tab]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`col-xl-6 col-md-12 ${styles.rightSideContainer}`}>
            <div className={styles.arrowContainer}>
              <Image
                src={LeftWhiteArrowIcon}
                className={styles.leftIcon}
                onClick={previousHandler}
                width={20}
                height={20}
                alt={'left arrow'}
              />
              <Image
                src={RightWhiteArrowIcon}
                className={styles.rightIcon}
                onClick={nextHandler}
                width={20}
                height={20}
                alt="right arrow"
              />
            </div>
            <div className={styles.sliderContainer}>
              {tabs === NapaLoungeTab.TIPS_AND_TUTORIALS ? (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={2}
                  ref={tutorialRef}
                >
                  {tipsAndTutorialsCards.map(
                    ({ title, date, backgroundImage }) => {
                      return (
                        <div key={1} className={styles.projectCardContainer}>
                          <TipsAndTutorialsCard
                            title={title}
                            date={date}
                            backgroundImage={backgroundImage}
                          />
                        </div>
                      );
                    }
                  )}
                </SliderComponent>
              ) : tabs === NapaLoungeTab.CO_BATCHING_POOLS ? (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={1}
                  ref={tutorialRef}
                >
                  {tipsAndTutorialsCards.map(() => {
                    return (
                      <div key={1} className={styles.projectCardContainer}>
                        <CoBatchingPoolsCard />
                      </div>
                    );
                  })}
                </SliderComponent>
              ) : tabs === NapaLoungeTab.UPCOMING_NFT_PROJECTS ? (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={2}
                  ref={tutorialRef}
                >
                  {upcomingNftProjects.map(
                    ({ title, subTitle, backgroundImage, time }) => {
                      return (
                        <div key={1} className={styles.projectCardContainer}>
                          <UpcomingNftProjectsCard
                            title={title}
                            subTitle={subTitle}
                            backgroundImage={backgroundImage}
                            time={time}
                          />
                        </div>
                      );
                    }
                  )}
                </SliderComponent>
              ) : tabs === NapaLoungeTab.EVENTS ? (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={2}
                  ref={tutorialRef}
                >
                  {events.map(({ title, backgroundImage, date }) => {
                    return (
                      <div key={1} className={styles.projectCardContainer}>
                        <EventsCard
                          title={title}
                          date={date}
                          backgroundImage={backgroundImage}
                        />
                      </div>
                    );
                  })}
                </SliderComponent>
              ) : tabs === NapaLoungeTab.ACTIVE_MINTED_POSTS ? (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={1}
                  ref={tutorialRef}
                >
                  {events.map(() => {
                    return (
                      <div key={1} className={styles.projectCardContainer}>
                        <ActiveMintedPostsCard />
                      </div>
                    );
                  })}
                </SliderComponent>
              ) : (
                <SliderComponent
                  centerMode={false}
                  slidesToShow={1}
                  ref={tutorialRef}
                >
                  {events.map(() => {
                    return (
                      <div key={1} className={styles.projectCardContainer}>
                        <EarnedNapaTokensCard />
                      </div>
                    );
                  })}
                </SliderComponent>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <HighlightButton
                title={`${titleHandler()}`}
                link={`${linkHandler()}`}
              />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footerContainer}>
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
};

export default NapaLounge;
