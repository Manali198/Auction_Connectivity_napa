import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './Search.module.scss';
import Container from '../../Layout/Container/Container';

import { ExitIcon } from '../assets';

type SearchProps = {
  setShowSearch: (show: boolean) => void;
};

const Search: NextPage<SearchProps> = ({ setShowSearch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.search} onClick={() => setShowSearch(false)}>
        <Image src={ExitIcon} width={32} height={32} alt="Exit" />
      </div>
      
      <Container>
        <input
          autoFocus
          className={styles.input}
          placeholder="Search for anything..."
        />
            <div className={styles.OverLayEvent}>
              <div className={styles.SearchInMain}>
                <div className={styles.TutorialBtn}>
                  <button>In Tutorials</button>
                </div>
                <div className={styles.SearchInBx}>
                  <div className={styles.SearchFrst}>
                    <div className={styles.SearchBlockImg}>
                      <Image src="/img/searchblock.png" width={140} height={140} alt="" />
                    </div>
                    <div className={styles.SearchRightBx}>
                      <h1>Why is <span>Blockch</span>ain Important?</h1>
                      <p>Cryptocurrency, <span>blockch</span>ain, NFT: these are all terms that are gradually becoming more and more present in everyday conversations.</p>
                    </div>
                  </div> 
                  <div className={styles.SearchFrst}>
                      <div className={styles.SearchBlockImg}>
                        <Image src="/img/searchblock2.png" width={140} height={140} alt="" />
                      </div>
                      <div className={styles.SearchRightBx}>
                      <h1><span>Blockch</span>ain Tutorial for Beginners.</h1>
                      <p className={styles.DfltP}>Most NFTs are part of the Ethereum <span>blockch</span>ain, a form of cryptocurrency similar to bitcoin or dogecoin. Under Ethereum, NFTs work differently than an ETH coin.</p>
                      </div>
                  </div>
                </div>
                {/* secnd */}
                <div className={styles.EventSc}>
                  <div className={styles.TutorialBtn}>
                    <button>In Events</button>
                  </div>
                  <div className={styles.EventInBx}>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event01.png" width={140} height={140} alt="" />
                      <h1>The Complete Guide for Types of <span>Blockch</span>ain!</h1>
                    </div> 
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event02.png" width={140} height={140} alt="" />
                      <h1>Most NFTs Part of the Ethereum <span>Blockch</span>ain.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event03.png" width={140} height={140} alt="" />
                      <h1>All About <span>Blockch</span>ain and its Features.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event01.png" width={140} height={140} alt="" />
                      <h1>The Complete Guide for Types of <span>Blockch</span>ain!</h1>
                    </div> 
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event02.png" width={140} height={140} alt="" />
                      <h1>Most NFTs Part of the Ethereum <span>Blockch</span>ain.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event03.png" width={140} height={140} alt="" />
                      <h1>All About <span>Blockch</span>ain and its Features.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event01.png" width={140} height={140} alt="" />
                      <h1>The Complete Guide for Types of <span>Blockch</span>ain!</h1>
                    </div> 
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event02.png" width={140} height={140} alt="" />
                      <h1>Most NFTs Part of the Ethereum <span>Blockch</span>ain.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event03.png" width={140} height={140} alt="" />
                      <h1>All About <span>Blockch</span>ain and its Features.</h1>
                    </div>
                    <div className={styles.SearchFrst}>
                      <Image src="/img/event03.png" width={140} height={140} alt="" />
                      <h1>All About <span>Blockch</span>ain and its Features.</h1>
                    </div>
                  </div>
                </div>
                {/* secnd */}
            </div>
          </div>
      </Container>
    </div>
  );
};

export default Search;
