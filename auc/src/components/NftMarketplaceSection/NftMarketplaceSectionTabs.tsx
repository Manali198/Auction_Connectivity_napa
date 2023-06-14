import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NftMarketplaceSectionTab1 from './NftMarketplaceSectionTab1';
import NftMarketplaceSectionTab2 from './NftMarketplaceSectionTab2';
import NftMarketplaceSectionTab3 from './NftMarketplaceSectionTab3';

export default function NftMarketplaceSectionTabs() {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="default_tab mb-30 default_tab_wt_scroll"
      >
        <Tab
          eventKey="home"
          title="NFT Projects
"
        >
          <NftMarketplaceSectionTab1 />
        </Tab>
        <Tab
          eventKey="Current"
          title="
Social Art Minted SNFT"
        >
          <NftMarketplaceSectionTab2 />
        </Tab>
        <Tab
          eventKey="Upcoming"
          title="
NFT and SNFT Rankings"
        >
          <NftMarketplaceSectionTab3 />
        </Tab>
      </Tabs>
    </>
  );
}
