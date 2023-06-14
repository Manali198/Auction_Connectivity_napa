import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './RankingsSc.module.scss';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TopRanking from './TopRanking';
import WatchlistRanking from './WatchlistRanking';

export default function RankingsSc() {
  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <h1 className={styles.settings}>Rankings</h1>
        <Tabs
          defaultActiveKey="Top"
          id="uncontrolled-tab-example"
          className="default_tab mb-30 default_tab_wt_scroll"
        >
          <Tab eventKey="Top" title="Top">
            <TopRanking />
          </Tab>
          <Tab eventKey="Trending" title="Trending">
            <TopRanking />
          </Tab>
          <Tab eventKey="Watchlist" title="Watchlist">
            <WatchlistRanking />
          </Tab>
        </Tabs>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
