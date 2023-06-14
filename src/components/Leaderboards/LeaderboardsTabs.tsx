import React, { useEffect, useState } from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './LeaderboardsTabs.module.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LeaderboardsTab1 from './LeaderboardsTab1';
import LeaderboardsTab2 from './LeaderboardsTab2';
import LeaderboardsTab3 from './LeaderboardsTab3';
// import LeaderboardsTab4 from './LeaderboardsTab4';
import { MostViewedPosts } from '@/types/post';
import { getMostViewedPosts } from '@/services/PostApi';
import { SOCIAL_ART_WEBSOCKET_URL } from '@/constants/url';

export default function LeaderboardsTabs() {
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  const [mostLikedPosts, setMostLikedPosts] = useState<
    MostViewedPosts[] | null
  >(null);
  const [mostCommentedPosts, setMostCommentedPosts] = useState<
    MostViewedPosts[] | null
  >(null);
  const [mostAwardedPosts, setMostAwardedPosts] = useState<
    MostViewedPosts[] | null
  >(null);
  const [loading, setLoading] = useState(false);

  const handleGetMostViewed = async () => {
    setLoading(true);
    const { data }: any = await getMostViewedPosts();
    setMostLikedPosts(data?.data?.likedPosts || []);
    setMostCommentedPosts(data?.data?.discussedPosts || []);
    setMostAwardedPosts(data?.data?.awardedPosts || []);
    setLoading(false);
  };

  useEffect(() => {
    handleGetMostViewed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'most-liked-posts') {
        setMostLikedPosts(response?.posts);
      } else if (response?.event === 'most-discussed-posts') {
        setMostCommentedPosts(response?.posts);
      } else if (response?.event === 'most-awarded-posts') {
        setMostAwardedPosts(response?.posts);
      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.LiveStreamTab}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="default_tab mb-30 default_tab_wt_scroll"
        >
          <Tab eventKey="home" title="Most Token Rewards">
            <LeaderboardsTab1
              mostAwardedPosts={mostAwardedPosts}
              loading={loading}
            />
          </Tab>
          <Tab eventKey="Most Liked Posts" title="Most Liked Posts">
            <LeaderboardsTab2
              mostLikedPosts={mostLikedPosts}
              loading={loading}
            />
          </Tab>
          <Tab eventKey="Most Discussed" title="Most Discussed">
            <LeaderboardsTab3
              mostCommentedPosts={mostCommentedPosts}
              loading={loading}
            />
          </Tab>
          {/* <Tab eventKey="Hot Sprint SFNTs" title="Hot Sprint SNFTs">
            <LeaderboardsTab4 />
          </Tab> */}
        </Tabs>
      </div>
    </>
  );
}
