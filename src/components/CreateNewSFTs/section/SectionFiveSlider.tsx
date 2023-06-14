import React from 'react'
import styles from './SectionFiveSlider.module.scss';
import SliderComponent from '../../Slider/Slider';
import SliderCard from './SliderCard';
import Link from 'next/link';

export default function SectionFiveSlider() {
  return (
    
    <div className={styles.SectionFive}>
        <div className={styles.SliderUpCont}>
            <h2>More from this Collection</h2>
            <Link href="/projects"><a>View Collection</a></Link>
        </div>
        <div className={styles.NftContainer}>
          <div id="NftsliderComponent">
            <SliderComponent centerMode={false} slidesToShow={6}>
              {Array.from({ length: 8 }, (_, index) => {
                if (index == 0 || index == 3) {
                  var backgroundImage = '/assets/images/nftprojectcard.png';
                } else if (index == 1 || index == 4) {
                  var backgroundImage = '/assets/images/nft1.png';
                } else {
                  var backgroundImage = '/assets/images/nft2.jpg';
                }
                return (
                  <div key={1} className={styles.projectCardContainer}>
                    <SliderCard backgroundImage={backgroundImage} />
                  </div>
                );
              })}
            </SliderComponent>
          </div>
        </div>
        
    </div>
  )
}
