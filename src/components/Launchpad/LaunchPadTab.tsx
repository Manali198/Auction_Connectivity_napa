import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './LaunchPadTab.module.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LaunchPadTabOne from './LaunchPadTabOne';
import LaunchPadTabThree from './LaunchPadTabThree';
import LaunchPadTabTwo from './LaunchPadTabTwo';


export default function LaunchPadTab() {
   
  return (
    <>
          
        <div className={styles.LaunchPadTab}>
          <h5 className={styles.Deflt_h5}>NFT Projects</h5>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="default_tab mb-30 default_tab_wt_scroll"
          >
            <Tab eventKey="home" title="Completed">
                <LaunchPadTabOne />
            </Tab>
            <Tab eventKey="Current" title="Current">
              {/* <LaunchPadTabTwo /> */}
              <LaunchPadTabTwo />
            </Tab>
            <Tab eventKey="Upcoming" title="Upcoming">
              <LaunchPadTabThree />
            </Tab>
          </Tabs>
        </div>      
    </>
  )
}
