/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Container from '../../Layout/Container/Container';
import styles from './Footer.module.scss';

import { scrollToNextSection } from '../../utils/home';
import {
  FooterLogoIcon,
  MouseIcon,
  TwitterMobileIcon,
  // DiscordMobileIcon,
  GithubMobileIcon,
  MediumMobileIcon,
} from '../../components/assets';
import useProfile from '@/hooks/useProfile';
import { hasCookie } from 'cookies-next';

type FooterProps = {
  footerIconShow: boolean;
};

const Footer: NextPage<FooterProps> = ({ footerIconShow }) => {
  const router = useRouter();
  const { push } = useRouter();
  const { profileDetails } = useProfile();
  return (
    <footer>
      <div
        className={`${styles.container} ${
          router.pathname != '/payouts'
            ? 'asinnerContainer'
            : 'asinnerContainerPayout'
        }`}
      >
        <div className={styles.footerContainer}>
          <div onClick={() => push('/')} className={styles.logo}>
            <img src={FooterLogoIcon} alt="FooterLogoIcon" />
          </div>
          {profileDetails?.profileId && hasCookie("profileId") && (
            <div className={`${styles.footerItemContainer} fadeInAnimate`}>
              <ul
                className={`${styles.footerListItem} ${styles.activeFooterListItem}`}
              >
                <Link href={'/trending'}>
                  <li>Whats Trending</li>
                </Link>
                <Link href={'/socialart'}>
                  <li>Social Art</li>
                </Link>
                <Link href={'/marketplace'}>
                  <li>Marketplace</li>
                </Link>
                <Link href={'/earn'}>
                  <li>Staking</li>
                </Link>
                <Link href={'/payouts'}>
                  <li>Payouts</li>
                </Link>
                <Link href={'/help-center'}>
                  <li>Help Center</li>
                </Link>
              </ul>
            </div>
          )}

          <ul className={styles.footerMobileIconsContainer}>
            <li className={styles.footerMobileIconItem}>
              <Link href="https://twitter.com/NapaSociety">
                <a target="_blank">
                  <Image
                    src={TwitterMobileIcon}
                    alt="Twitter"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
            </li>
            {/* <li className={styles.footerMobileIconItem}>
              <Link href="https://discord.gg/pV2vxbkqpb">
                <a target="_blank">
                  <Image
                    src={DiscordMobileIcon}
                    alt="Discord"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
            </li> */}
            <li className={styles.footerMobileIconItem}>
              <Link href="https://github.com/NAPA-Society">
                <a target="_blank">
                  <Image
                    src={GithubMobileIcon}
                    alt="Github"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
            </li>
            <li className={styles.footerMobileIconItem}>
              <Link href="https://medium.com/@Napa_Society">
                <a target="_blank">
                  <Image
                    src={MediumMobileIcon}
                    alt="Medium"
                    width={18}
                    height={18}
                  />
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.footerIconsContainer}>
            <li className={`${styles.footerIconItem} ${styles.SocialLinks}`}>
              <Link href="https://twitter.com/NapaSociety">
                <a target="_blank">
                  <Image
                    src="/img/twitter_icon.png"
                    alt=""
                    width={32}
                    height={30}
                  />
                </a>
              </Link>
            </li>
            {/* <li className={`${styles.footerIconItem} ${styles.SocialLinks}`}>
              <Link href="https://discord.gg/pV2vxbkqpb">
                <a target="_blank">
                  <Image
                    src="/img/discord_icon.png"
                    alt=""
                    width={32}
                    height={30}
                  />
                </a>
              </Link>
            </li> */}
            <li className={`${styles.footerIconItem} ${styles.SocialLinks}`}>
              <Link href="https://github.com/NAPA-Society">
                <a target="_blank">
                  <Image
                    src="/img/github_icon.png"
                    alt=""
                    width={32}
                    height={30}
                  />
                </a>
              </Link>
            </li>
            <li className={`${styles.footerIconItem} ${styles.SocialLinks}`}>
              <Link href="https://medium.com/@Napa_Society">
                <a target="_blank">
                  <Image
                    src="/img/medium_icon.png"
                    alt=""
                    width={32}
                    height={30}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {profileDetails?.profileId && (
          <div className={`${styles.footerItemsBlockContainer} fadeInAnimate`}>
            <ul
              className={`${styles.footerListItem} ${styles.activeFooterListItem}`}
            >
              <Link href={'/trending'}>
                <li>Whats Trending</li>
              </Link>
              <Link href={'/socialart'}>
                <li>Social Art</li>
              </Link>
              <Link href={'/marketplace'}>
                <li>Marketplace</li>
              </Link>
              <Link href={'/help-center'}>
                <li>Help</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className={styles.footerListMobile}>
        <Container className="asinnerContainer">
          <ul
            className={`${styles.footerListItem} ${styles.activeFooterListItem}`}
          >
            <Link href={'/trending'}>
              <li>Whats Trending</li>
            </Link>
            <Link href={'/socialart'}>
              <li>Social Art</li>
            </Link>
            <Link href={'/marketplace'}>
              <li>Marketplace</li>
            </Link>
            {/* <li>NAPA Earn</li> */}
            {/* <li>Leaderboards</li> */}
            {/* <li>Lauchpad</li> */}
            <Link href={'/support'}>
              <li>Help</li>
            </Link>
          </ul>
        </Container>
      </div>
      <div className={styles.footerBottomContainer}>
        <Container
          className={`${
            router.pathname != '/payouts'
              ? 'asinnerContainer'
              : 'asinnerContainerPayout'
          }`}
        >
          <div className={styles.footerContainer}>
            <p className={styles.footerBottomText}>
              ©{new Date().getFullYear()} NAPA Society Inc.
            </p>

            <div>
              <ul className={styles.footerListItem}>
                <li className={styles.footerBottomText}>
                  <Link href="/">FAQ</Link>
                </li>
                <li className={styles.footerBottomText}>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li className={styles.footerBottomText}>
                  <Link href="/">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          {footerIconShow && (
            <div
              className={styles.mouseIcon}
              onClick={() =>
                scrollToNextSection('social-art-section-without-limit')
              }
            >
              <Image
                src={MouseIcon}
                onClick={() => scrollToNextSection('social-section-art')}
                width={50}
                height={50}
                alt="mouse"
              />
            </div>
          )}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
