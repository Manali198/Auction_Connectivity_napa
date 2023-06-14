import Container from '@/Layout/Container/Container';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './WalletSettingsSc.module.scss';
import {
  Ape,
  AthereumBlack,
  DoneIcon,
  EyeIcon,
  NapaIconv2,
  PlusIconWhite,
  Ripple,
  SearchIcon,
  backIcon,
  currencyEthereum,
  deleteIcon,
  shearWhiteIcon,
  userIconBlack,
//   userIconWhite,
  ErrorIcon,
} from '../assets';
// import { errors } from 'ethers';
import { useRouter } from 'next/router';
import Input from '../Input/Input';
import { getNapaAccounts } from '@/services/napaAccounts';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { getCookie } from 'cookies-next';
import Loading from '../Loading/Loading';

const WalletSettingsSc = () => {
  const { push } = useRouter();
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [accountDetailsModal, setAccountDetailsModal] = useState(false);
  const [importAccountModal, setImportAccountModal] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [currencyModal, setCurrencyModal] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const [account, setAccount] = useState('');
  const [accountDetails, setAccountDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [napaAccounts, setNapaAccounts] = useState<any>([]);

  const handleGetNapaAccounts = async (profileId: string) => {
    setLoading(true);
    const { data, error, message }: any = await getNapaAccounts(profileId);
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
    console.log('data?.data', data?.data);

    setNapaAccounts(data?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    const data = getCookie('profileId');
    if (data) {
      // @ts-ignore
      handleGetNapaAccounts(data);
    }
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <div onClick={() => push('/napa-wallet')} className={styles.backBtn}>
          <img width={20} height={15} src={backIcon} alt="" />
          <span>Wallet</span>
        </div>
        <div className={styles.settings}>
          <h1>Settings</h1>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.walletSettings}>
            <div className={styles.walletSettingContainer}>
              <div className={styles.walletSetting}>
                {/* <div className={styles.accountContainer}>
                  <div
                    onClick={() => {
                      setAccountDetailsModal(!accountDetailsModal);
                      setOpenAccountModal(false);
                      setImportAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                    }}
                    className={styles.accountImageEth}
                  >
                    <img src={userIconWhite} alt="" />
                  </div>
                  <div
                    onClick={() => {
                      setAccountDetailsModal(!accountDetailsModal);
                      setOpenAccountModal(false);
                      setImportAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                    }}
                    className={styles.accountName}
                  >
                    Account 1
                  </div>
                </div> */}
                {napaAccounts &&
                  napaAccounts[0] &&
                  napaAccounts.map((acc:any,index:number) => {
                    return (
                      <div key={index} className={styles.accountContainer2}>
                        <div
                          onClick={() => {
                            setAccountDetailsModal(!accountDetailsModal);
                            setOpenAccountModal(false);
                            setImportAccountModal(false);
                            setCurrencyModal(false);
                            setDeleteAccountModal(false);
                          }}
                          className={styles.accountImage2}
                        >
                          <img src={userIconBlack} alt="" />
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}
                        >
                          <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                              setAccountDetailsModal(!accountDetailsModal);
                              setOpenAccountModal(false);
                              setImportAccountModal(false);
                              setCurrencyModal(false);
                              setDeleteAccountModal(false);
                            }}
                          >
                            <div className={styles.accountName2}>{acc.subAcWalletName}</div>
                            <div className={styles.accountImportName2}>
                              Imported
                            </div>
                          </div>
                          <div style={{ color: 'red', paddingTop: '10px' }}>
                            <img src={DoneIcon} alt="" />{' '}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className={styles.accountContainer}>
                  <div
                    onClick={() => {
                      setOpenAccountModal(!openAccountModal);
                      setImportAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountImageBorder}
                  >
                    <img src={PlusIconWhite} alt="" />
                  </div>
                  <div
                    onClick={() => {
                      setOpenAccountModal(!openAccountModal);
                      setImportAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountName}
                  >
                    Add Account
                  </div>
                </div>
                <div className={styles.accountContainer}>
                  <div
                    onClick={() => {
                      setImportAccountModal(!importAccountModal);
                      setOpenAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountImageBorder}
                  >
                    {' '}
                    <img
                      width={'23px'}
                      height={'20px'}
                      src={shearWhiteIcon}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      setImportAccountModal(!importAccountModal);
                      setOpenAccountModal(false);
                      setCurrencyModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountName}
                  >
                    Import Account
                  </div>
                </div>
                <hr className={styles.line} />
                <div className={styles.accountContainer}>
                  <div
                    onClick={() => {
                      setCurrencyModal(!currencyModal);
                      setImportAccountModal(false);
                      setOpenAccountModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountImageBorder}
                  >
                    <img src={currencyEthereum} alt="" />
                  </div>
                  <div
                    onClick={() => {
                      setCurrencyModal(!currencyModal);
                      setImportAccountModal(false);
                      setOpenAccountModal(false);
                      setDeleteAccountModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.currencyTypeContainer}
                  >
                    <div className={styles.accountName}>Currency</div>
                    <div className={styles.currencyType}>ETH</div>
                  </div>
                </div>
                <div className={styles.accountDeleteContainer}>
                  <div
                    onClick={() => {
                      setDeleteAccountModal(!deleteAccountModal);
                      setImportAccountModal(false);
                      setOpenAccountModal(false);
                      setCurrencyModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountDeleteImage}
                  >
                    <img src={deleteIcon} alt="" />
                  </div>
                  <div
                    onClick={() => {
                      setDeleteAccountModal(!deleteAccountModal);
                      setImportAccountModal(false);
                      setOpenAccountModal(false);
                      setCurrencyModal(false);
                      setAccountDetailsModal(false);
                    }}
                    className={styles.accountDeleteName}
                  >
                    Delete Account
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modalContainer}>
              {accountDetailsModal && (
                <div>
                  <div className={styles.addAccount}>
                    <h1>Account Details</h1>
                    <p className={styles.accountDetailsDate}>
                      Date Created: 17 May 2023{' '}
                    </p>
                    {/* <button
                                              onClick={() => setAccountDetailsModal(!accountDetailsModal)}
                                          >
                                              x
                                          </button> */}
                  </div>
                  <Input
                    type="text"
                    placeholder="0x9324415c4aBe898eFca6cBb0febd9f"
                    label="Name"
                    value={accountDetails}
                    onChange={(e: any) => setAccountDetails(e.target.value)}
                  />
                  <div
                    style={{ marginTop: '3rem' }}
                    className={styles.accountDetailsContainer}
                  >
                    <div className={styles.accountDetailsContainer}>
                      <div className={styles.accountDetailsTokens}>
                        <div className={styles.accountDetailTexContainer}>
                          <div className={styles.textContainer}>Tokens</div>
                          <div className={styles.accountDetailTexContainer1}>
                            <div className={styles.accountNumber}>9.4372</div>
                            <div className={styles.textAccount}>NAPA</div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ marginRight: '-17px' }}
                        className={styles.accountDetailsTokens}
                      >
                        <div className={styles.accountDetailTexContainer}>
                          <div className={styles.textContainer}>
                            Collections
                          </div>
                          <div className={styles.accountDetailTexContainer1}>
                            <div className={styles.accountNumber}>136</div>
                            {/* <div className={styles.textAccount}>NAPA</div> */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.accountDetailsCollection}></div>
                    </div>
                  </div>
                  <br />
                  <div className={styles.accountDetailsContainer}>
                    <div className={styles.accountDetailsContainer}>
                      <div className={styles.accountDetailsTokens}>
                        <div className={styles.accountDetailTexContainer}>
                          <div className={styles.textContainer}>NFT&apos;s</div>
                          <div className={styles.accountDetailTexContainer1}>
                            <div className={styles.accountNumber}>1568</div>
                            {/* <div className={styles.textAccount}>NAPA</div> */}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ marginRight: '-17px' }}
                        className={styles.accountDetailsTokens}
                      >
                        <div className={styles.accountDetailTexContainer}>
                          <div className={styles.textContainer}>
                            SNFT&apos;s
                          </div>
                          <div className={styles.accountDetailTexContainer1}>
                            <div className={styles.accountNumber}>983</div>
                            {/* <div className={styles.textAccount}>NAPA</div> */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.accountDetailsCollection}></div>
                    </div>
                  </div>
                </div>
              )}

              {openAccountModal && (
                <div>
                  <div className={styles.addAccount}>
                    <h1>Add Account</h1>
                    <button
                      onClick={() => setOpenAccountModal(!openAccountModal)}
                    >
                      x
                    </button>
                  </div>
                  <Input
                    type="text"
                    placeholder="0x9324415c4aBe898eFca6cBb0febd9f"
                    label="Enter Account Name"
                    value={account}
                    onChange={(e: any) => setAccount(e.target.value)}
                  />
                  <button className={styles.actionBtn}>Add</button>
                </div>
              )}
              {importAccountModal && (
                <div>
                  <div className={styles.addAccount}>
                    <h1>Import Account</h1>
                    <button
                      onClick={() => setImportAccountModal(!importAccountModal)}
                    >
                      x
                    </button>
                  </div>
                  <Input
                    type="text"
                    placeholder="0x9324415c4aBe898eFca6cBb0febd9f"
                    label="Enter Account Name"
                    value={account}
                    onChange={(e: any) => setAccount(e.target.value)}
                  />
                  <div className={styles.pvtKeyContainer}>
                    <Input
                      type={showKey ? 'text' : 'password'}
                      placeholder="18"
                      label="Enter your private key string here"
                      value={privateKey}
                      onChange={(e: any) => setPrivateKey(e.target.value)}
                    />
                    <img
                      onClick={() => setShowKey(!showKey)}
                      className={styles.eyeBtn}
                      src={EyeIcon}
                      alt=""
                    />
                  </div>
                </div>
              )}
              {currencyModal && (
                <div>
                  <div className={styles.addAccount}>
                    <h1>Select Currency</h1>
                    <button onClick={() => setCurrencyModal(!currencyModal)}>
                      x
                    </button>
                  </div>
                  <div className={styles.currencySerchContainer}>
                    <img
                      style={{ cursor: 'pointer' }}
                      src={SearchIcon}
                      alt=""
                    />
                    <input
                      className={styles.currencySerchText}
                      type="text"
                      placeholder="Search.."
                    />
                    {/* <div className={styles.currencySerchText}>Search..</div> */}
                  </div>
                  <div className={styles.currencyScrollContainer}>
                    <div className={styles.currencyTextIconContainer}>
                      <div className={styles.currencyImg}>
                        <img src={Ripple} alt="" />
                      </div>
                      <div className={styles.currencyNameTextContainer}>
                        <div className={styles.currencyName}>Ripple</div>
                        <div className={styles.currencyTxt}>XRP</div>
                      </div>
                    </div>
                    <div className={styles.currencyTextIconContainer1}>
                      <div className={styles.currencyImg1}>
                        <img src={AthereumBlack} alt="" />
                      </div>
                      <div className={styles.currencyNameTextContainer1}>
                        <div>
                          <div className={styles.currencyName1}>Ethereum</div>
                          <div className={styles.currencyTxt1}>ETH</div>
                        </div>
                        <div>
                          <img src={DoneIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.currencyTextIconContainer}>
                      <div className={styles.currencyImg}>
                        <img width={25} height={25} src={NapaIconv2} alt="" />
                      </div>
                      <div className={styles.currencyNameTextContainer}>
                        <div className={styles.currencyName}>NAPA</div>
                        <div className={styles.currencyTxt}>NAPA</div>
                      </div>
                    </div>
                    <div className={styles.currencyTextIconContainer}>
                      <div className={styles.currencyImg}>
                        <img src={Ape} alt="" />
                      </div>
                      <div className={styles.currencyNameTextContainer}>
                        <div className={styles.currencyName}>Bored Ape</div>
                        <div className={styles.currencyTxt}>BAYC</div>
                      </div>
                    </div>
                    <div className={styles.currencyTextIconContainer}>
                      <div className={styles.currencyImg}>
                        <img src={Ape} alt="" />
                      </div>
                      <div className={styles.currencyNameTextContainer}>
                        <div className={styles.currencyName}>Bored Ape</div>
                        <div className={styles.currencyTxt}>BAYC</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.actionBtn}>Done</button>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
      {deleteAccountModal && (
        <div className={styles.loaderContainer}>
          <div className={styles.deleteAccountContainer}>
            <h1 className={styles.deleteAccountheading}>Delete Account</h1>
            <div>
              <p className={styles.deleteAccountText}>
                Are you sure want to permanently <br />
                delete this account?
              </p>
            </div>
            <div className={styles.deleteAccountBtnContainer}>
              <button
                onClick={() => setDeleteAccountModal(false)}
                className={styles.deleteAccountCancel}
              >
                Cancel
              </button>
              <button className={styles.deleteAccountDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
};

export default WalletSettingsSc;
