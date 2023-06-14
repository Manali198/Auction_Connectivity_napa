import React, { useEffect } from 'react';
import styles from './MintedTabInBox.module.scss';
import 'bootstrap-daterangepicker/daterangepicker.css';
// import Image from 'next/image';
import 'rc-slider/assets/index.css';
import { FadeLoader } from 'react-spinners';
import moment from 'moment';
import MyTimer from '../LiverTimer/Mytimer';
import { MintPost } from '../../types/mint';
import { useRouter } from 'next/router';
import { nftAddress } from '../../connectivity/addressHelpers/addressHelper';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { toast } from 'react-toastify';
import { ErrorIcon } from '../assets';
import { calculateAmountEarned, payoutsCategoryName } from '../../utils/snft';
import { redeemToken } from '../../services/MintApi';

type MintedTabInBoxProps = {
  loading: boolean;
  mintPosts: MintPost[] | null;
  getEndDate: CallableFunction;
  Status: CallableFunction;
  handleMintPostUpdate: CallableFunction;
  profileId: string;
  accountId: string;
  socket: WebSocket;
  handleGetMoreMintedPosts: (length: number) => void;
};

export default function MintedTabInBox({
  loading,
  mintPosts,
  Status,
  getEndDate,
  handleMintPostUpdate,
  profileId,
  accountId,
  socket,
  handleGetMoreMintedPosts,
}: MintedTabInBoxProps) {
  const [tokenPrice, setTokenPrice] = React.useState(4.29650254);
  const { push } = useRouter();
  const [filteredMintedPosts, setFilteredMintedPosts] = React.useState<
    MintPost[]
  >([]);
  const [redeemLoading, setRedeemLoading] = React.useState(false);

  useEffect(() => {
    if (mintPosts) {
      const temp = mintPosts?.filter((p) => p?.profileId === profileId);
      setFilteredMintedPosts(temp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintPosts, profileId]);

  useEffect(() => {
    // @ts-ignore
    socket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'napa-token-price') {
        setTokenPrice(response?.price);
      }
    });
    return () => {
      socket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetDetails = (id: string | undefined) => {
    if (!id) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: 'Submit to Marketplace first',
          time: 'Now',
        })
      );
    } else {
      push(`/snft-details?id=${id}`);
    }
  };

  const handleScroll = (element: any) => {
    if (element.id != 'scrollContainer') return;

    if (
      element.scrollTop + element.clientHeight === element.scrollHeight &&
      !loading
    ) {
      handleGetMoreMintedPosts(mintPosts?.length || 0);
    }
  };

  const handleRedeemToken = async (postId: string) => {
    setRedeemLoading(true);
    await redeemToken(postId);
    setRedeemLoading(false);
  };

  return loading && !filteredMintedPosts?.length ? (
    <div className={styles.loadingContainer}>
      <FadeLoader color="#ffffff" />
    </div>
  ) : filteredMintedPosts.length ? (
    <div className={styles.MintedScrollMiddle}>
      <div
        id="scrollContainer"
        className={styles.MintedMiiddle}
        onScrollCapture={(e) => handleScroll(e.target)}
      >
        {filteredMintedPosts.map((post, index) => {
          return (
            <div key={`post ${index}`} className={styles.LeftMiddle}>
              <div className={styles.DarknesBox}>
                <div className={styles.DarkimgBox}>
                  <img
                    className={styles.DarkimgBoxImg}
                    src={post.thumbnail}
                    alt=""
                    width={105}
                    height={105}
                    onClick={() => handleGetDetails(post.snftId)}
                  />
                  <div className={styles.DarinHedh}>
                    <h3
                      className={styles.DariH}
                      onClick={() => handleGetDetails(post.snftId)}
                    >
                      {post.SNFTTitle}{' '}
                    </h3>
                    <h6>
                      <span>Etherscan Address:</span>{' '}
                      <a
                        href={
                          'https://goerli.etherscan.io/address/0x20bf1A09C7C7211ead72dE3d96bC129CD2BFE743'
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        {nftAddress}
                      </a>
                    </h6>
                    <h6>
                      <span>Token Id:</span>{' '}
                      {post.tokenId?.toString()?.padStart(7, '0')}
                    </h6>
                    <div className={styles.DarinImgpspan}>
                      <h2>
                        {post.napaTokenEarned
                          ? `$${Number(post.napaTokenEarned).toFixed(2)}`
                          : `$${calculateAmountEarned(
                              tokenPrice,
                              post.payoutsCategory
                            )}`}{' '}
                        <span>USD Earned (Paid in NAPA Tokens)</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className={styles.DarkiBoxmiddata}>
                  <div className={styles.DarkiBxhpdata}>
                    <p>Date Minted</p>
                    <h3>{moment(post.timeMinted).format('D MMM YYYY')}</h3>
                  </div>
                  <div className={styles.DarkiBxhpdata}>
                    <p>Live Start Time</p>
                    <h3>{moment(post.timeMinted).format('h:mm:ss a')}</h3>
                  </div>
                  <div className={styles.DarkiBxhpdata}>
                    <p>Live End Time</p>
                    <h3>{getEndDate(post.timeMinted)}</h3>
                  </div>
                  {/* <div className={styles.DarkiBxhpdata}>
                    <p>Rewards Category</p>
                    <h3>{post.payoutsCategory}</h3>
                  </div> */}
                  <div className={styles.DarkiBxhpdata}>
                    <p>Status</p>
                    <h3>{Status(post.status)}</h3>
                  </div>
                  <div className={styles.DarkiBxhpdata}>
                    <p>Payouts Category</p>
                    <h3>{payoutsCategoryName(post.payoutsCategory)}</h3>
                  </div>
                </div>
                <div className={styles.DarkiBoxbtnlst}>
                  <button
                    onClick={() => handleRedeemToken(post.postId)}
                    className={`${styles.DarkiDarbtn} ${
                      (post.closingDate || post.status == "0") && styles.disabledSubmitMarketBtn
                    }`}
                    disabled={post.closingDate != '' || redeemLoading}
                  >
                    Redeem Payout
                  </button>
                  {post.marketplace_listed == 'true' ? (
                    <button
                      onClick={() => push(`snft-details?id=${post.snftId}`)}
                      className={`${styles.DarkiDarbtn} ${
                        post.status === '0' && styles.disabledSubmitMarketBtn
                      }`}
                    >
                      Listed In Marketplace
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        handleMintPostUpdate({
                          mintId: post.mintId,
                          postId: post.postId,
                          profileId: profileId,
                          marketplace_listed: 'true',
                        })
                      }
                      className={`${styles.DarkiDarbtn} ${
                        (post.status === '0' || !post.closingDate) &&
                        styles.disabledSubmitMarketBtn
                      }`}
                      disabled={post.status === '0' || !post.closingDate}
                    >
                      Submit to Marketplace
                    </button>
                  )}
                  <button className={styles.DarkiDarbtn}>Ask DAVE</button>
                </div>
                <div className={styles.timer}>
                  <MyTimer
                    // @ts-ignore
                    expiryTimestamp={new Date(post.timeMinted).setHours(
                      new Date(post.timeMinted).getHours() + 1
                    )}
                    postId={post.postId}
                    napaTokenEarned={post.napaTokenEarned}
                    socket={socket}
                    amountEarned={calculateAmountEarned(
                      tokenPrice,
                      post.payoutsCategory
                    )}
                    tokenPrice={tokenPrice}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {loading && mintPosts?.length ? (
        <div className={styles.loadingMoreData}>
          <FadeLoader color="#ffffff" />
        </div>
      ) : (
        mintPosts?.length && (
          <div className={styles.noMoreData}>
            <p>The End of the Line</p>
          </div>
        )
      )}
    </div>
  ) : !accountId ? (
    <h3 className={styles.noPostFound}>Wallet must be connected</h3>
  ) : (
    <h3 className={styles.noPostFound}>No post found</h3>
  );
}
