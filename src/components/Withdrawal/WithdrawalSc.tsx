import Container from '@/Layout/Container/Container';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './WithdrawalSc.module.scss';
import Image from 'next/image';
import {
  EtheriumIcon,
  NapaBlueBgIcon,
  NapaIconv2,
  UsdtYellowBgIcon,
  backIcon,
  // WalletNeedsToConnected,
  ErrorIcon,
} from '../assets';
// import { errors } from 'ethers';
import Select from 'react-select';
import Input from '../Input/Input';
import { useRouter } from 'next/router';
import BgHighlightButton from '../BgHighlightButton/BgHighlightButton';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import useWebThree from '@/hooks/useWebThree';
import { getCookie } from 'cookies-next';
import { getNapaAccounts } from '@/services/napaAccounts';
import { decryptString } from '@/utils/wallet';
import { getSendCustomToken, getSendNativeToken } from '@/services/AssetManagement';
import useProfile from '@/hooks/useProfile';
import Loading from '../Loading/Loading';

const WithdrawalSc = () => {
  const { push } = useRouter();
  const optionsone = [
    {
      value: '0',
      label: (
        <div className="cstm_napa_slct">
          <Image src={NapaBlueBgIcon} alt="" width="20px" height="20px" />
          NAPA
        </div>
      ),
    },
    {
      value: '1',
      label: (
        <div className="cstm_napa_slct">
          <Image src={UsdtYellowBgIcon} alt="" width="20px" height="20px" />
          USDT
        </div>
      ),
    },
    {
      value: '2',
      label: (
        <div className="cstm_napa_slct">
          <Image src={EtheriumIcon} alt="" width="20px" height="20px" />
          ETH
        </div>
      ),
    },
  ];
  const [currencyType, setCurrencyType] = React.useState<any>();
  const [nfttype, setNFTType] = React.useState<any>();
  const [collectinType, setCollectinType] = React.useState<any>();
  const [tokenType, setTokenType] = React.useState<any>();
  const [address, setAddress] = React.useState('');
  const [ammount, setammount] = useState<any>('');
  const [type, setType] = useState('Tokens')
  // const [showing, setShowing] = useState(false);
  const { napaWalletAccount } = useWebThree()
  // const [privateKey, setPrivateKey] = useState('')
  const [loading, setLoading] = useState(false)
  const { profileId } = useProfile()

  const handleGetNapaWalletPrivateKey = async () => {
    let activeAccount:any
  //   @ts-ignore
    const { data }: any = await getNapaAccounts(profileId);
    if(data?.data)
    {
      activeAccount = data?.data?.find(
          (a: any) => a.isActive == 'true'
        ); 
    }    
    console.log("activeAccount?.subAcWalletPrivatekey",activeAccount);
    
      return decryptString(activeAccount?.subAcWalletPrivatekey)
  }

  const handleSendNativeToken = async () => {
    setLoading(true)
    const privateKey = await handleGetNapaWalletPrivateKey()
    const walletNetwork = getCookie('networkType')
    // @ts-ignore
    const { data, error, message } = await getSendNativeToken(privateKey, walletNetwork, napaWalletAccount?.subAcWalletAddress, address, ammount)
    if(error)
    {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      setLoading(false)
      return
    }
    setTokenType(null)
    setAddress('')
    setammount('')
    setLoading(false)
  }

  const handleSendCustomToken = async () => {
    setLoading(true)
    const privateKey = await handleGetNapaWalletPrivateKey()
    const walletNetwork = getCookie('networkType')
    // @ts-ignore
    const { data, error, message } = await getSendCustomToken(privateKey, walletNetwork, '0xAAeC293202871F737e9630651977Cdf9B706DdEB', address, ammount)
    if(error)
    {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      setLoading(false)
      return
    }
    setTokenType(null)
    setAddress('')
    setammount('')
    setLoading(false)
  }

  const handleSendToken = () => {
    if(tokenType?.value == '2')
    {
      handleSendNativeToken()
    }
    else {
      handleSendCustomToken()
    }
  }

  // useEffect(() => {
  //   // @ts-ignore
  //   if(!napaWalletAccount?.subAcWalletAddress) {
  //     toast.error(
  //       CustomToastWithLink({
  //         icon: WalletNeedsToConnected,
  //         title: 'NAPA Wallet Needs to Be Connected',
  //         description: 'Please connect your NAPA Wallet.',
  //         time: 'Now',
  //       })
  //     );
  //     push('/wallet-selector')
  //   }
  //   setTimeout(() => { 
  //     setShowing(true);
  //   }, 700);
  //    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // if (!showing) {
  //   return <></>;
  // }

  return (
    <div className={`${styles.container}`}>
      <Container className={`${styles.settingsContainer} asinnerContainer`}>
        <div onClick={() => push('/napa-wallet')} className={styles.backBtn}>
          <img width={20} height={15} src={backIcon} alt="" />
          <span>Wallet</span>
        </div>
        <div className={styles.settings}>
          <h1>Withdrawal</h1>
        </div>

        <div className={styles.withdrawalContainer}>
          <div className={styles.withdrawalInnerContainer}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <BgHighlightButton title="Tokens" setSelectedValue={() => setType('Tokens')} value="Tokens" selectedValue={type} />
              <BgHighlightButton title="NFT'S" setSelectedValue={() => setType('NFTS')} value="NFTS" selectedValue={type} />
              <BgHighlightButton title="SNFT'S" setSelectedValue={() => setType("SNFTS")} value="SNFTS" selectedValue={type} />
            </div>
            {
              type === 'Tokens' && (
                <div >
                  <div
                    style={{ position: 'relative', marginTop: '2rem', marginBottom: '2rem' }}
                    className={`${styles.SelectPrntNftSell} selectprntnft selectprntnftssell`}
                  >
                    <p className={styles.ClctionTxt}>Select Token</p>
                    <Select
                      options={optionsone}
                      // menuIsOpen={true}
                      className="select_pernt select_pernt_v2"
                      placeholder="Select Token"
                      classNamePrefix="cntrslct"
                      onChange={(selectedOption) =>
                        //@ts-ignore
                        setTokenType(selectedOption)
                      }
                      value={tokenType}
                    />
                  </div>
                  <div
                    style={{ position: 'relative' }}
                    className={`${styles.FrstInput} frstinputsell`}
                  >
                    <Input
                      value={address}
                      type="text"
                      placeholder="0.00000001"
                      label="Address"
                      onChange={(e) => {
                        setAddress(e.target.value)
                      }}
                    />
                  </div>

                </div>
              )

            }
            {
              type === 'NFTS' && (
                <>
                  <div className={styles.dropdownContainer}>
                    <div
                      style={{ position: 'relative' }}
                      className={`${styles.FrstInput} frstinputsell`}
                    >
                      <Input
                        value={address}
                        type="text"
                        placeholder="0.00000001"
                        label="Address"
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
                      />
                    </div>
                    <div
                      style={{ position: 'relative' }}
                      className={`${styles.SelectPrntNftSell} selectprntnft selectprntnftssell`}
                    >
                      <p className={styles.ClctionTxt}>Select Collection</p>
                      <Select
                        options={optionsone}
                        // menuIsOpen={true}
                        className="select_pernt select_pernt_v2"
                        placeholder="Select Collection"
                        classNamePrefix="cntrslct"
                        onChange={(selectedOption) =>
                          //@ts-ignore
                          setCollectinType(selectedOption)
                        }
                        value={collectinType}
                      />
                    </div>
                  </div>
                  <div className={styles.dropdownContainer}>
                    <div
                      style={{ position: 'relative' }}
                      className={`${styles.SelectPrntNftSell} selectprntnft selectprntnftssell`}
                    >
                      <p className={styles.ClctionTxt}>Select NFT</p>
                      <Select
                        options={optionsone}
                        // menuIsOpen={true}
                        className="select_pernt select_pernt_v2"
                        placeholder="Select NFT"
                        classNamePrefix="cntrslct"
                        onChange={(selectedOption) =>
                          //@ts-ignore
                          setNFTType(selectedOption)
                        }
                        value={nfttype}
                      />
                    </div>
                  </div>
                </>
              )
            }
            {
              type === "SNFTS" && (
                <>
                  <div
                    style={{ position: 'relative' }}
                    className={`${styles.FrstInput} frstinputsell`}
                  >
                    <Input
                      value={address}
                      type="text"
                      placeholder="0.00000001"
                      label="Address"
                      onChange={(e) => {
                        setAddress(e.target.value)
                      }}
                    />
                  </div>
                  <div className={styles.dropdownContainer}>
                    <div
                      style={{ position: 'relative', marginBottom: '2rem' }}
                      className={`${styles.SelectPrntNftSell} selectprntnft selectprntnftssell`}
                    >
                      <p className={styles.ClctionTxt}>Select Collection</p>
                      <Select
                        options={optionsone}
                        // menuIsOpen={true}
                        className="select_pernt select_pernt_v2"
                        placeholder="Select Collection"
                        classNamePrefix="cntrslct"
                        onChange={(selectedOption) =>
                          //@ts-ignore
                          setCurrencyType(selectedOption)
                        }
                        value={currencyType}
                      />
                    </div>
                    <div
                      style={{ position: 'relative', marginTop: '-10px' }}
                      className={`${styles.SelectPrntNftSell} selectprntnft selectprntnftssell`}
                    >
                      <p className={styles.ClctionTxt}>Select SNFT</p>
                      <Select
                        options={optionsone}
                        // menuIsOpen={true}
                        className="select_pernt select_pernt_v2"
                        placeholder="Select SNFT"
                        classNamePrefix="cntrslct"
                        onChange={(selectedOption) =>
                          //@ts-ignore
                          setCurrencyType(selectedOption)
                        }
                        value={currencyType}
                      />
                    </div>
                  </div>
                </>
              )
            }
            <div style={{}}>
              <div className={styles.MiddleCont}>
                <label>Amount</label>
                <div className={styles.MiddleContInn}>
                  <input
                    type="text"
                    value={ammount}
                    placeholder="0.00"
                    onChange={(e) => {
                      if (/^\d{0,9}(?:\.\d{0,8})?$/.test(e.target.value)) {
                        setammount(e.target.value);
                      }
                    }}
                  />
                  <span />
                  <p>NAPA</p>
                </div>
              </div>
            </div>
            <div className={styles.totalBalanceContainer}>
              <div className={styles.totalBalanceText}>Total Available Balance: </div>
              <div className={styles.totalBalanceIconContainer}><img style={{ marginTop: '-6px' }} src={NapaIconv2} alt="" /><span style={{ paddingLeft: '10px' }}> 9.4372</span> </div>
            </div>
            <hr className={styles.line1} />
            <div className={styles.networkFeeContainer}>
              <div className={styles.networkText}>Network Fee</div>
              <div className={styles.networkText}><img style={{ marginBottom: '5px', paddingRight: '5px' }} src={NapaIconv2} alt="" /> <span> 0.10</span></div>
            </div>
            <div className={styles.networkFeeContainer}>
              <div className={styles.networkText1}>You will Get</div>
              <div className={styles.networkText1}><img style={{ marginBottom: '5px', paddingRight: '5px' }} width={25} height={25} src={NapaIconv2} alt="" /><span> 0.22</span></div>
            </div>
            <div>
              <div className={styles.BottomAction}>
                {/* <Button text="Withdraw" outlined /> */}
                <button onClick={() => {
                  if(type == 'Tokens')
                  {
                    handleSendToken()
                  }
                 }} className={styles.actionBtn}>Withdraw</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {
        loading &&  <Loading/>
      }
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
};

export default WithdrawalSc;
