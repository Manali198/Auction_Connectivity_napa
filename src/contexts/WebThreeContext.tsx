import React, { createContext, useCallback, useEffect, useState } from 'react';
import lodash from 'lodash';
import Web3 from 'web3';
import { toast } from 'react-toastify';

import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { getAlreadyConnectedWeb3, getWeb3 } from '../utils/wallet';
import { numberWithCommas } from '../utils/NumberWithCommas';
import { ToastDescription, ToastTitle } from '../typing/toast';
import { CustomToastWithLink } from '../components/CustomToast/CustomToast';
import { ErrorIcon, WalletConnectedIcon } from '../components/assets';
import { getCookie } from 'cookies-next';

type WebThreeContextType = {
  account: string;
  walletEth: number;
  walletBnb: string;
  walletNapa: string;
  connectWallet: () => Promise<void>;
  getAccounts: () => void;
  call: any;
  address: any;
  balance: any;
  signer: any;
  chainId: any;
  setNapaWalletAccount: CallableFunction;
  napaWalletAccount: string;
  setMetaMaskAccount: CallableFunction;
  metaMaskAccount: string;
  setAccount: CallableFunction
};

const WebThreeContext = createContext<WebThreeContextType>(
  {} as WebThreeContextType
);

const balanceOfABI = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export const WebThreeContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [account, setAccount] = useState<any>('');
  const [walletEth, setWalletEth] = useState(0);
  const [walletBnb, setWalletBnb] = useState('');
  const [walletNapa, setWalletNapa] = useState('');
  const [address, setAddress] = useState<any>();
  const [balance, setBalance] = useState<any>();
  const [signer, setSigner] = useState<any>();
  const [chainId, setChainId] = useState<any>();
  const [napaWalletAccount ,setNapaWalletAccount] = useState<any>('')
  const [metaMaskAccount ,setMetaMaskAccount] = useState<any>('')

  useEffect(() => {
    const napaWalletAccountFromCookie = getCookie('napaWalletAccount') 
    const metaMaskAccountFromCookie = getCookie('metaMaskAccount');
    // @ts-ignore
    setNapaWalletAccount(napaWalletAccountFromCookie ? JSON.parse(napaWalletAccountFromCookie) : '')
    setAccount(metaMaskAccountFromCookie || '')
    setMetaMaskAccount(metaMaskAccountFromCookie || '')
  }, [])
  

  const getBalances = async () => {
    try {
      const web3: any = await getAlreadyConnectedWeb3();
      const accounts = await web3.eth.getAccounts();
      const contractBnb = new web3.eth.Contract(
        balanceOfABI,
        '0xB8c77482e45F1F44dE1745F52C74426C631bDD52' //move to the container
      );
      const tokenBalanceBnb = await contractBnb.methods
        .balanceOf(accounts[0])
        .call();
      const bnbBalance = numberWithCommas(tokenBalanceBnb.slice(0, 8));
      const contract = new web3.eth.Contract(
        balanceOfABI,
        '0x8EB2Df7137FB778a6387E84f17b80CC82cF9e884' //move to the container 
      );
      const tokenBalanceNapa = await contract.methods
        .balanceOf(accounts[0])
        .call();
      const napaBalance = numberWithCommas(tokenBalanceNapa.slice(0, 8));
      // @ts-ignore
      setWalletNapa(napaBalance);
      // @ts-ignore
      setWalletBnb(bnbBalance);
    } catch (error) {
      // if (isMobile || isTablet) {
      //   toast.error(
      //     CustomToastWithLink({
      //       icon: ErrorIcon,
      //       title: ToastTitle.ERROR,
      //       description: 'Open NAPA Website in Metamask Mobile App',
      //       time: 'Now',
      //     })
      //   );
      //   return;
      // }
      // toast.error(
      //   CustomToastWithLink({
      //     icon: ErrorIcon,
      //     title: ToastTitle.ERROR,
      //     description: 'Please switch network to Etheruem Mainnet',
      //     time: 'Now',
      //   })
      // );
    }
  };

  const getAccounts = useCallback(async () => {
    try {
      const web3: any = await getAlreadyConnectedWeb3();
      const accounts = await web3.eth.getAccounts();
      if (accounts.length) {
        const walletBalanceInWei = await web3.eth.getBalance(accounts[0]);
        const walletBalanceInEth =
          // @ts-ignore
          Math.round(Web3.utils.fromWei(walletBalanceInWei) * 1000) / 1000;
        setAccount(accounts[0]);
        setWalletEth(walletBalanceInEth);
        getBalances();
      }
    } catch (error: any) {
      // if (isMobile || isTablet) {
      //   toast.error(
      //     CustomToastWithLink({
      //       icon: ErrorIcon,
      //       title: ToastTitle.ERROR,
      //       description: 'Open NAPA Website in Metamask Mobile App',
      //       time: 'Now',
      //     })
      //   );
      //   return;
      // }
    }
  }, [setWalletEth, setAccount]);

  const connectWallet = async () => {
    try {
      const web3: any = await getWeb3();
      const walletAddress = await web3.eth.requestAccounts();
      await web3.eth.getAccounts();
      const walletBalanceInWei = await web3.eth.getBalance(walletAddress[0]);
      const walletBalanceInEth =
        // @ts-ignore
        Math.round(Web3.utils.fromWei(walletBalanceInWei) * 1000) / 1000;
      toast.success(
        CustomToastWithLink({
          icon: WalletConnectedIcon,
          title: ToastTitle.WALLET_CONNECTED,
          description: ToastDescription.WALLET_CONNECTED,
          time: 'Now',
        })
      );
      setAccount(walletAddress[0]);
      setWalletEth(walletBalanceInEth);
      getBalances();
      return walletAddress[0];
    } catch (error: any) {
      // if (isMobile || isTablet) {
      //   toast.error(
      //     CustomToastWithLink({
      //       icon: ErrorIcon,
      //       title: ToastTitle.ERROR,
      //       description: 'Open NAPA Website in Metamask Mobile App',
      //       time: 'Now',
      //     })
      //   );
      //   return;
      // }
      if (
        error.message ===
        "Cannot read properties of undefined (reading 'request')"
      ) {
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Metamask Extension Not Found',
            description: 'Please install a metamask extension to login',
            time: 'Now',
          })
        );
        return;
      }
    }
  };

  //adding web3 wallet connection using ethers start

  // const goerliChainHex = '0x5';
  // const sepoliaChainHex = '0xAA36A7';

  //need to call this function when user clicks on metamask option
  const call = async () => {
    async function connect() {
      const externalProvider = await web3Modal.connect();
      return new ethers.providers.Web3Provider(externalProvider);
    }
    const web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
    });
    const provider = await connect();
    const { chainId } = await provider.getNetwork();
    // validateNetwork(chainId);
    await provider.getNetwork();
    const signer = provider.getSigner(0);
    const address = await signer.getAddress();
    const balance = provider.getBalance(address);
    setAddress(address);
    setBalance(balance);
    setSigner(signer);
    setChainId(chainId);
    console.log(address, balance, signer, chainId, 'all details');
    //need to make these variables avialable to all components
    return { address, balance, signer, chainId };
  };

  // async function validateNetwork(currentNetwork: any) {
  //   if (window.ethereum) {
  //     console.log(currentNetwork, 'currentNetwork');
  //     if (currentNetwork !== goerliChainHex) {
  //       window.ethereum
  //         .request({
  //           method: 'wallet_switchEthereumChain',
  //           params: [{ chainId: goerliChainHex }], // chainId must be in hexadecimal numbers
  //         })
  //         .then(async function (result: any) {
  //           const provider = new ethers.providers.Web3Provider(window.ethereum);
  //           console.log(`provider is ${provider} and result is: ${result}`);
  //           // alert('Connected to correct Network');
  //         })
  //         .catch(function (error: any) {
  //           alert(`Problem occured while changing   : ${error.message} `);
  //           console.log(
  //             'Problem occured while changing Network: ',
  //             error.message
  //           );
  //         });
  //     } else {
  //       console.log('Connected to correct Network');
  //     }
  //   }
  // }

  //adding web3 wallet connection using ethers ends

  const value = {
    account,
    walletBnb,
    walletEth,
    walletNapa,
    connectWallet,
    getAccounts,
    call,
    address,
    balance,
    signer,
    chainId,
    setNapaWalletAccount,
    napaWalletAccount,
    setMetaMaskAccount,
    metaMaskAccount,
    setAccount
  };

  return (
    <WebThreeContext.Provider value={value}>
      <React.Fragment>
        <div>{lodash.get(props, 'children', false) && props.children}</div>
      </React.Fragment>
    </WebThreeContext.Provider>
  );
};

export default WebThreeContext;
