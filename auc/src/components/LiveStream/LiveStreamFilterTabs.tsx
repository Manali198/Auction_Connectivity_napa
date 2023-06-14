import React from 'react';
import styles from './LiveStreamFilterTabs.module.scss';

const LiveStreamFilterTabs = () => {
  const [activeFilterTab, setActiveFilterTab] = React.useState<string>("Tokens");
  let filterTabs: string[] = [
    'NFT',
    'Tokens',
    'Blockchain',
    'Crypto',
    'Games',
    'Trading',
    'Investing',
    'NAPA Coin',
  ];
  return (
    <>
      <div className={styles.btnContainer}>
        {filterTabs.map((tab,index) => {
            return(
                <button key={index} className={`${styles.filterbtn} ${tab == activeFilterTab && styles.filterActive}`} onClick={() => setActiveFilterTab(tab)}>{tab}</button>
             )
        })}
      </div>
    </>
  );
};

export default LiveStreamFilterTabs;
