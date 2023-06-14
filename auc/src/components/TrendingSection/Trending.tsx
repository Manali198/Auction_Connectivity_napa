// import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import type { NextPage } from 'next';
import styles from './Trending.module.scss';
import { API_URL } from '../../constants/url';
import useProfile from '../../hooks/useProfile';
import useWebThree from '../../hooks/useWebThree';
import Container from '../../Layout/Container/Container';

import { ErrorIcon, WalletNeedsToConnected } from '../assets';
import Tab from '../Tab/Tab';
// import SocialMediaReview from '../SocialMediaReview/SocialMediaReview';
// import ChatWindow from '../ChatWindow/ChatWindow';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { ToastDescription, ToastTitle } from '../../typing/toast';
import Footer from '../Footer/Footer';
// import Image from 'next/image';
import axios from 'axios';
import moment from 'moment';
// import { indexOf } from 'lodash';

const trendingTabList = [
  {
    title: 'Social Media',
    value: 'SOCIAL',
  },
  {
    title: 'NFT’s',
    value: 'NFT',
  },
  {
    title: 'Twitter',
    value: 'Twitter',
  },
];

type TrendingSectionProps = {
  socket: any;
};

const TrendingSection: NextPage<TrendingSectionProps> = ({ socket }) => {
  const [tab, setTab] = useState('SOCIAL');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  // const [openIndex, setOpenIndex] = useState<null | number>(null);
  const { account } = useWebThree();
  const { profileDetails } = useProfile();

  const handleTrending = (trending: any) => {
    //@ts-ignore
    setTrendingList((prevState) => {
      if (prevState) {
        const data = [...prevState, trending];
        const filteredTrending = data.filter(
          (v, i, a) => a.findIndex((v2) => v2?.articleId === v?.articleId) === i
        );
        return [...filteredTrending];
      } else {
        let data = [];
        // @ts-ignore
        data.push(trending);
        return [...data];
      }
    });
  };

  const handleNewMessage = (
    channel: string,
    message: string,
    timetoken: string,
    uuid: string
  ) => {
    const newMessage = {
      channel: channel,
      message: message,
      messageType: null,
      timetoken: timetoken,
      uuid: uuid,
    };
    //@ts-ignore
    setMessages((prevMessage) => {
      if (prevMessage) {
        const data = [...prevMessage, newMessage];
        const filteredMessages = data.filter(
          (v, i, a) => a.findIndex((v2) => v2.timetoken === v.timetoken) === i
        );
        return [...filteredMessages];
      } else {
        let data = [];
        // @ts-ignore
        data.push(newMessage);
        return [...data];
      }
    });
  };

  useEffect(
    () => {
      // @ts-ignore
      socket.addEventListener('message', ({ data }) => {
        const response = JSON.parse(data);
        if (response?.event === 'message') {
          handleNewMessage(
            response?.message?.channel,
            response?.message?.message,
            response?.message?.timetoken,
            response?.message?.publisher
          );
        }
        if (response?.event === 'trending') {
          const response = JSON.parse(data);
          handleTrending(response?.trending);
        }
      });
      return () => {
        socket.removeEventListener('message', () => {});
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [
      // openIndex
    ]
  );

  const fetchTrending = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/trending/feed/list?status=${1}`);
      setTrendingList(res?.data?.data);
    } catch (error) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.ERROR,
          description: ToastDescription.ERROR,
          time: 'Now',
        })
      );
    }
  }, [setTrendingList]);

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await axios.get(`${API_URL}/chat/messages`);
      setMessages(res?.data?.data?.messages);
    } catch (error) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.ERROR,
          description: ToastDescription.ERROR,
          time: 'Now',
        })
      );
    }
  }, [setMessages]);

  const messageHandler = useCallback(async () => {
    try {
      if (account && profileDetails?.metamaskAccountNumber) {
        await axios.post(`${API_URL}/chat/send`, {
          message: message,
          from: profileDetails?.profileName,
          avatar: profileDetails?.avatar,
        });
        setMessage('');
        return;
      }
      if (!account) {
        setMessage('');
        toast.error(
          CustomToastWithLink({
            icon: WalletNeedsToConnected,
            title: ToastTitle.WALLET_NEEDS_TO_CONNECTED,
            description: ToastDescription.WALLET_NEEDS_TO_CONNECTED,
            time: 'Now',
          })
        );
        return;
      }
      setMessage('');
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.PROFILE_NEEDS_TO_BE_UPDATED,
          description: ToastDescription.PROFILE_NEEDS_TO_BE_UPDATED,
          time: 'Now',
        })
      );
    } catch (error) {
      setMessage('');
      console.log('Unable to fetch messages');
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.ERROR,
          description: ToastDescription.ERROR,
          time: 'Now',
        })
      );
    }
  }, [message, account, profileDetails]);

  // const [chatPerson, setChatPerson] = useState('');

  return (
    <>
      {/* <div
        style={{
          zIndex: -1,
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        className={styles.background}
      >
        <Image
          src="/assets/images/tdb.webp"
          alt="Trending"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority={true}
        />
      </div> */}
      <div className={styles.backgroundImage} id="trending">
        <Container className={`${styles.trendingContainer} asinnerContainer`}>
          <div className={styles.trendingBodyContainer}>
            <div className={styles.trending}>
              <div className={styles.trendingContainerAll}>
                <div className={styles.trendingContainerOne}>
                  {/* <div className={styles.trendingOpacityContainer}></div> */}
                  <div>
                    <h1 className={styles.trendingHeading}>Trending Topics</h1>
                  </div>
                  <div className={styles.scrol}>
                    {Array.from({ length: 14 }).map((_, index) => {
                      return (
                        <div key={index} className={styles.cryptoTextContainer}>
                          <div className={styles.cryptoTextDiv}>
                            <div className={styles.cryptoTextContainer1}>
                              1 . Crypto
                            </div>
                            <div className={styles.cryptoTextContainer2}>
                              224 posts
                            </div>
                          </div>
                          <div className={styles.cryptoHeading}>
                            Cryptocurrencies
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.trendingContainerTwo}>
                  {/* <div className={styles.backColor}></div> */}
                  <div>
                    <h1 className={styles.trendingHeading}>
                      Trending Articles
                    </h1>
                  </div>

                  <div className={styles.articlesTabsContainer}>
                    {trendingTabList.map(({ title, value }, index) => (
                      <Tab
                        value={value}
                        key={index}
                        setTab={setTab}
                        title={title}
                        tab={tab}
                      />
                    ))}
                  </div>
                  <div className={styles.scrol1}>
                    {trendingList &&
                      trendingList.length &&
                      trendingList
                        .filter(({ articleType }) => articleType === tab)
                        .map(
                          (
                            {
                              articleTitle,
                              author,
                              createdAt,
                              userProfilePic,
                              articleBody,
                              articlesTags,
                            },
                            index
                          ) => {
                            return (
                              <div key={index}>
                                <div>
                                  <h6 className={styles.articleText1}>
                                    {articleTitle}
                                  </h6>
                                </div>
                                <div className={styles.articleProfileContainer}>
                                  <div className={styles.articleProfilePic}>
                                    <img
                                      src={
                                        userProfilePic
                                          ? userProfilePic
                                          : '/assets/images/img_avatar.png'
                                      }
                                      width={32}
                                      height={32}
                                      style={{ borderRadius: '100%' }}
                                    />
                                  </div>
                                  <div
                                    className={
                                      styles.articleProfieTextContainer1
                                    }
                                  >
                                    <div
                                      className={styles.articleProfileNameText}
                                    >
                                      <span>{author}</span>
                                    </div>
                                    <div className={styles.articleProfieDate}>
                                      <span>
                                        {moment(createdAt).format(
                                          'DD MMMM YYYY'
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className={styles.allPeragraphMain}>
                                  <div
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{
                                      __html: articleBody,
                                    }}
                                  ></div>
                                  <div className={styles.ulPerent}>
                                    <ul>
                                      {articlesTags &&
                                        articlesTags
                                          //@ts-ignore
                                          .split(',')
                                          .map((tag: any, index: number) => {
                                            return (
                                              <li key={`article-tag-${index}`}>
                                                <p>{tag}</p>
                                              </li>
                                            );
                                          })}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                  </div>
                </div>
                <div className={styles.trendingContainerThree}>
                  {/* <div className={styles.backColorChat}></div> */}
                  <div className={styles.chatsContainers}>
                    <div
                      style={{
                        paddingBottom: '1.5rem',
                        position: 'relative',
                        zIndex: '2',
                      }}
                    >
                      <h1 className={styles.chatsHeadingContainer}>Chat</h1>
                    </div>
                    <div className={styles.scrol} style={{ height: '90%' }}>
                      {messages &&
                        messages.length > 0 &&
                        messages.map(({ message }: any, index: number) => {
                          return (
                            <div
                              key={index}
                              className={styles.profileChatsContainer}
                            >
                              <div className={styles.chatProfile}>
                                <img
                                  src={
                                    profileDetails?.avatar
                                      ? profileDetails.avatar
                                      : '/assets/images/img_avatar.png'
                                  }
                                  width={34}
                                  height={34}
                                  style={{ borderRadius: '100%' }}
                                />
                                <div className={styles.chatsNameContainerDiv}>
                                  {' '}
                                  <h6>{message.from}</h6>
                                </div>
                              </div>
                              <div className={styles.chatPera}>
                                <p>{message.text}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      position: 'relative',
                      width: '100%',
                    }}
                  >
                    <input
                      className={styles.textField}
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (!message) {
                          return;
                        }
                        if (e.key === 'Enter') {
                          messageHandler();
                          setMessage('');
                        }
                      }}
                      placeholder="Message.."
                    />
                    <a className={styles.chatBtn} href="#">
                      <button
                        onClick={() => {
                          if (!message) return;
                          messageHandler();
                          setMessage('');
                        }}
                      >
                        Send
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* <h1 className={styles.trending}>
                Whats <span>Trending</span>
              </h1>
              <div className={styles.tabsContainer}>
                <div className={styles.tabsInnerContainer}>
                  <ul className={styles.tab}>
                    {trendingTabList.map(({ title, value }, index) => ( 
                      <Tab
                        key={index}
                        setTab={setTab}
                        title={title}
                        tab={tab}
                        value={value}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`${styles.socialMediaReviewContainer} otherscroll`}
              >
                {trendingList &&
                  trendingList.length &&
                  trendingList
                    .filter(({ articleType }) => articleType === tab)
                    .map(
                      (
                        {
                          articleTitle,
                          author,
                          createdAt,
                          articleBody,
                          userProfilePic,
                          articleTags,
                        },
                        index
                      ) => {
                        return (
                          <SocialMediaReview
                            key={`social-media-${index}`}
                            currentIndex={index}
                            description={articleTitle}
                            articleBody={articleBody}
                            date={createdAt}
                            icon={
                              userProfilePic ? userProfilePic : "/assets/images/img_avatar.png"
                            }
                            openIndex={openIndex}
                            setOpenIndex={setOpenIndex}
                            username={author}
                            onChatClicked={() => setChatPerson(articleTitle)}
                            articlesTags={articleTags}
                          />
                        );
                      }
                    )}
              </div> */}
            </div>
            {/* <div className={`col-xl-5 col-md-12 ${styles.rightSideContainer}`}>
              <h2 className={styles.TrendingTitle}>{chatPerson}</h2>
              <ChatWindow
                setMessage={setMessage}
                message={message}
                messageHandler={messageHandler}
                messages={messages}
              />
            </div> */}
          </div>
        </Container>

        <div>
          <hr />
          <Footer footerIconShow />
        </div>
      </div>
    </>
  );
};

export default TrendingSection;
