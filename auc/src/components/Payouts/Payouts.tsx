import type { NextPage } from 'next';
import Container from '../../Layout/Container/Container';
import styles from './Payouts.module.scss';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Footer from '../Footer/Footer';
// import { numberFormatter } from '@/utils/payout';
import React, { useEffect } from 'react';
import {
  getTotalNapaUsersCount,
  getUsersCount,
} from '../../services/PayoutsApi';
import { SOCIAL_ART_WEBSOCKET_URL, WEBSOCKET_URL } from '../../constants/url';
import Tippy from '@tippyjs/react';

const headerViralTier = [
  'Rewards Categories',
  'Reward Tiers Cap',
  '% Value',
  'Value in NAPA Tokens',
  'Value in USD',
];
const headerEatherTransactions = [
  'Txn Hash',
  'Method',
  // 'block',
  'Age',
  'From',
  'To',
  'Value',
  'Txn Fee',
];
const dummyViralTiers = [
  {
    viralCat: 'Step Your Game Up',
    rewardTier: '-',
    bonus: 20,
    valueInNAPA: 0.2,
  },
  {
    viralCat: 'On Your Way to Stardom',
    rewardTier: '-',
    bonus: 40,
    valueInNAPA: 0.4,
  },
  {
    viralCat: 'This Post is Fire',
    rewardTier: '-',
    bonus: 60,
    valueInNAPA: 0.6,
  },
  {
    viralCat: 'Wait, Did You See That...',
    rewardTier: '-',
    bonus: 80,
    valueInNAPA: 0.8,
  },
  {
    viralCat: 'NAPA Sensation',
    rewardTier: '-',
    bonus: 100,
    valueInNAPA: 1.0,
  },
];

const dummyEatherScanTransactions = [
  {
    txnHash: '',
    method: 'Transfer',
    // block: '',
    age: '9 sec ago',
    from: 'napasociety.eth',
    to: 'Users Profile Name',
    value: '0.00000000',
    txnFee: '0.00000000',
  },
];

const Payouts: NextPage = () => {
  const [usersCount, setUsersCount] = React.useState<any>();
  const [totalUsers, setTotalUsers] = React.useState('');
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  const socket = new WebSocket(WEBSOCKET_URL);
  const [tokenPrice, setTokenPrice] = React.useState(4.29650254);
  let prevRewardsCap = 20 * 0.0005;

  const handleGetUsersCount = async () => {
    const { data }: any = await getUsersCount();
    setUsersCount(data?.data || null);
    console.log(usersCount);
  };

  const handleGetTotalNapaUsersCount = async () => {
    const { data }: any = await getTotalNapaUsersCount();
    setTotalUsers(data?.data?.totalUsers || null);
  };

  useEffect(() => {
    handleGetUsersCount();
    handleGetTotalNapaUsersCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'users-count') {
        setUsersCount(response?.count);
      } else if (response?.event === 'napa-token-price') {
        setTokenPrice(response?.price);
      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // @ts-ignore
    socket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'total-users') {
        setTotalUsers(response?.totalUsers);
      }
    });
    return () => {
      socket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countForamatter = (count: number) => {
    const total = count
      ? count < 10
        ? '00' + count
        : count < 100
        ? '0' + count
        : count
      : '000';
    return total;
  };

  return (
    <>
      <div className={styles.backgroundImage} id="payouts">
        <Container className={`${styles.payoutsContainer} asinnerContainer`}>
          <div className={`row col-12 ${styles.payoutsBodyContainer} `}>
            <div className={`col-xl-12 col-md-12`}>
              <h1 className={`${styles.payouts}`}>
                NAPA <span>Payouts</span>
              </h1>

              <div className={styles.tabsContainer}>
                <div className="col-xl-9 col-md-9 col-sm-7">
                  <div className="">
                    <div className={`${styles.napaTokenPriceContainer}`}>
                      <div className={`pt-2 ${styles.payoutsText}`}>
                        NAPA Token Price
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div
                          className={`align-self-center ${styles.payoutsText}`}
                        >
                          <Image
                            src={'/assets/images/napa_icon.png'}
                            alt="NAPA"
                            width={30}
                            height={30}
                            loading="eager"
                            priority={true}
                          />
                        </div>
                        <div
                          className={`text-white ${styles.payoutsSubTextValue}`}
                        >
                          <span style={{marginLeft:'10px'}}>{tokenPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2 d-flex justify-content-between">
                    <div
                      className={`${styles.payoutUserDetail} d-flex justify-content-between flex-column`}
                    >
                      <div className={`${styles.payoutsSubText}`}>
                        Total NAPA Users
                      </div>
                      <div
                        className={`text-white ${styles.payoutsSubTextValue} pt-2`}
                      >
                        {countForamatter(Number(totalUsers))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div
                  className={`col-xl-2 col-md-3 col-sm-5 border mx-2 ${styles.payoutsMetaHuman}`}
                  style={{ borderColor: '#91A5A6', opacity: 0.2 }}
                > */}
                {/* <div
                    className={`d-flex  p-2 justify-content-center ${styles.payoutsText} ${styles.payoutsCharisImag}`}
                  >
                    Insert Chris */}
                {/* <Image
                      src={'/assets/images/avatar-dummy.png'}
                      alt="Trending"
                      layout="fill"
                      objectFit="contain"
                      loading="eager"
                      priority={true}
                      // style={{
                      //   alignItems: 'center',
                      //   alignSelf: 'center',
                      // }}
                    /> */}
                {/* </div> */}
                {/* </div> */}
              </div>

              <div
                className={`${styles.socialMediaReviewContainer} otherscroll`}
              >
                <div className=" my-4">
                  <div className={`${styles.payoutsText} text-white`}>
                    NAPA Rewards Categories
                  </div>
                  <div className={`${styles.payoutsTableRow} text-white my-2`}>
                    The reward % Value is a percentage of the current token
                    price and payout amounts will fluctuate based on the NAPA
                    token trading activity.
                  </div>
                  <div className={styles.tableContainer}>
                    <Table responsive>
                      <thead>
                        <tr>
                          {headerViralTier.map((item, index) => (
                            <>
                              {item == 'Reward Tiers Cap' ? (
                                <td
                                  key={index}
                                  className={styles.payoutsTableHead}
                                >
                                  {item}
                                  <Tippy
                                    className="toolTipContainer"
                                    placement="top"
                                    content={
                                      <div>
                                        <p style={{ textAlign: 'left' }}>
                                          The total number of rewards received
                                          for your post during the live period
                                          must meet or exceed this number to
                                          determine which category your post
                                          will be considered for NAPA token
                                          payout after your live period has
                                          expired.
                                          <br></br>
                                          <br></br>
                                          For example, if{' '}
                                          <strong>Step Your Game Up</strong> has
                                          an rewards cap of 5 rewards recieved
                                          for your post, then your post nust
                                          have recieved 5 awards or more to be
                                          in this category.
                                        </p>
                                      </div>
                                    }
                                  >
                                    <img
                                      src={'/assets/images/info_icon.png'}
                                      alt="Trending"
                                      style={{
                                        marginLeft: '6px',
                                        cursor: 'pointer',
                                      }}
                                      width={20}
                                      height={20}
                                    />
                                  </Tippy>
                                </td>
                              ) : (
                                <td
                                  key={index}
                                  className={styles.payoutsTableHead}
                                >
                                  {item}
                                </td>
                              )}
                            </>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dummyViralTiers.map((item, index) => {
                          prevRewardsCap =
                            index == 0
                              ? prevRewardsCap
                              : prevRewardsCap * 0.2 + prevRewardsCap;
                          return (
                            <tr key={index} className={styles.payoutsTableRow}>
                              <td>{item.viralCat}</td>
                              <td>{(prevRewardsCap / 10).toFixed(8)}</td>
                              <td>{`${item.bonus.toFixed(2)}%`}</td>
                              <td>
                                <div>
                                  <Image
                                    src={'/assets/images/napa_white_icon.png'}
                                    alt="Trending"
                                    loading="eager"
                                    priority={true}
                                    width={10}
                                    height={10}
                                  />
                                  <span style={{ marginLeft: '0.5rem' }}>
                                    {item.valueInNAPA.toFixed(8)}
                                  </span>
                                </div>
                              </td>
                              <td>
                                {(tokenPrice * item.valueInNAPA).toFixed(8)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className=" my-4">
                  <div className={`${styles.payoutsText} text-white`}>
                    NAPA Payouts Transactions
                  </div>
                  <div className={styles.tableContainer}>
                    <Table responsive>
                      <thead>
                        <tr>
                          {headerEatherTransactions.map((item, index) => (
                            <td key={index} className={styles.payoutsTableHead}>
                              {item}
                            </td>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {dummyEatherScanTransactions.map((item, index) => (
                          <tr key={index} className={styles.payoutsTableRow}>
                            <td className={styles.textColor}>{item.txnHash}</td>
                            <td>{item.method}</td>
                            {/* <td className={styles.textColor}>{item.block}</td> */}
                            <td>{item.age}</td>
                            <td className={styles.textColor}>{item.from}</td>
                            <td className={styles.textColor}>{item.to}</td>
                            <td>
                              <div>
                                <Image
                                  src={'/assets/images/napa_white_icon.png'}
                                  alt="NAPA"
                                  loading="eager"
                                  priority={true}
                                  width={10}
                                  height={10}
                                />
                                {item.value}
                              </div>
                            </td>
                            <td>
                              <div>
                                <Image
                                  src={'/assets/images/napa_white_icon.png'}
                                  alt="NAPA"
                                  loading="eager"
                                  priority={true}
                                  width={10}
                                  height={10}
                                />
                                {item.txnFee}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
                {/* <Footer footerIconShow /> */}
              </div>
              <div>
                <hr />
                <Footer footerIconShow={false} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Payouts;
