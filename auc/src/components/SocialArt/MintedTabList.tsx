import React, { useEffect } from 'react';
import styles from './MintedTabList.module.scss';
import Image from 'next/image';
import { MintPost } from '../../types/mint';
import { FadeLoader } from 'react-spinners';
import moment from 'moment';
import MyTimer from '../LiverTimer/Mytimer';
import { useRouter } from 'next/router';
import { calculateAmountEarned } from '../../utils/snft';

type MintedTabListProps = {
  loading: boolean;
  mintPosts: MintPost[] | null;
  getEndDate: CallableFunction;
  Status: CallableFunction;
  handleMintPostUpdate: CallableFunction;
  profileId: string;
  accountId: string;
  socket: WebSocket;
};

export default function MintedTabList({
  loading,
  mintPosts,
  getEndDate,
  Status,
  handleMintPostUpdate,
  profileId,
  accountId,
  socket,
}: MintedTabListProps) {
  const [tokenPrice, setTokenPrice] = React.useState(4.29650254);
  const { push } = useRouter();
  const [filteredMintedPosts, setFilteredMintedPosts] = React.useState<
    MintPost[]
  >([]);

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
  return (
    <>
      <div className={styles.MainListBox}>
        {filteredMintedPosts.length > 0 && (
          <div className={styles.MainListHead}>
            <div className={`${styles.HeadLabel} ${styles.LabelOne}`}>Name</div>
            <div className={`${styles.HeadLabel} ${styles.LabelTwo}`}>
              Live Time Remaining
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelTwo}`}>
              Date Minted
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelThree}`}>
              Live Start Date
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelFour}`}>
              Live End Date
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelSix}`}>
              Status
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelFive}`}>
              Current Tier
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelSix}`}>
              Earned{' '}
              <Image src="/img/tbl_sort.png" alt="" width={16} height={16} />
            </div>
            <div className={`${styles.HeadLabel} ${styles.LabelSeven}`}></div>
          </div>
        )}
        <div className={styles.MainListShdo}>
          <div className={styles.MainListList}>
            {loading ? (
              <div className={styles.loadingContainer}>
                <FadeLoader color="#ffffff" />
              </div>
            ) : filteredMintedPosts.length ? (
              <div className={`${styles.RowLabel} ${styles.RowTwo}`}>
                {filteredMintedPosts.map((post, index) => {
                  return (
                    <div className={styles.MainListListInn} key={index}>
                      <div className={`${styles.RowLabel} ${styles.RowOne}`}>
                        <img
                          src={post.thumbnail}
                          alt=""
                          width={72}
                          height={72}
                        />
                        <div className={styles.RspnsvListtext}>
                          <div className={styles.TxtH3}>
                            <h3 className={styles.snftTitle}>
                              {post.SNFTTitle}
                            </h3>
                          </div>
                          <div className={styles.RspnsvEarn}>
                            <Image
                              src="/img/napa_icon_blue.png"
                              alt=""
                              width={17}
                              height={13}
                            />
                            {post.napaTokenEarned
                              ? `$${Number(post.napaTokenEarned).toFixed(2)}`
                              : `$${calculateAmountEarned(
                                  tokenPrice,
                                  post.payoutsCategory
                                )}`}
                            <span className={styles.DefSpan}>Earned</span>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Live Post Remaining</h4>
                        </div>
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
                      <div className={`${styles.RowLabel} ${styles.RowTwo}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Date Minted</h4>
                        </div>
                        <h6>{moment(post.timeMinted).format('D MMM YYYY')}</h6>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowThree}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Live Start Date</h4>
                        </div>
                        <h6>{moment(post.timeMinted).format('h:mm:ss a')}</h6>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Live End Date</h4>
                        </div>
                        <h6>{getEndDate(post.timeMinted)}</h6>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowFour}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Status</h4>
                        </div>
                        <h6>{Status(post.status)}</h6>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowFive}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Current Tier</h4>
                        </div>
                        <div className={styles.RspnsvIcnSpn}>
                          <Image
                            src="/img/napa_icon.png"
                            alt=""
                            width={17}
                            height={13}
                          />
                          <h6>{post.payoutsCategory}</h6>
                        </div>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowSix}`}>
                        <div className={styles.Rspnsvh4}>
                          <h4>Earned</h4>
                        </div>
                        <div className={styles.RspnsvIcnSpn}>
                          <Image
                            src="/img/napa_icon_blue.png"
                            alt=""
                            width={17}
                            height={13}
                          />
                          <h3 className={styles.BlueH6}>
                            {post.napaTokenEarned
                              ? `$${Number(post.napaTokenEarned).toFixed(2)}`
                              : `$${calculateAmountEarned(
                                  tokenPrice,
                                  post.payoutsCategory
                                )}`}
                          </h3>
                        </div>
                      </div>
                      <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                        <button
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <Image
                            src="/img/dotet_ic.png"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                          <li>
                            <a className="dropdown-item" href="#">
                              <Image
                                src="/img/gift_icon.png"
                                alt=""
                                width={20}
                                height={20}
                              />
                              Redeem Payout
                            </a>
                          </li>
                          <li>
                            {post.marketplace_listed == 'true' ? (
                              <a
                                className={`${
                                  post.status === '0' && styles.disabled
                                } dropdown-item`}
                                href="#"
                                onClick={() =>
                                  push(`snft-details?id=${post.snftId}`)
                                }
                              >
                                <Image
                                  src="/img/send_icon.png"
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                                Listed In Marketplace
                              </a>
                            ) : (
                              <a
                                className={`${
                                  post.status === '0' && styles.disabled
                                } dropdown-item`}
                                href="#"
                                onClick={() =>
                                  handleMintPostUpdate({
                                    mintId: post.mintId,
                                    postId: post.postId,
                                    profileId: profileId,
                                    marketplace_listed: 'true',
                                  })
                                }
                              >
                                <Image
                                  src="/img/send_icon.png"
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                                Submit to Marketplace
                              </a>
                            )}
                            <a className={`dropdown-item`}>
                              <Image
                                src="/img/send_icon.png"
                                alt=""
                                width={20}
                                height={20}
                              />
                              Ask DAVE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : !accountId ? (
              <h3 className={styles.noPostFound}>Wallet must be connected</h3>
            ) : (
              <h3 className={styles.noPostFound}>No post found</h3>
            )}
          </div>
        </div>
      </div>
      <div className={styles.MainTableTable}>
        <table className={styles.tableMain}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <th className={styles.tableTitle}>Name</th>
              <th className={styles.tableTitle}>Live Time Remaining</th>
              <th className={styles.tableTitle}>Date Minted</th>
              <th className={styles.tableTitle}>Live Start Date</th>
              <th className={styles.tableTitle}>Live End Date</th>
              <th className={styles.tableTitle}>Status</th>
              {/* <th className={styles.tableTitle}>Rewards Category</th> */}
              <th className={styles.tableTitle}>
                <div className={styles.earnedMain}>
                  Earned
                  <Image
                    src="/img/tbl_sort.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
              </th>
            </tr>
            <br />
          </thead>
          <tbody className={styles.tableBody}>
            {filteredMintedPosts.map((post, index) => {
              return (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.tableTd}>
                    <img src={post.thumbnail} alt="" width={72} height={72} />
                    <span style={{ marginLeft: '0.5rem' }}>
                      {post.SNFTTitle}
                    </span>
                  </td>
                  <td className={styles.tableTd}>
                   <div style={{display:"flex", justifyContent: "center"}}>
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
                  </td>
                  <td className={styles.tableTd}>
                    {moment(post.timeMinted).format('D MMM YYYY')}
                  </td>
                  <td className={styles.tableTd}>
                    {moment(post.timeMinted).format('h:mm:ss a')}
                  </td>
                  <td className={styles.tableTd}>
                    {moment(post.timeMinted).format('h:mm:ss a')}
                  </td>
                  <td className={styles.tableTd}>{Status(post.status)}</td>
                  <td className={styles.tableTd}>
                    <Image
                      src="/img/napa_icon.png"
                      alt=""
                      width={17}
                      height={13}
                    />{' '}
                    <span> {post.payoutsCategory}</span>
                  </td>
                  <td className={styles.tableTd}>
                    <div className={styles.colum}>
                      <Image
                        src="/img/napa_icon_blue.png"
                        alt=""
                        width={17}
                        height={13}
                      />
                      {post.napaTokenEarned
                        ? `$${Number(post.napaTokenEarned).toFixed(2)}`
                        : `$${calculateAmountEarned(
                            tokenPrice,
                            post.payoutsCategory
                          )}`}

                      <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                        <button
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          className={styles.btn}
                        >
                          <Image
                            src="/img/dotet_ic.png"
                            alt=""
                            width={24}
                            height={24}
                          />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                          <li>
                            <a className="dropdown-item" href="#">
                              <Image
                                src="/img/gift_icon.png"
                                alt=""
                                width={20}
                                height={20}
                              />
                              Redeem Payout
                            </a>
                          </li>
                          <li>
                            {post.marketplace_listed == 'true' ? (
                              <a
                                className={`${
                                  post.status === '0' && styles.disabled
                                } dropdown-item`}
                                href="#"
                                onClick={() =>
                                  push(`snft-details?id=${post.snftId}`)
                                }
                              >
                                <Image
                                  src="/img/send_icon.png"
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                                Listed In Marketplace
                              </a>
                            ) : (
                              <a
                                className={`${
                                  post.status === '0' && styles.disabled
                                } dropdown-item`}
                                href="#"
                                onClick={() =>
                                  handleMintPostUpdate({
                                    mintId: post.mintId,
                                    postId: post.postId,
                                    profileId: profileId,
                                    marketplace_listed: 'true',
                                  })
                                }
                              >
                                <Image
                                  src="/img/send_icon.png"
                                  alt=""
                                  width={20}
                                  height={20}
                                />
                                Submit to Marketplace
                              </a>
                            )}
                            <a className={`dropdown-item`}>
                              <Image
                                src="/img/send_icon.png"
                                alt=""
                                width={20}
                                height={20}
                              />
                              Ask DAVE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}