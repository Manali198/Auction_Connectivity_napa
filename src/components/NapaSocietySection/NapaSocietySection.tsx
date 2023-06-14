import type { NextPage } from 'next';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

import styles from './NapaSocietySection.module.scss';
import Container from '../../Layout/Container/Container';
import HighlightButton from '../HighlightButton/HighlightButton';
import { LeftWhiteArrowIcon, RightWhiteArrowIcon } from '../assets';
import { MostViewedPosts } from '../../types/post';
import { getMostViewedPosts } from '../../services/PostApi';
import { FadeLoader } from 'react-spinners';
import { getRecentTrendings } from '../../services/TrendingApi';
import { RecentTrendings } from '../../types/trending';
import { RecentEvents } from '../../types/event';
import moment from 'moment';
import { getRecentEvents } from '../../services/EventApi';

const NapaSociety: NextPage = () => {
  const [slider, setSlider] = useState(1);
  const [mostLikedPosts, setMostLikedPosts] = useState<
    MostViewedPosts[] | null
  >(null);
  const [trendings, setTrendings] = useState<RecentTrendings[] | null>(null);
  const [events, setEvents] = useState<RecentEvents[] | null>(null);
  const [getLikedPostsLoading, setLikedPostsLoading] = useState(false);
  const [trendingsLoading, setTrendingsLoading] = useState(false);
  const [eventsLoading, setEventsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setSlider((prevCount) => (prevCount > 2 ? 1 : prevCount + 1)),
      5000
    );
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIncrement = () => {
    if (slider > 2) {
      setSlider(1);
      return;
    }
    setSlider(slider + 1);
  };

  const handleDecrement = () => {
    if (slider < 2) {
      setSlider(3);
      return;
    }
    setSlider(slider - 1);
  };

  const handleGetPosts = async () => {
    setLikedPostsLoading(true);
    const { data }: any = await getMostViewedPosts();
    setMostLikedPosts(data?.data?.likedPosts || []);
    setLikedPostsLoading(false);
  };

  const handleGetRecentTrendings = async () => {
    setTrendingsLoading(true);
    const { data }: any = await getRecentTrendings();
    setTrendings(data?.data || []);
    setTrendingsLoading(false);
  };

  const handleGetRecentEvents = async () => {
    setEventsLoading(true);
    const { data }: any = await getRecentEvents();
    setEvents(data?.data || []);
    setEventsLoading(false);
  };

  useEffect(() => {
    handleGetPosts();
    handleGetRecentTrendings();
    handleGetRecentEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="napa-society" className={styles.backgroundImage}>
      {/* <Steper steps={2} top={5} /> */}
      <Container className={`${styles.societyContainer} asinnerContainer`}>
        <div className={styles.societyContainerBody}>
          <div className={styles.innerSocietyContainer}>
            <h1 className={styles.headingNapa}>NAPA</h1>
            <h1 className={styles.headingSociety}>Society</h1>
            <p className={styles.societyLeftDescription}>
              Join NAPA Society and turn your social media into{' '}
              <strong>Social Art! </strong>
              <br></br>
              <br></br>Mint your posts in our social media app into SNFTs to
              earn NAPA tokens to buy and sell NFTs and SNFTs in the largest
              marketplace in the world!
            </p>
          </div>
          <div className={styles.innerSocietyContainerRightSide}>
            <div className={styles.slider}>
              <div className={styles.sliderRightSide}>
                <div className={styles.sliderContainer}>
                  <div className={styles.sliderText}>
                    <p className={styles.sliderCounterText}>0{slider}</p>
                    <p className={styles.sliderSlashtext}>/</p>
                    <p className={styles.sliderSlashtext}>03</p>
                  </div>
                  <div className={styles.sliderArrows}>
                    <div onClick={handleDecrement}>
                      <Image
                        src={LeftWhiteArrowIcon}
                        style={{ cursor: 'pointer' }}
                        width={14}
                        height={26}
                        alt="arrow left"
                      />
                    </div>
                    <div onClick={handleIncrement}>
                      <Image
                        src={RightWhiteArrowIcon}
                        style={{ cursor: 'pointer' }}
                        width={14}
                        height={26}
                        alt="arrow right"
                      />
                    </div>
                  </div>
                </div>
                {slider === 1 ? (
                  <h3 className={styles.community}>Trending</h3>
                ) : slider === 2 ? (
                  <h3 className={styles.community}>Leaders</h3>
                ) : (
                  <h3 className={styles.community}>Events</h3>
                )}
              </div>
            </div>
            {slider === 1 ? (
              <div>
                <h6 className={styles.description}>
                  {/* <strong>// Insert Mini Trending Window //</strong> */}
                </h6>
                <div className={styles.trend_row}>
                  <ul>
                    {trendingsLoading || trendings?.length == 0 ? (
                      <div className={styles.postNotFound}>
                        {trendingsLoading ? (
                          <FadeLoader color="#ffffff" />
                        ) : (
                          <h4>No Tending Found</h4>
                        )}
                      </div>
                    ) : (
                      trendings?.slice(0, 4).map((trending, index) => {
                        return (
                          <li key={index}>
                            <img
                              src={
                                trending.userProfilePic
                                  ? trending.userProfilePic
                                  : '/assets/images/img_avatar.png'
                              }
                              alt=""
                            ></img>
                            <div>
                              <p>{moment(trending.updatedAt).format('ll')}</p>
                              <h4>{trending.articleTitle}</h4>
                            </div>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
                <HighlightButton
                  title="Get Updates"
                  link="/trending"
                  arrow={true}
                />
              </div>
            ) : slider === 2 ? (
              <div>
                <h6 className={styles.description}>
                  <strong>{/* // Insert Mini Leaders List// */}</strong>
                </h6>
                <div className={styles.leaders_row}>
                  <ul>
                    {getLikedPostsLoading ? (
                      <div className={styles.postNotFound}>
                        <FadeLoader color="#ffffff" />
                      </div>
                    ) : mostLikedPosts?.length ? (
                      mostLikedPosts?.slice(0, 4).map((post, index) => {
                        return (
                          <li key={post.postId}>
                            <img
                              src={`${
                                post.thumbnail
                                  ? post.thumbnail
                                  : 'assets/images/leaders1.jpg'
                              }`}
                              alt="thumbnail"
                            ></img>
                            <div>
                              <p>
                                0{index + 1}
                                <strong>
                                  <i>{post.likes}</i> <u>likes</u>
                                </strong>
                              </p>
                              <h4>{post.userName}</h4>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <div className={styles.postNotFound}>
                        <h4>No Post Found</h4>
                      </div>
                    )}
                  </ul>
                </div>
                <HighlightButton
                  title="Who is Leading"
                  link="/leaderboards"
                  arrow={true}
                />
              </div>
            ) : (
              <div>
                <h6 className={styles.description}>
                  <strong>{/* // Display Next Event Image // */}</strong>
                </h6>
                <div className={styles.trend_row}>
                  <ul>
                    {eventsLoading || events?.length == 0 ? (
                      <div className={styles.postNotFound}>
                        {eventsLoading ? (
                          <FadeLoader color="#ffffff" />
                        ) : (
                          <h4>No Event Found</h4>
                        )}
                      </div>
                    ) : (
                      events?.slice(0, 4).map((event, index) => {
                        return (
                          <li key={index}>
                            <img
                              src={
                                event.eventImageBanner ||
                                event.eventImageOne ||
                                event.eventImageTwo
                              }
                              alt="eventImage"
                            ></img>
                            <div>
                              <p>{moment(event.updatedAt).format('lll')}</p>
                              <h4>{event.eventTitle}</h4>
                            </div>
                          </li>
                        );
                      })
                    )}
                  </ul>
                </div>
                <HighlightButton
                  title="More Events"
                  link="/events"
                  arrow={true}
                />
              </div>
            )}
          </div>
        </div>
        {/* <div className={styles.mousePointer}>
          <Image
            src={MouseIcon}
            onClick={() => scrollToNextSection('social-section-art')}
            width={50}
            height={50}
            alt="mouse"
          />
        </div> */}
      </Container>
    </div>
  );
};

export default NapaSociety;
