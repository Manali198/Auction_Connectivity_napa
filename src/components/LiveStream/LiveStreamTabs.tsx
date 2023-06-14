import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './LiveStreamTabs.module.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LiveStreamTab1 from './LiveStreamTab1';

export default function LiveStreamTabs() {
  return (
    <>
      <div className={styles.LiveStreamTab}>
        <h5 className={styles.Deflt_h5}>Streams</h5>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="default_tab mb-30 default_tab_wt_scroll"
        >
          <Tab eventKey="home" title="Current">
            <LiveStreamTab1 />
          </Tab>
          <Tab eventKey="Current" title="Upcoming">
          <LiveStreamTab1 />
          </Tab>
          <Tab eventKey="Upcoming" title="Previous">
          <LiveStreamTab1 />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
