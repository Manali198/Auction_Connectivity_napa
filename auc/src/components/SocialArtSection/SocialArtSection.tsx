/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './SocialArtSection.module.scss';
import Container from '../../Layout/Container/Container';
import HighlightButton from '../HighlightButton/HighlightButton';
import { scrollToNextSection } from '../../utils/home';
import { Carousel, MouseIcon } from '../../components/assets';
import { RecentMintPost } from '../../types/mint';
import { getRecentMintedPosts } from '../../services/MintApi';
import { FadeLoader } from 'react-spinners';

//import image1 from .... (asset location in S3 bucket) ASSETS SHOULD BE IMPORTED AND DEFINED, DO NOT HARDCODE ASSETS PLEASE

const SocialArtSection: NextPage = () => {
  const [slider, setSlider] = useState(1);

  const [mintedPosts, setMintedPosts] = useState<RecentMintPost[] | null>(null);
  const [getMintedPostsLoading, setMintedPostsLoading] = useState(false);
  const handleGetRecentMintedPosts = async () => {
    setMintedPostsLoading(true);
    const { data }: any = await getRecentMintedPosts();
    setMintedPosts(data?.data || []);
    setMintedPostsLoading(false);
  };

  useEffect(() => {
    handleGetRecentMintedPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setSlider((prevCount) =>
          //@ts-ignore
          prevCount >= mintedPosts?.length ? 1 : prevCount + 1
        ),
      5000
    );
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintedPosts]);

  const handleNextSection = (slide: number) => {
    //@ts-ignore
    if (slider > mintedPosts?.length) {
      setSlider(slide);
      return;
    }
    setSlider(slide);
  };
  console.log(slider);

  return (
    <div id="social-section-art" className={styles.backgroundImage}>
      {/* <Steper steps={3} top={12} /> */}
      <Container
        className={`${styles.socialArtContainer} asinnerContainer pstnrltv`}
      >
        <div className={styles.socialArtContainerBody}>
          {getMintedPostsLoading || mintedPosts?.length == 0 ? (
            <div className={styles.noPost}>
              {getMintedPostsLoading ? (
                <FadeLoader color="#ffffff" />
              ) : (
                <h3>No Post Found</h3>
              )}
            </div>
          ) : (
            <div className={styles.carouselImage}>
              <img
                src={`${
                  mintedPosts && mintedPosts[slider - 1]?.thumbnail
                    ? mintedPosts[slider - 1]?.thumbnail
                    : Carousel
                }`}
                alt=""
                className={styles.image}
              />
              <div className={styles.slideBtn}>
                <div className={`${styles.carouselBottom} carouselBottom`}>
                  <img
                    src={`${
                      mintedPosts && mintedPosts[slider - 1]?.avatar
                        ? mintedPosts[slider - 1]?.avatar
                        : '/assets/images/img_avatar.png'
                    }`}
                    alt=""
                    className={styles.avatar}
                    width={70}
                    height={70}
                  />
                  <span className={styles.carouselBottomText}>
                    {mintedPosts && mintedPosts[slider - 1]?.profileName
                      ? mintedPosts[slider - 1]?.profileName
                      : ''}
                  </span>
                </div>
                <div>
                  {mintedPosts &&
                    mintedPosts.slice(0, 5).map((_, index) => {
                      return (
                        <span
                          key={index}
                          className={styles.circles}
                          onClick={() => handleNextSection(index + 1)}
                        >
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {slider == index + 1 && (
                              <path
                                d="M16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.5C7.43959 0.5 0.5 7.43959 0.5 16C0.5 24.5604 7.43959 31.5 16 31.5Z"
                                stroke="white"
                              />
                            )}
                            <circle cx="16" cy="16" r="3" fill="white" />
                          </svg>
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className={styles.innerSocietyContainer}></div>
            </div>
          )}
          <div className={styles.innerSocietyContainerRightSide}>
            <div className={styles.innerSocietyContainerwt}>
              <div className={styles.socialHeading}>
                <h2 className={styles.socialText}>Social</h2>
                <h2 className={styles.artText}>Art</h2>
              </div>
              <p className={styles.description}>
                The NAPA Social Media App is the worlds only social media
                platform that allows you to mint and monetize your posts in real
                time to receive <strong>NAPA Tokens!</strong>
                <br></br>
                <br></br>Pick and choose your audience and share your social art
                with millions of members in the NAPA Society community!
              </p>
              <HighlightButton
                title="NAPA Social Art"
                link="/socialart"
                arrow={true}
              />
              <div className={styles.socialImages}>
                <Image
                  src="/img/qrcode_ic.png"
                  alt=""
                  width="300px"
                  height="300px"
                  className={styles.MrgnRgt30}
                />
                <Image
                  src="/img/qrcode_ic.png"
                  alt=""
                  width="300px"
                  height="300px"
                />
              </div>
              <div>
                <button className={styles.Dawnldnapabtn}>
                  Download The NAPA App
                </button>
              </div>
            </div>

            {/* <p className={styles.description}>
>>>>>>> 05f8c9f7b340ac05ca05b8fbcdd435a1c0816cbf
              <strong>
                The NAPA Social Media App is the worlds only social media
                platform that allows you to mint and monetize your posts in real
                time to receive NAPA Tokens
              </strong>
              .<br />
              <br />
              <strong>
                Choose your audience and share your social art with millions of
                members of the NAPA Society community!
              </strong>

            </p> */}
          </div>
        </div>
        <div className={styles.mousePointer}>
          <Image
            src={MouseIcon}
            onClick={() => scrollToNextSection('nft-marketplace')}
            width={50}
            height={50}
            alt="mouse"
          />
        </div>
      </Container>
    </div>
  );
};

export default SocialArtSection;
