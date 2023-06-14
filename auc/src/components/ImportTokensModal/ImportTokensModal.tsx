import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Input from '../Input/Input';
import styles from './ImportTokensModal.module.scss';
import { getCurrentNetwork, getImportToken, getSwitchNetwork } from '@/services/AssetManagement';
import { FadeLoader } from 'react-spinners';
import useProfile from '@/hooks/useProfile';
import { importNewToken } from '@/services/Tokens';
import useWebThree from '@/hooks/useWebThree';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { ErrorIcon } from '../assets';
// import { getChainId } from '@/utils/wallet';
import { getCookie } from 'cookies-next';

type ImportTokensModalProps = {
  open: boolean;
  onClick: () => {};
  setopen: any;
  networkType: string
};

const ImportTokensModal: NextPage<ImportTokensModalProps> = ({
  open,
  // onClick,
  setopen,
  networkType
}) => {
  const [address, setAddress] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [name,setName] = useState('')
  const [loading, setLoading] = useState(false)
  const { profileDetails } = useProfile()
  const { napaWalletAccount } = useWebThree()

  const handleInputToken = async () => {
    setLoading(true)
    // let currentChainId
    // if (window.ethereum) {
    //   currentChainId = await window.ethereum.request({
    //     method: 'eth_chainId',
    //   })
    // }
    // const metaMaskNetwork = getChainId(currentChainId)
    const walletNetwork = getCookie('networkType')
    // const privateKey = "9c4088cab3dabfaefea309edb62543cf4da9c7a47ed0f58f34db9c746da742ce";
    // const publicKey = "0xa1D66BF3b8A08f40c5A61936Bb9C931201c97641";
    // @ts-ignore
    const res = await getImportToken(walletNetwork ? walletNetwork as string : '1', address);
    // @ts-ignore
    setDecimals(res.data?.data?.tokenData?.response[0]?.decimals);
       // @ts-ignore
    setSymbol(res.data?.data?.tokenData?.response[0]?.symbol);
       // @ts-ignore
    setName(res.data?.data?.tokenData?.response[0]?.name)
       // @ts-ignore
    console.log(res.data?.data?.tokenData?.response[0], "INPUT token res");
    setLoading(false)
  }

  const getNW = async () => {
    const change = await getSwitchNetwork(networkType);
    console.log(change, "change");
    const dd = await getCurrentNetwork();
    console.log(dd);
  }

  useEffect(() => {
    getNW();
    if(address.length==42){
      handleInputToken();
      }  
  }, [address])

  const handleImportToken = async () => {
    setLoading(true);
    const token = {
      profileId: profileDetails?.profileId,
      // @ts-ignore
      napaWalletAccount: napaWalletAccount?.subAcWalletAddress,
      networkId: networkType,
      decimals,
      symbol,
      name,
      tokenAddresses: address
    }
    console.log(token);
    
    const { error, message }: any = await importNewToken(token);
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
    setDecimals('');
    setSymbol('');
    setName('')
    setAddress('')
    setLoading(false);
    setopen(false)
  }

  return open ? (
    <div className={styles.modalContainer}>
      <div className={styles.innerContainer}>
        <div onClick={() => {
              setDecimals('');
              setSymbol('');
              setName('')
              setAddress('')
              setLoading(false);
              setopen(false)
        }} className={styles.cross}>x</div>
        <div className={styles.header}>
          <h1>Import Token</h1>
          <div>
            <Input
              type="text"
              placeholder="0x9324415c4aBe898eFca6cBb0febd9f"
              label="Token Address"
              value={address}
              disabled={loading}
              onChange={(e: any) => {setAddress(e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="GMEE"
              label="Token Symbol"
              value={symbol}
              onChange={(e: any) => setSymbol(e.target.value)}
              disabled
            />
            <Input
              type="text"
              placeholder="18"
              label="Decimals"
              value={decimals}
              onChange={(e: any) => setDecimals(e.target.value)}
              disabled
            />
          </div>
        </div>
        <button onClick={()=>!loading && handleImportToken()} className={styles.imprtbtn}>
          {loading ? <FadeLoader color="#ffffff" /> : "Import"}
        </button>
      </div>
    </div>
  ) : null;
};

export default ImportTokensModal;