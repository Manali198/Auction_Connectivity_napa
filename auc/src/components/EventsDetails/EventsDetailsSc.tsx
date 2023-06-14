import React from 'react';
import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './EventsDeails.module.scss';
import Image from 'next/image';
import Link from 'next/link';


export default function EventsDetailsSc() {
 
  return (
    <>
    <div className={styles.EventsDeailsBg}>
        <div className={`${styles.container} `}>
          <Container className={`${styles.settingsContainer} asinnerContainer`}>
            <div className={styles.linkpernt}>
              <Link href="events">
                <a>
                  <Image src="/img/arrow_icon.svg" alt="" width="18px" height="12px" /> 
                  Events 
                </a>
                </Link>
            </div>
            <h1 className={styles.settings}>New Years Eve 2024 Party of the Year!</h1>


            <div className={`${styles.CustomGridContainer} `}>
              <div className={styles.firstGridmian}>      
                  <div className={styles.threeitempernt}>
                    <div className={styles.flexItems}>
                        <div className={styles.itemfirst}>
                          <Image src="/img/fntry_fee_img.png" alt="" height="60px" width="60px" />
                          <div className={styles.itemfirstinrtext}>
                            <p>Tickets</p>
                            <h4>5.12</h4>
                          </div>
                        </div>
                        <div className={styles.itemfirst}>
                          <Image src="/img/date_and_time_img.png" alt="" height="60px" width="60px" />
                          <div className={styles.itemfirstinrtext}>
                            <p>Date & Time</p>
                            <h4>Aug 22, 12:31</h4>
                          </div>
                        </div>
                        <div className={styles.itemfirst}>
                          <Image src="/img/locasn_img.png" alt="" height="60px" width="60px" />
                          <div className={styles.itemfirstinrtext}>
                            <p>Location</p>
                            <h4>230 Gerrard, Toronto</h4>
                          </div>
                        </div>
                    </div>
                    <button>Buy Tickets</button>
                  </div>
                 
              </div>
              <div className={styles.secondGrid}> 
                <div className={styles.leftcontentMain}>
                    <div className={styles.aboutcontent}>
                      <h6>About Event</h6>
                      <p>Party people, bring in 2024 with xxx prommotions and have the time of your life.</p>
                    </div>
                    <div className={styles.Perkscontent}>
                      <h4>Perks</h4>
                      <div className={styles.fourBoxmain}>
                        
                        <div className={styles.Perksinnrcontent}>
                          <Image src="/img/perks_img02.png" alt="" height="120px" width="120px" />
                          <p>1 Bottle of Champagne to best dressed</p>
                        </div>
                        <div className={styles.Perksinnrcontent}>
                          <Image src="/img/perks_img04.png" alt="" height="120px" width="120px" />
                          <p>Meet the DJ backstage for the top 10 most discussed posts</p>
                        </div>
                        <div className={styles.Perksinnrcontent}>
                          <Image src="/img/perks_img02.png" alt="" height="120px" width="120px" />
                          <p>Discount tickets and on drinks to our to our first party in 2024</p>
                        </div>
                        <div className={styles.Perksinnrcontent}>
                          <Image src="/img/perks_img04.png" alt="" height="120px" width="120px" />
                          <p>Participate in our livesrtream and get a special shout out</p>  
                        </div>
                      </div>
                    </div>
                  </div>     
              </div>
          </div>

          <div className={`${styles.CustomGridContainer} pedding_none`}>
              <div className={`${styles.firstGridmian} order_pernt`}>      
                <div className={styles.Sponsorscontent}>
                  <h3>Sponsors</h3>
                  <div className={styles.SponsorscontentInnr}>
                    <div className={styles.twoitems}>
                      <Image src="/img/sponsors_img01.png" alt="" height="32px" width="160px" className={styles.sponsors_img}/>
                      <Image src="/img/sponsors_img02.png" alt="" height="32px" width="140px" className={styles.sponsors_img}/>
                    </div>
                    <div className={styles.twoitems}>
                      <Image src="/img/sponsors_img03.png" alt="" height="24px" width="219px" className={styles.sponsors_img}/>
                      <Image src="/img/sponsors_img04.png" alt="" height="32px" width="167px" className={styles.sponsors_img}/>
                    </div>
                  </div>
                </div>
                <div className={styles.tagscontentMain}>
                  <div className={styles.tagscontent}>
                    <h4>Tags</h4>
                      <div className={styles.tagscontentinnr}>
                        <p>NewYears2024</p>
                        <p>Party</p>
                        <p>Event</p> 
                        <p>Thailand</p>
                    {/* </div>
                    <div className={styles.tagscontentinnr}> */}
                        {/* <p>Toronto</p>
                        <p>Beginner</p>
                        <p>Blockchain</p> */}
                    {/* </div>
                    <div className={styles.tagscontentinnr}> */}
                        {/* <p>Crypto</p>
                        <p>Сurrency</p>
                        <p>World</p> */}
                    </div>
                  </div>
                  <div className={styles.ShareEventMain}>
                    <h1>Share Event</h1>
                    <div className={styles.twobuttonPernt}>
                      <a href='#'><Image src="/img/twitter_icon.svg" alt="" height="16px" width="16px" className={styles.aaaa}/> On Twitter</a>
                      <a href='#'><Image src="/img/facebook_icon.svg" alt="" height="16px" width="16px" className={styles.aaaa}/> On Facebook</a>
                  </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.secondGrid} Border_none`}> 
                <div className={styles.applyEvent}>
                  <h3>Event Details</h3>
                </div>
                <div className={styles.applyEventpernt}>
                  <h1>1</h1>
                  <div className={styles.textPerntonly}>
                    <p>Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six.</p>
                  </div>
                </div>
                <div className={styles.applyEventpernt}>
                  <h1>2</h1>
                  <div className={styles.textPerntonly}>
                    <p>She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between.</p>
                  </div>
                </div>
                <div className={styles.applyEventpernt}>
                  <h1>3</h1>
                  <div className={styles.textPerntonly}>
                    <p>Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty.</p>
                  </div>
                </div>
                <div className={styles.applyEventpernt}>
                  <h1>4</h1>
                  <div className={styles.textPerntonly}>
                    <p>On assistance he cultivated considered frequently. Person how having tended direct own day man.</p>
                  </div>
                </div>
              </div>
          </div>
            
          </Container>
          <div>
            <hr />
            <Footer footerIconShow={false} />
          </div>
        </div>
    </div>
    
    </>
  )
}
