import useProfile from '../../hooks/useProfile';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { BnbIcon, EthereumBlackIcon, SmallExitIcon, NapaIcon } from '../assets';
import styles from './WalletPopup.module.scss';

type WalletPopupProps = {
  setPopupShow: (show: boolean) => void;
  account?: string;
  ethereum?: number;
  bnb?: string;
  napa?: string;
  crypto?: boolean;
  napaProfileName: string;
};

const WalletPopup: NextPage<WalletPopupProps> = ({
  setPopupShow,
  account,
  crypto,
  ethereum,
  bnb,
  napa,
  napaProfileName,
}) => {
  const ref = useRef(null);
  const { profileName } = useProfile();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setPopupShow(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPopupShow]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.header}>
        <div className="d-flex">
          <h2>{napaProfileName || profileName}</h2>
        </div>
        <div className={styles.actionButtons}>
          <div
            onClick={() => {
              setPopupShow(false);
            }}
          >
            <Image src={SmallExitIcon} width={15} height={15} alt={'cross'} />
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <span>{account}</span>
      </div>
      <div className={styles.body}>
        <Image src={NapaIcon} alt={'NAPA Token'} width={90} height={90} />
        <h2>{napa}</h2>
        {crypto && <span>$98,22 USD</span>}
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLeftSide}>
          <Image src={NapaIcon} width={90} height={90} alt="NAPA" />
          <span className={styles.ethereum}>NAPA</span>
          {/* <span className={styles.eth}>NAPA</span> */}
        </div>
        <div className={styles.footerRightSide}>
          <h2>{napa}</h2>
        </div>
      </div>
      <div className={`${styles.footer} ${styles.bnbContainer}`}>
        <div className={styles.footerLeftSide}>
          <Image
            src={EthereumBlackIcon}
            width={25}
            height={40}
            alt="Ethereum"
          />
          <span className={styles.ethereum}>Ethereum</span>
          {/* <span className={styles.eth}>ETH</span> */}
        </div>
        <div className={styles.footerRightSide}>
          <h2>{ethereum}</h2>
        </div>
      </div>
      <div className={`${styles.footer}`}>
        <div className={styles.footerLeftSide}>
          <Image src={BnbIcon} width={25} height={40} alt="Binance" />
          <span className={styles.ethereum}>Binance</span>
          {/* <span className={styles.eth}>BNB</span> */}
        </div>
        <div className={styles.footerRightSide}>
          <h2>{bnb}</h2>
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;
