import { NapaLogo, NapaLogoWhite } from '../../components/Svg';
import { useEffect, useState } from 'react';
import Vivus from 'vivus';
import Container from '../../Layout/Container/Container';
import type { NextPage } from 'next';
import styles from '../../../styles/pages/Wallet.module.scss';
// import { WalletConnectedIcon } from '../../components/assets';
// import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
// import { CustomToastWithLink } from '../CustomToast/CustomToast';
// import { walletButtonList } from '../../constants/wallet.constants';
// import Image from 'next/image';
// import { ToastDescription, ToastTitle } from '../../typing/toast';
// import useProfile from '../../hooks/useProfile';
import useWebThree from '../../hooks/useWebThree';
import Link from 'next/link';
import { connectWalletModal } from '../../connectivity/web3ModalUtils/connectWallet';
import { disconnect } from '../../connectivity/web3ModalUtils/disconnectWallet';
import { deleteCookie, setCookie } from 'cookies-next';
import useProfile from '@/hooks/useProfile';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { DoneIcon } from '../assets';
import { getNapaAccounts } from '@/services/napaAccounts';

type WalletComponentProps = {
  account: string;
};

const WalletComponent: NextPage<WalletComponentProps> = (
  {
    // account
  }
) => {
  const { profileDetails } = useProfile();
  const { setMetaMaskAccount, setNapaWalletAccount, setAccount } =
    useWebThree();
  const {
    push,
    // query
    // back,
  } = useRouter();
  const {
    // connectWallet,
    // getAccounts,
    // call
  } = useWebThree();
  const [show, setShow] = useState(true);
  // const { getUserProfileDetails } = useProfile();

  useEffect(() => {
    if (show) {
      // getAccounts();
      setShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    new Vivus('napa-logo', {
      type: 'delayed',
      duration: 200,

      animTimingFunction: Vivus.EASE_OUT,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const walletHandler = async () => {
  //   connectWallet()
  //     // @ts-ignore
  //     .then(async (response: string) => {
  //       call();
  //       const profileDetails = await getUserProfileDetails(response);
  //       // @ts-ignore
  //       if (response && profileDetails) {
  //         if (query) {
  //           back();
  //           return;
  //         }
  //       } else if (response) {
  //         push('/settings');
  //       }
  //     })
  //     .catch((err) => console.log('error', err));
  // };

  const _connectWallet = async () => {
    let data = await connectWalletModal();
    console.log(data, 'Wallet Data');
    setNapaWalletAccount('');
    deleteCookie('napaWalletAccount');
    // @ts-ignore
    setAccount(data?.accounts[0]);
    // @ts-ignore
    setMetaMaskAccount(data?.accounts[0]);
    // @ts-ignore
    setCookie('metaMaskAccount', data?.accounts[0]);
    // @ts-ignore
    console.log('activeAccount', data?.accounts[0]);
    push('/marketplace');
  };

  return (
    <div className={styles.backgroundImage}>
      <Container>
        <div
          className={`row justify-content-between align-items-center col-12 ${styles.innerMainContainer}`}
        >
          <div className={`col-xl-6 col-md-12 d-flex justify-content-center`}>
            <div className={styles.svgWrapper} onClick={() => push('/')}>
              <NapaLogo
                className={styles.napaLogo}
                width={'360'}
                height={'80'}
              />
            </div>
            <div className={styles.svgWrapper} onClick={() => push('/')}>
              <NapaLogoWhite
                className={styles.napaLogoWhite}
                width={'360'}
                height={'80'}
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="flex-column">
              <h1 className={styles.walletText}>Select Wallet</h1>
              <span className={styles.descriptionText}>
                By connecting your wallet, you agree to our{' '}
                <span className={styles.termsPrivacyText}>
                  <Link href="/terms-conditions">Terms of Service</Link>
                </span>
                &nbsp;and our{' '}
                <span className={styles.termsPrivacyText}>
                  <Link href="/privacy">Privacy Policy.</Link>
                </span>
              </span>
              <div className={`${styles.btnContainer} flex-column`}>
                <button
                  className={styles.walletBtn}
                  style={{ borderColor: '#2B5EE2' }}
                  onClick={async () => {
                    setMetaMaskAccount('');
                    setAccount('');
                    deleteCookie('metaMaskAccount');
                    const { data }: any = await getNapaAccounts(
                      profileDetails?.profileId
                    );
                    const activeAccount = data?.data?.find(
                      (a: any) => a.isActive == 'true'
                    );
                    setCookie('napaWalletAccount', JSON.stringify({profileId: activeAccount?.profileId, subAcWalletAddress: activeAccount?.subAcWalletAddress}));
                    setNapaWalletAccount(
                      activeAccount || ''
                    );
                    console.log('activeAccount', JSON.stringify({profileId: activeAccount?.profileId, subAcWalletAddress: activeAccount?.subAcWalletAddress}));
                    toast.success(
                      CustomToastWithLink({
                        icon: DoneIcon,
                        title: 'NAPA Wallet Connected',
                        description:
                          'Your NAPA wallet has been successfully connected',
                        time: 'Now',
                      })
                    );
                    push('/napa-wallet');
                  }}
                >
                  Connect Your NAPA WAllet
                </button>
                <button
                  className={styles.walletBtn}
                  style={{ borderColor: '#F5841F' }}
                  onClick={_connectWallet}
                >
                  Connect Your Metamask or Binance Wallet
                </button>
                <button
                  onClick={() => {
                    disconnect().then(() => {
                      setNapaWalletAccount('');
                      setMetaMaskAccount('');
                      setAccount('');
                      console.log("activeAccount", "Not Connected");
                      push('/wallet-selector');
                    });
                  }}
                  className={styles.walletBtn}
                  style={{ borderColor: '#feb1bb' }}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WalletComponent;
