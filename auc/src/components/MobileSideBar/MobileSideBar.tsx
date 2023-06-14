import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './MobileSideBar.module.scss';

import { ExitIcon } from '../assets';

type MobileSideBarProps = {
  onClick: () => void;
  isMenu: boolean;
  account?: string;
};

const MobileSideBar: NextPage<MobileSideBarProps> = ({ onClick, isMenu }) => {
  const { push, pathname } = useRouter();
  return (
    <div
      className={styles.overlay}
      style={isMenu ? { width: '100%' } : { width: 0 }}
    >
      <div>
        <div className={styles.closebtn} onClick={onClick}>
          <Image width={40} height={40} src={ExitIcon} alt="Close" />
        </div>
      </div>
      <div className={styles.overlayContentContainer}>
        <div className={styles.overlayContent}>
          <div className={styles.NewMenu}>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/trending');
                  onClick();
                }}
              >
                <a className={`${pathname === '/trending' && styles.active}`}>
                  Whats Trending
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/leaderboards');
                  onClick();
                }}
              >
                <a
                  className={`${pathname === '/leaderboards' && styles.active}`}
                >
                  SNFT Leaders
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/socialart');
                  onClick();
                }}
              >
                <a className={`${pathname === '/socialart' && styles.active}`}>
                  Social Art
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/earn');
                  onClick();
                }}
              >
                <a className={`${pathname === '/earn' && styles.active}`}>
                  NAPA Staking
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/rankings');
                  onClick();
                }}
              >
                <a className={`${pathname === '/rankings' && styles.active}`}>
                  Rankings
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/marketplace');
                  onClick();
                }}
              >
                <a
                  className={`${pathname === '/marketplace' && styles.active}`}
                >
                  Marketplace
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/dave');
                  onClick();
                }}
              >
                <a className={`${pathname === '/dave' && styles.active}`}>
                  DAVE
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/events');
                  onClick();
                }}
              >
                <a className={`${pathname === '/events' && styles.active}`}>
                  Events
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/tutorials');
                  onClick();
                }}
              >
                <a className={`${pathname === '/tutorials' && styles.active}`}>
                  Tips and Tutorials
                </a>
              </div>
            </div>
            <div>
              <div
                className={`${styles.newlink} `}
                onClick={() => {
                  push('/payouts');
                  onClick();
                }}
              >
                <a className={`${pathname === '/payouts' && styles.active}`}>
                  Payouts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
