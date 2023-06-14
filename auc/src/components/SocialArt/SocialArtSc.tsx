import Container from '../../Layout/Container/Container';
// import Footer from '../Footer/Footer';
import styles from './SocialArt.module.scss';
import React, { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FeedTab from './FeedTab';
import MintedPostsTab from './MintedPostsTab';
import MintedTabInBox from './MintedTabInBox';
import MintedTabList from './MintedTabList';
import { SOCIAL_ART_WEBSOCKET_URL } from '../../constants/url';
import { MintPost } from '../../types/mint';
import { useRouter } from 'next/router';
import { getAllMintedPosts } from '../../services/MintApi';
import moment from 'moment';
// import { toast } from 'react-toastify';
// import { CustomToastWithLink } from '../CustomToast/CustomToast';
// import { ErrorIcon } from '../assets';
import useProfile from '../../hooks/useProfile';
import useWebThree from '@/hooks/useWebThree';

export default function SocialArtSc() {
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  const { profileId, profileDetails } = useProfile();
  const [view, setView] = React.useState(true);
  const handlelistView = (val: boolean) => {
    setView(val);
  };
  const [loading, setLoading] = React.useState(false);
  const [mintPosts, setMintPosts] = React.useState<MintPost[] | null>(null);
  const { push } = useRouter();
  const { metaMaskAccount, napaWalletAccount } = useWebThree()

  const handleGetMintPosts = async () => {
    setLoading(true);
    const { data }: any = await getAllMintedPosts(
      // @ts-ignore
      (napaWalletAccount?.subAcWalletAddress || metaMaskAccount),
      mintPosts?.length || 0
    );
    setMintPosts(data?.data || []);
    setLoading(false);
  };

  const handleNewMint = (post: any) => {
    setMintPosts((prevState) => {
      if (prevState) {
        const data = [post, ...prevState];
        const filteredPost = data.filter(
          (v, i, a) => a.findIndex((v2) => v2?.postId === v?.postId) === i
        );
        return [...filteredPost];
      } else {
        let data = [];
        // @ts-ignore
        data.push(post);
        return [...data];
      }
    });
  };

  useEffect(() => {
    if (profileId) {
      handleGetMintPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      // @ts-ignore
      if (response?.event === `mints-${napaWalletAccount?.subAcWalletAddress || metaMaskAccount}`) {
        handleNewMint(response?.posts);
      } else if (response?.event === 'mint-post-status-update') {
        handleMintPostStatusUpdate(response?.mintId, response?.mint);
      } else if (response?.event === 'payout-category-update') {
        handlePayoutCategoryUpdate(
          response?.post?.postId,
          response?.post?.payoutsCategory
        );
      } else if (response?.event === 'redeem-token') {
        handleRedeemTokenUpdate(
          response?.post?.postId,
          response?.post?.closingDate
        );
      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMintPostStatusUpdate = (mintId: string, mint: MintPost) => {
    setMintPosts((prevState) => {
      const temp = prevState ? prevState : [];
      const index = temp.findIndex((m) => m.mintId == mintId);
      if (index > -1) {
        temp[index] = mint;
      }
      return temp;
    });
  };

  const handlePayoutCategoryUpdate = (
    postId: string,
    payoutsCategory: string
  ) => {
    setMintPosts((prevState) => {
      const temp = prevState ? prevState : [];
      const index = temp.findIndex((m) => m.postId == postId);
      if (index > -1) {
        //@ts-ignore
        temp[index].payoutsCategory = payoutsCategory;
      }
      return temp;
    });
  };

  const handleRedeemTokenUpdate = (postId: string, closingDate: string) => {
    setMintPosts((prevState) => {
      const temp = prevState ? prevState : [];
      const index = temp.findIndex((m) => m.postId == postId);
      if (index > -1) {
        //@ts-ignore
        temp[index].closingDate = closingDate;
      }
      return temp;
    });
  };

  const getEndDate = (timestamp: any) => {
    const date = new Date(timestamp).getTime();
    const endTime = new Date(date + 12 * 3600 * 1000);
    return moment(endTime).format('h:mm:ss a');
  };

  const handleMintPostUpdate = async (data: any) => {
    setLoading(true);
    // const { message, error } = await updatePostMint(data);
    setLoading(false);
    push(`/list-item?id=${data.mintId}`);
    // if (error) {
    //   setLoading(false);
    //   toast.error(
    //     CustomToastWithLink({
    //       icon: ErrorIcon,
    //       title: 'Error',
    //       description: message,
    //       time: 'Now',
    //     })
    //   );
    //   return;
    // }
    setLoading(false);
  };

  const Status = (statusVal: string) => {
    if (statusVal == '0') {
      return 'Live Post';
    }
    if (statusVal == '1') {
      return 'Sent for Review';
    }
    if (statusVal == '2') {
      return 'In Progress';
    }
    if (statusVal == '3') {
      return 'Pending Further Review';
    }
    if (statusVal == '4') {
      return 'Approved';
    }
    if (statusVal == '5') {
      return 'Declined';
    }
    return;
  };

  const handleGetMoreMintedPosts = async (length: number) => {
    setLoading(true);
    const { data }: any = await getAllMintedPosts(profileDetails.metamaskAccountNumber, length || 0);
    const moreData = data?.data || [];

    //@ts-ignore
    setMintPosts((prev) => [...prev, ...moreData]);
    setLoading(false);
  };

  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <h1 className={styles.settings}>Social Art</h1>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="default_tab mb-30"
        >
          <Tab eventKey="home" title="NAPA Society Posts">
            <FeedTab socket={socialArtSocket} mintPosts={mintPosts} />
          </Tab>
          <Tab eventKey="profile" title="My Active SNFTs">
            <MintedPostsTab getval={handlelistView} />
            <div className="tab-content" id="nav-tabContent">
              {view ? (
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <MintedTabInBox
                    loading={loading}
                    mintPosts={mintPosts}
                    getEndDate={getEndDate}
                    Status={Status}
                    handleMintPostUpdate={handleMintPostUpdate}
                    profileId={profileId}
                    accountId={
                      // @ts-ignore
                      napaWalletAccount?.subAcWalletAddress || metaMaskAccount}
                    socket={socialArtSocket}
                    handleGetMoreMintedPosts={handleGetMoreMintedPosts}
                  />
                </div>
              ) : (
                <div
                  className="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <MintedTabList
                    loading={loading}
                    profileId={profileId}
                    accountId={
                      // @ts-ignore
                      napaWalletAccount?.subAcWalletAddress || metaMaskAccount}
                    mintPosts={mintPosts}
                    getEndDate={getEndDate}
                    Status={Status}
                    handleMintPostUpdate={handleMintPostUpdate}
                    socket={socialArtSocket}
                  />
                </div>
              )}
            </div>
          </Tab>
        </Tabs>
      </Container>
      {/* <div>
        <hr />
        <Footer footerIconShow={false} />
      </div> */}
    </div>
  );
}
