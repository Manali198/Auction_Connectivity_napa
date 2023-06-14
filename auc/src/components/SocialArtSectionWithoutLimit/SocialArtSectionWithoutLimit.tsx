import {
  MouseIcon,
  GooglePlay,
  AppStore,
  homeBannerImg,
  DoneIcon,
  homeBannerMobile,
  homeBannerTablet,
} from '../../components/assets';
import Container from '../../Layout/Container/Container';
import { scrollToNextSection } from '../../utils/home';
import type { NextPage } from 'next';
import styles from './SocialArtSectionWithoutLimit.module.scss';
import Image from 'next/image';
import AnimateButton from '../AnimateButton/AnimateButton';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getQrCode } from '@/services/auth';
import { WEBSOCKET_URL } from '@/constants/url';
import QRCode from 'react-qr-code';
import * as Bowser from 'bowser';
import { hasCookie, setCookie } from 'cookies-next';
import useProfile from '@/hooks/useProfile';
import { useRouter } from 'next/router';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { getNapaAccounts } from '@/services/napaAccounts';
// you are using the footer for the bottom nav options when you should be importing a NavBarSection.tsx  //

const SocialArtSectionWithoutLimit: NextPage = () => {
  const [qr_data, setQrData] = useState<any>();
  const socket = new WebSocket(WEBSOCKET_URL);
  const { getUserProfileDetails, profileDetails } = useProfile();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(20);
  const [isMobile, setIsMobile] = useState(false);
  const [browserWidth, setBrowserWidth] = useState<number>(0);

  const handleLogin = async (profileId: string) => {
    await getUserProfileDetails(profileId);
    toast.success(
      CustomToastWithLink({
        icon: DoneIcon,
        title: 'Success',
        description: 'Logged In Successfully',
        time: 'Now',
      })
    );
    // push('/settings');
  };

  // const isTimerExpired = () => {
  //   const generatedTimestamp = new Date(
  //     moment(qr_data?.generatedTimestamp).add(20, 'seconds').format()
  //   ).getTime();
  //   const duration = generatedTimestamp - new Date().getTime();
  //   return duration;
  // };

  const handleResize = () => {
    setBrowserWidth(window.innerWidth);
    if (window.innerWidth <= 500) {
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

  useEffect(() => {
    const qrTimer = setInterval(() => {
      // if (qr_data?.generatedTimestamp && isTimerExpired() > 0) {
      setTimer((prev) => prev - 1);
      // }
    }, 1000);
    return () => {
      clearInterval(qrTimer);
    };
  }, [qr_data]);

  const showQrCode = async () => {
    setLoading(true);
    const { data }: any = await getQrCode();
    const browser = Bowser.getParser(window.navigator.userAgent);
    const qrData = {
      id: data?.data?.id,
      generatedTimestamp: data?.data?.generatedTimestamp,
      ipAddress: data?.data?.metaData?.IPv4,
      location: data?.data?.metaData?.country_name,
      device: `${browser.getBrowserName()} ${browser.getBrowserVersion()}`,
    };
    setTimer(20);
    setQrData(qrData);
    setLoading(false);
    if (data?.data) {
      // @ts-ignore
      socket.addEventListener('message', async ({ data }) => {
        const response = JSON.parse(data);
        if (response?.event === `login-event-${qrData.id}`) {
          setCookie('profileId', response.profileId);
          setCookie('emailAddress', response.emailAddress);
          setCookie('networkType','1')
          const { data }: any = await getNapaAccounts(response.profileId);
          const activeAccount = data?.data?.find((a: any) => a.true == 'true');
          setCookie(
            'napaWalletAccount',
            JSON.stringify({
              profileId: activeAccount?.profileId,
              subAcWalletAddress: activeAccount?.subAcWalletAddress,
            })
          );
          handleLogin(response.profileId);
          setQrData(null);
        }
      });
    }
  };

  const handleRedirect = () => {
    push('/trending');
  };

  return (
    <div
      className={styles.backgroundImage}
      id="social-art-section-without-limit"
    >
      <div className={styles.bgImage}>
        <img
          style={{ width: '100%', height: '100vh', position: 'absolute' }}
          src={
            browserWidth <= 500
              ? homeBannerMobile
              : browserWidth <= 1024
              ? homeBannerTablet
              : homeBannerImg
          }
          alt=""
        />
      </div>

      {/* <Steper steps={1} top={0} /> */}
      <Container className={`${styles.socialContainer} asinnerContainer`}>
        <div className={styles.socialContainerBody}>
          <div className={styles.innerSocialContainer}>
            <h1 className={styles.socialArt}>Social Art</h1>
            <h1 className={styles.withoutLimits}>without Limits</h1>
            <div style={{ marginTop: '100px' }} className="my-4 d-flex">
              <Link href="https://us8.list-manage.com/contact-form?u=3dbbbe0029a82810eff620fdc&form_id=2444d97269ec79e08967538af634bebe">
                <img style={{ cursor: 'pointer' }} src={AppStore} alt="" />
              </Link>
              <Link href="https://us8.list-manage.com/contact-form?u=3dbbbe0029a82810eff620fdc&form_id=2444d97269ec79e08967538af634bebe">
                <img
                  style={{ cursor: 'pointer' }}
                  className="ms-4"
                  src={GooglePlay}
                  alt=""
                />
              </Link>
              {/* <img className='ms-4' src={GooglePlay} alt="" /> */}
            </div>
          </div>
          <div className={styles.innerSocialContainerRightSide}>
            {isMobile && (
              <p className={styles.downloadApp}>
                Download the NAPA Society mobile app for the full NAPA
                experience at your fingertips
              </p>
            )}

            {/* <h6 className={styles.description}></h6> */}
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <FadeLoader color="#ffffff" />
              </div>
            ) : qr_data && (!profileDetails?.profileId || !hasCookie("profileId")) && !isMobile ? (
              <>
                <p className={styles.timer}>
                  {timer < 0
                    ? 'QR Code Expired - Try Again'
                    : `Scan QR Code with Your NAPA Mobile App 00:${
                        timer < 10 ? '0' : ''
                      }${timer}`}
                </p>
                <div className={styles.qrContainer}>
                  {timer < 0 && (
                    <div onClick={showQrCode} className={styles.newQrCodeBtn}>
                      Generate New QR Code
                    </div>
                  )}
                  <QRCode
                    value={JSON.stringify(qr_data)}
                    // size={180}
                    style={{ width: '100%', height: '100%' }}
                    bgColor="white"
                    fgColor="black"
                  />
                </div>
              </>
            ) : null}
            {!qr_data && !loading && !isMobile && (
              <AnimateButton
                title={`${
                  (!profileDetails?.profileId || !hasCookie("profileId"))
                    ? 'Enter NAPA Society'
                    : "See What's Trending"
                }`}
                onClick={
                  (!profileDetails?.profileId || !hasCookie("profileId")) ? showQrCode : handleRedirect
                }
              />
            )}
            <div
              style={{ marginTop: '100px' }}
              className={`my-4 ${styles.btnContainer}`}
            >
              <div className={styles.mainBtnsContainer}>
                <Link href="https://us8.list-manage.com/contact-form?u=3dbbbe0029a82810eff620fdc&form_id=2444d97269ec79e08967538af634bebe">
                  <img
                    className={styles.appStoreBtn}
                    style={{ cursor: 'pointer' }}
                    src={AppStore}
                    alt=""
                  />
                </Link>
                <Link href="https://us8.list-manage.com/contact-form?u=3dbbbe0029a82810eff620fdc&form_id=2444d97269ec79e08967538af634bebe">
                  <img
                    style={{ cursor: 'pointer' }}
                    className={styles.GooglePlayContainer}
                    src={GooglePlay}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mousePointer}>
          <Image
            src={MouseIcon}
            onClick={() => scrollToNextSection('napa-society')}
            width={50}
            height={50}
            alt="mouse"
          />
        </div>
      </Container>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          zIndex: '2',
        }}
      >
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
};
export default SocialArtSectionWithoutLimit;
