import NftProjectCard from '../NftProjectCard/NftProjectCard';
import React, { useEffect } from 'react';
import styles from './NftMarketplaceSection.module.scss';
import LeaderboardsSliderComponent from '../Leaderboards/LeaderboardsSlider';
import { ErrorIcon } from '../../components/assets';
import { SnftResponse } from '../../types/marketplace';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { getAllSnfts } from '../../services/MarketplaceApi';
import { FadeLoader } from 'react-spinners';
import HighlightButton from '../HighlightButton/HighlightButton';
import { SOCIAL_ART_WEBSOCKET_URL } from '../../constants/url';

const NftMarketplaceSectionTab2 = () => {
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  const [snftsData, setSnftsData] = React.useState<SnftResponse[] | null>(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    handleGetSnfts();
  }, []);

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'recent-snfts') {
        setSnftsData((prev) => {
          // @ts-ignore
          return [response?.snft, ...prev];
        });
      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetSnfts = async () => {
    setLoading(true);
    const { data, error, message }: any = await getAllSnfts(24);
    if (error) {
      setLoading(false);
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      return;
    }
    setSnftsData(data?.data || []);
    setLoading(false);
  };
  return (
    <>
      {loading || snftsData?.length == 0 ? (
        <div className={styles.loaderContainer}>
          {loading ? <FadeLoader color="#ffffff" /> : <h3>No Data Found</h3>}
        </div>
      ) : (
        <div id="sliderComponent">
          <div className={styles.btn}>
            <HighlightButton
              title="Explore All SNFTs"
              link="/marketplace?redirect=SNFTs"
              as="/marketplace"
              arrow={true}
            />
          </div>
          <LeaderboardsSliderComponent dataLength={snftsData?.length}>
            {snftsData?.map((val, index) => {
              return (
                <div key={index} className={styles.projectCardContainer}>
                  <NftProjectCard
                    backgroundImg={val.thumbnail}
                    avatar={val.userImage as string}
                    ending={val.duration}
                    currentBid={val.amount}
                    userName={val.userName as string}
                    title={val.SNFTTitle as string}
                  />
                </div>
              );
            })}
          </LeaderboardsSliderComponent>
        </div>
      )}
    </>
  );
};

export default NftMarketplaceSectionTab2;
