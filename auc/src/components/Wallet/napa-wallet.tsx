import Container from '@/Layout/Container/Container';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './WalletTwo.module.scss';
import {
  // ErrorIcon,
  EthereumBlackIcon,
  EtheriumIcon,
  MoneyReceived,
  MoneySend,
  NapaIcon,
  SearchIcon,
  Settings,
  shareIcon,
} from '../assets';
import ImportTokensModal from '../ImportTokensModal/ImportTokensModal';
import { useRouter } from 'next/router';
import useProfile from '@/hooks/useProfile';
import {
  getCustomTokenWalletBalance,
  getNativeTokenWalletBalance,
  getTransactionHistory,
} from '@/services/AssetManagement';
import moment from 'moment';
import Select from 'react-select';
import { Image } from 'react-bootstrap';
import { getImportedTokens } from '@/services/Tokens';
import useWebThree from '@/hooks/useWebThree';
import { FadeLoader } from 'react-spinners';
import { WEBSOCKET_URL } from '@/constants/url';
import { 
  // deleteCookie,
   getCookie, setCookie } from 'cookies-next';

const options = [
  {
    value: '0',
    label: (
      <div className={styles.optionContainer}>
        <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
        <span>Ethereum</span>
      </div>
    ),
  },
  {
    value: '1',
    label: (
      <div className={styles.optionContainer}>
        <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
        <span>Goerli Testnet</span>
      </div>
    ),
  },
  {
    value: '2',
    label: (
      <div className={styles.optionContainer}>
        <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
        <span>Sepolia Testnet</span>
      </div>
    ),
  },
  // {
  //   value: '1',
  //   label: (
  //     <div className={styles.optionContainer}>
  //       <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
  //       <span>Smart Chain</span>
  //     </div>
  //   ),
  // },
  // {
  //   value: '2',
  //   label: (
  //     <div className={styles.optionContainer}>
  //       <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
  //       <span>Smart Chain Testnet</span>
  //     </div>
  //   ),
  // },
  {
    value: '5',
    label: (
      <div className={styles.optionContainer}>
        <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
        <span>Polygon</span>
      </div>
    ),
  },
  {
    value: '6',
    label: (
      <div className={styles.optionContainer}>
        <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
        <span>Mumbai Testnet</span>
      </div>
    ),
  }
];
const WalletTwo = () => {
  const chaiId = '0x5';
  const [open, setOpen] = useState(false);
  const { push } = useRouter();
  const [balance, setBalance] = useState<number>(0);
  const [history, setHistory] = useState<any>();
  const { profileDetails } = useProfile();
  const [networkType, setNetworkType] = React.useState<any>();
  const [loading, setLoading] = useState(false);
  const { napaWalletAccount } = useWebThree();
  const [tokensList, setTokensList] = useState<any>();
  const socket = new WebSocket(WEBSOCKET_URL);
  // const [showing, setShowing] = useState(false);

// @ts-ignore
  useEffect(() => {
    // // @ts-ignore
    // if(!napaWalletAccount?.subAcWalletAddress) {
    //   toast.error(
    //     CustomToastWithLink({
    //       icon: WalletNeedsToConnected,
    //       title: 'NAPA Wallet Needs to Be Connected',
    //       description: 'Please connect your NAPA Wallet.',
    //       time: 'Now',
    //     })
    //   );
    //   push('/wallet-selector')
    // }
    // setTimeout(() => { 
    //   setShowing(true);
    // }, 700);
    const networkFromCookie = getCookie('networkType')
    const networkTypeIndex = options.findIndex(
      (option) => networkFromCookie == option.value
    );
    if (networkTypeIndex > -1) {
      setNetworkType({ ...options[networkTypeIndex] });
    } else {
      setNetworkType(options[1]);
    }
  }, [])

  const handleGetBalance = async () => {
    const address = profileDetails?.napaWalletAccount;
    const walletNetwork = getCookie('networkType')
    const balanceData = await getNativeTokenWalletBalance(walletNetwork ? walletNetwork as string : chaiId, address);
    // @ts-ignore
    setBalance((Number(balanceData?.data?.data?.NativeTokenWalletBalance?.balance) / 10 ** 18).toFixed(8)
    );
  };

  const handleGetTransactions = async () => {
    // const address = '0xa1D66BF3b8A08f40c5A61936Bb9C931201c97641';
    const address = profileDetails?.napaWalletAccount;
    const walletNetwork = getCookie('networkType')
    const transactionData = await getTransactionHistory(walletNetwork ? walletNetwork as string : chaiId, address);
    // @ts-ignore
    setHistory(transactionData?.data?.data?.TransactionHistory?.result);
  };

  const handleGetImportedTokens = async () => {
    setLoading(true);
    const walletNetwork = getCookie('networkType')
    const { data, error, 
      // message
     }: any = await getImportedTokens(
      // @ts-ignore
      napaWalletAccount?.subAcWalletAddress,
      networkType?.value
    );
    if (error) {
      setLoading(false);
      // toast.error(
      //   CustomToastWithLink({
      //     icon: ErrorIcon,
      //     title: 'Error',
      //     description: message,
      //     time: 'Now',
      //   })
      // );
      setTokensList([])
      return;
    }   
    let modifiedList:any = []
    if(data?.data)
    {
      await Promise.all(
        data?.data.map(async (list:any)=> {
          const response = await getCustomTokenWalletBalance(walletNetwork ? walletNetwork as string : '5',list.napaWalletAccount, list.tokenAddresses)
          // @ts-ignore
          list.balance = (response?.data?.data?.CustomTokenWalletBalance[0]?.balance || 0)/10**18
          modifiedList.push(list)
        })
      )
    } 
    setTokensList(modifiedList);
    setLoading(false);
  };

  useEffect(() => {
    if(networkType)
    {
      handleGetImportedTokens();
    }
  }, [networkType]);

  // const handleNewToken = async (token:any) => {    
  //   console.log("token", token);
    
  //   setTokensList(async (prevState:any) => {
  //       let data = prevState?.length ? [...prevState] : [];
  //       const response = await getCustomTokenWalletBalance('0x5',token.napaWalletAccount, token.tokenAddresses)        
  //       // @ts-ignore
  //       token.balance = (response?.data?.data?.CustomTokenWalletBalance[0]?.balance || 0)/10**18
  //       // @ts-ignore
  //       data.push(token);        
  //       return [...data];
  //   });
  // }

  useEffect(() => {
    handleGetBalance();
    handleGetTransactions();
    socket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'new-imported-token') {
        // handleNewToken(response?.token);
        handleGetImportedTokens()
      }
    });
    return () => {
      socket.removeEventListener('message', () => {});
    };
  }, [networkType]);

  // if (!showing) {
  //   return <></>;
  // }

  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <div className={styles.settings}>
          <div className={styles.headerSection}>
            <h1 className={styles.walletHeading}>Wallet</h1>
            <div className={styles.settingDropdownContainer}>
              <div className={styles.walletDropdownContainer}>
                <Select
                  options={options}
                  // menuIsOpen={true}
                  className="select_pernt select_pernt_v2"
                  placeholder="Select Network"
                  classNamePrefix="cntrslct"
                  onChange={async (selectedOption) => {
                       //@ts-ignore
                       setNetworkType(selectedOption)
                       setCookie('networkType',selectedOption.value)      
                  }   
                  }
                  value={networkType}
                />
              </div>
              <div
                onClick={() => push('/wallet-settings')}
                className={styles.settingsLabel}
              >
                <img src={Settings} alt="" />
                <span>Wallet Settings</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.accountContainer}>
          <div className={styles.accountLeftContainer}>
            <p className={styles.accountText}>Account 1</p>
            <div className={styles.accountTextContainer}>
              <div className={styles.accountNumber}>{balance}</div>
              <div className={styles.acccountDropdown}>selected currency</div>
            </div>
          </div>
          <div className={styles.accountRightContainer}>
            <Link className={styles.depositBtnContainer} href="/deposit">
              <div>
                <button className={styles.depositBtn}>
                  <img
                    style={{ marginRight: '1rem' }}
                    src={MoneyReceived}
                    alt=""
                  />{' '}
                  Recieve
                </button>
              </div>
            </Link>
            <Link className={styles.withdrawalBtnContainer} href="/withdrawal">
              <div>
                <button className={styles.withdrawalBtn}>
                  <img style={{ marginRight: '1rem' }} src={MoneySend} alt="" />{' '}
                  Withdrawal
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.walletTableContainer}>
          <div className={styles.walletTokensContainer}>
            <div className={styles.tabsContainer}>
              <div className={styles.tabOne}>Tokens</div>
              <div className={styles.tab}>NFTs</div>
              <div className={styles.tab}>SNFTs</div>
              {/* <div className={styles.tab} >Watchlist</div>
              <div className={styles.tab} >Favorites</div> */}
            </div>
            <div className={styles.textIconContainer}>
              <div className={styles.iconContainer}>
                {' '}
                <img src={SearchIcon} alt="" />
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={styles.textContainer}
              >
                Import
              </div>
            </div>
            <div
              style={{
                overflow: 'scroll',
                overflowX: 'hidden',
                height: '22vh',
              }}
            >
              {loading ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <FadeLoader color="#ffffff" />
                </div>
              ) : tokensList?.length == 0 ? (
                <p style={{ color: 'gray' }}>No Token Found</p>
              ) : (
                tokensList && tokensList[0] && tokensList?.map((token: any, index: number) => {
                  return (
                    <>
                      <div key={index} className={styles.tokenDiv}>
                        <div className={styles.tokenDivLeft}>
                          <div>
                            <img src={EthereumBlackIcon} alt="" />
                          </div>
                          <div className={styles.bitcoinText}>{token.name}</div>
                          <div className={styles.bitcoinText1}>
                            {token.symbol}
                          </div>
                        </div>
                        <div className={styles.tokenDivRight}>
                          <div className={styles.bitcoinText}>{token.balance}</div>
                          <div className={styles.bitcoinText1}>$32.271</div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </div>
          </div>
          <div className={styles.walletTransactionContainer}>
            <div className={styles.transactionContainer}>
              <div>Transaction History</div>
              <div>
                <img src={SearchIcon} alt="" />
              </div>
            </div>
            <div
              style={{
                height: '27.5vh',
                overflow: 'scroll',
                overflowX: 'hidden',
              }}
            >
              <table
                style={{
                  width: '100%',
                  textAlign: 'left',
                  tableLayout: 'fixed',
                }}
              >
                <thead className={styles.tablehead}>
                  <br />
                  <tr>
                    <th>
                      <div style={{ paddingLeft: '2rem' }}>Date</div>
                    </th>
                    <th>
                      <div>Type</div>
                    </th>
                    <th>
                      <div>Asset</div>
                    </th>
                    <th>
                      <div>Amount</div>
                    </th>
                    <th></th>
                  </tr>
                  <br />
                </thead>
                <tbody style={{}}>
                  {history?.length &&
                    history.map((item: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          style={{
                            border: '1px solid #212C2C',
                            color: 'white',
                            height: '75px',
                          }}
                        >
                          <td style={{ paddingLeft: '2rem', width: '27%' }}>
                            {moment(item.block_timestamp).format(
                              'DD MMMM hh:mm'
                            )}
                          </td>
                          <td>Deposit</td>
                          <td>ETH</td>
                          <td>
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              <span
                                style={{
                                  marginRight: '10px',
                                  marginTop: '-6px',
                                }}
                              >
                                <img width={20} src={NapaIcon} alt="" />
                              </span>{' '}
                              <span>{(item.value / 10 ** 18).toFixed(8)}</span>
                            </div>
                          </td>
                          <td>
                            <img src={shareIcon} alt="" />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
      <div>
        {/* <hr /> */}
        <Footer footerIconShow={false} />
      </div>
      <ImportTokensModal
        open={open}
        onClick={async () => setOpen(!open)}
        setopen={setOpen}
        networkType={networkType?.value}
      />
    </div>
  );
};

export default WalletTwo;
