import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Vivus from 'vivus';
import styles from './Header.module.scss';
import Container from '../../Layout/Container/Container';
import useWebThree from '../../hooks/useWebThree';
import useProfile from '../../hooks/useProfile';

import Sidebar from '../Sidebar/Sidebar';
import WalletPopup from '../WalletPopup/WalletPopup';
import { NapaLogo, NapaLogoWhite } from '../Svg';
import {
  BurgerMenuIcon,
  SearchIcon,
  UserIconBlue,
  UserWhiteIcon,
  WalletBlueIcon,
  WalletIconWhite,
} from '../../components/assets';
import MobileSideBar from '../MobileSideBar/MobileSideBar';
import { deleteCookie, hasCookie } from 'cookies-next';
import { LogoutBlueIcon } from '../Svg/LogoutBlueIcon';
import { LogoutIcon } from '../Svg/LogoutIcon';
import { disconnect } from '@/connectivity/web3ModalUtils/disconnectWallet';

type HeaderProps = {
  openMenu: () => void;
  setIsMenu: (menu: boolean) => void;
  isMenu: boolean;
  setShowSearch: (search: boolean) => void;
};

const Header: NextPage<HeaderProps> = ({
  openMenu,
  isMenu,
  setIsMenu,
  setShowSearch,
}) => {
  const { push, pathname } = useRouter();
  const [popupShow, setPopupShow] = useState(false);
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { walletEth, account, walletBnb, walletNapa, getAccounts,
    // call, 
    napaWalletAccount, metaMaskAccount, setMetaMaskAccount, setNapaWalletAccount, setAccount } =
    useWebThree();
  const [logoutSwitch, setLogoutSwitch] = useState(false);
  const [shortendWalletAddress, setShortendWalletAddress] = useState('');

  useEffect(() => {    
    const data =
    // @ts-ignore
    napaWalletAccount ? napaWalletAccount?.subAcWalletAddress : metaMaskAccount;
    
    setShortendWalletAddress(data as string);
  }, [napaWalletAccount, metaMaskAccount]);

  // useEffect(() => {
  // call();
  // }, []);

  useEffect(() => {
    if (show) {
      getAccounts();
      setShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      return setIsMobile(true);
    }
    setIsMobile(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { profileDetails } = useProfile();

  useEffect(() => {
    new Vivus('napa-logo', {
      type: 'delayed',
      duration: 200,
      animTimingFunction: Vivus.EASE_OUT,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.body.classList.add('scroll-up');
    document.body.classList.remove('scroll-down-landing');
    document.body.classList.remove('scroll-down');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <header className="page-header">
      <Container className={`${styles.innerContainer} asinnerContainer`}>
        {profileDetails?.profileId && hasCookie("profileId") && (
          <div className="fadeInAnimate" onClick={openMenu}>
            <Image
              src={BurgerMenuIcon}
              alt="BurgerMenuIcon"
              className={styles.burgerMenuIcon}
              width={64}
              height={32}
            />
          </div>
        )}
        <div>
          <div className={styles.svgWrapper} onClick={() => push('/')}>
            <NapaLogo className={styles.napaLogo} />
          </div>
          <div className={styles.svgWrapper} onClick={() => push('/')}>
            <NapaLogoWhite className={styles.napaLogoWhite} />
          </div>
        </div>
        {(!profileDetails?.profileId || !hasCookie("profileId"))&& (
          <div style={{ paddingTop: '4.5rem' }}></div>
        )}
        {profileDetails?.profileId && hasCookie("profileId") && (
          <div
            className={`d-flex align-items-center had_right_btns fadeInAnimate`}
          >
            <div className={styles.search} onClick={() => setShowSearch(true)}>
              <Image width={36} height={36} src={SearchIcon} alt="search" />
            </div>
            {pathname === "/settings" ?
              <div className={styles.userIconContainer}>
                <Image style={{ cursor: 'pointer',marginBottom:'3px' }} src={UserIconBlue} width={20} height={32}></Image>
              </div>
              :
              <div className={styles.userIconContainer} >
                <Image
                  style={{ cursor: 'pointer',marginBottom:'3px' }}
                  onClick={() => {
                    push('/settings');
                    setIsMenu(false);
                  }} src={UserWhiteIcon} width={20} height={32}></Image>
              </div>
              // <Button
              //   text=""
              //   outlined
              //   // icon={ProfileIcon}
              //   icon={UserWhiteIcon}
              //   onClick={() => {
              //     push('/settings');
              //     setIsMenu(false);
              //   }}
              // />
            }
            <div className={styles.wallet}>
              {shortendWalletAddress ? (
                <>
                  {pathname === "/wallet-selector" ? <span
                    onClick={() => {
                      disconnect().then(() => {
                        setNapaWalletAccount('')
                        setMetaMaskAccount('')
                        setAccount('')
                        setShortendWalletAddress('')
                        push('/wallet-selector');
                      });
                    }}
                    style={{
                      color: '#16E6EF',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                    }}
                  >
                    {shortendWalletAddress.substring(0, 5) +
                      '...' +
                      shortendWalletAddress.substring(
                        shortendWalletAddress.length - 5
                      )}
                  </span>
                    :
                    <span
                      onClick={() => {
                        disconnect().then(() => {
                          setNapaWalletAccount('')
                          setMetaMaskAccount('')
                          setAccount('')
                          setShortendWalletAddress('')
                          push('/wallet-selector');
                        });
                      }}
                      style={{
                        color: 'white',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      {shortendWalletAddress.substring(0, 5) +
                        '...' +
                        shortendWalletAddress.substring(
                          shortendWalletAddress.length - 5
                        )}
                    </span>}
                </>
              ) : (
                <div
                  onClick={() => {
                    // if (account) {
                    //   setPopupShow(true);
                    //   return;
                    // }
                    push('/wallet-selector');
                  }}
                  role="button"
                >
                  {pathname === "/wallet-selector" ?

                    <Image
                      src={WalletBlueIcon}
                      className={styles.walletIcon}
                      width={36}
                      height={36}
                      alt="wallet"
                    /> :
                    <Image
                      src={WalletIconWhite}
                      className={styles.walletIcon}
                      width={36}
                      height={36}
                      alt="wallet"
                    />
                  }
                </div>
              )}
              {popupShow && (
                <WalletPopup
                  account={account}
                  setPopupShow={setPopupShow}
                  ethereum={walletEth}
                  napa={walletNapa}
                  bnb={walletBnb}
                  crypto={false}
                  napaProfileName={profileDetails?.profileName as string}
                />
              )}
            </div>
            <div
              className={styles.logoutIconContainer}
              onMouseOver={() => setLogoutSwitch(true)}
              onMouseLeave={() => setLogoutSwitch(false)}
              onClick={() => {
                deleteCookie('profileId');
                window.location.href = '/';
              }}
            >
              {logoutSwitch ? <LogoutBlueIcon /> : <LogoutIcon />}
            </div>
          </div>
        )}
      </Container>
      {isMenu && isMobile ? (
        <MobileSideBar
          isMenu={isMenu}
          onClick={() => setIsMenu(false)}
          account={account}
        />
      ) : (
        <Sidebar
          isMenu={isMenu}
          onClick={() => setIsMenu(false)}
          account={account}
        />
      )}
    </header>
  );
};
export default Header;
