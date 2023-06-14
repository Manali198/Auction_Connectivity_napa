import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import 'react-datepicker/dist/react-datepicker.css';
import ReactFullpage from '@fullpage/react-fullpage';
import SocialArtSectionWithoutLimit from '../components/SocialArtSectionWithoutLimit/SocialArtSectionWithoutLimit';
// import NapaSociety from '../components/NapaSocietySection/NapaSocietySection';
// import SocialArtSection from '../components/SocialArtSection/SocialArtSection';
// import NftMarketplaceSection from '../components/NftMarketplaceSection/NftMarketplaceSection';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';

const Index: NextPage = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.body.classList.add('landing_page');
    return () => {
      document.body.classList.remove('landing_page');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.body.classList.add('scroll-up');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = (isFirst: boolean) => {
    const body = document.body;
    const scrollUp = 'scroll-up';
    const scrollDownLanding = 'scroll-down-landing';

    if (!isFirst && !body.classList.contains(scrollDownLanding)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDownLanding);
    } else if (isFirst && body.classList.contains(scrollDownLanding)) {
      // up
      body.classList.remove(scrollDownLanding);
      body.classList.add(scrollUp);
    }
  };

  const openMenu = () => {
    setIsMenu(true);
  };

  return (
    <>
      <Head>
        <title>NAPA Society Staging Site</title>
        <meta name="description" content="NAPA Demo Environment" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="on"
          data-website-uuid="e3fcac01-30e6-4cca-b927-3fd22eee51fe"
        ></script>
      </Head>
      <div className="hm_sc">
        <>
          <Header
            openMenu={openMenu}
            setIsMenu={setIsMenu}
            isMenu={isMenu}
            setShowSearch={setShowSearch}
          />
          {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
        {/* @ts-ignore */}
        <ReactFullpage
          navigation
          onLeave={(_, destination) => {
            handleScroll(destination.isFirst);
          }}
          scrollingSpeed={1000} /* Options here */
          render={() => {
            return (
              <div>
                <div className="section">
                  <SocialArtSectionWithoutLimit />
                </div>
                {/* <div className="section rspnv_none">
                    <NapaSociety />
                  </div>
                  <div className="section rspnv_none">
                    <SocialArtSection />
                  </div>
                  <div className="section no-overflow rspnv_none">
                    <NftMarketplaceSection />
                  </div> */}
              </div>
            );
          }}
        />
      </div>
    </>
  );
};

export default Index;
