import React, { useEffect, useState } from 'react';
import styles from './SectionOne.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { SnftResponse } from '../../../types/marketplace';
import { deleteSnft } from '../../../services/MarketplaceApi';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../../../components/CustomToast/CustomToast';
import {
  DoneIcon,
  ErrorIcon,
  EtheriumIcon,
  UsdtYellowBgIcon,
} from '../../../components/assets';
import { FadeLoader } from 'react-spinners';
import {
  _setSaleFromWallet,
  _buyNftToken,
  _nftInfo,
} from '../../../connectivity/mainFunctions/marketFunctions';
import { createNewTransaction } from '../../../services/Transaction';
import useWebThree from '@/hooks/useWebThree';
import {
  auctionContract,
  marketPlaceContract,
  napaTokenContract,
  newNapaNftContract,
  usdtTokenContract,
  usdttokenContract,
} from '@/connectivity/contractObjects/contractObject1';

import abi from '@/connectivity/abis/usdtToken.json';
import abi1 from '@/connectivity/abis/Auction.json';

import {
  auctionaddress,
  marketPlace,
  nftAddress,
  usdtAddress,
} from '@/connectivity/addressHelpers/addressHelper';
import {
  approve,
  ethFee as ethFees,
  lazyMint,
  lazyMintEth,
  UsdtMintFee as _UsdtMintFee,
  NapaMintFee as _NapaMintFee,
  napaTokenAmount,
  nftInfo,
  getLatestPrice,
  buyNftToken,
  buyNftTokenWithEth,
} from '@/connectivity/callHelpers/callHelper1';
// import { decimals } from '@/connectivity/callHelpers/napaTokenCallHandlers';
import useProfile from '@/hooks/useProfile';
import { pinToIPFS } from '../../../services/MarketplaceApi';
import Button from '@/components/Button/Button';
import { createOffer } from '@/services/offersApi';
import Loading from '@/components/Loading/Loading';

import { Contract, ethers } from 'ethers';
import axios from 'axios';
import { NFTMetadata } from '@/connectivity/manali/callHelper1';


type SectionOneProps = {
  snftDetails: SnftResponse | null;
  profileId: string | null;
};


let usdtAbi = abi.abi;
let auctionAbi = abi1.abi;

interface CancelAuctionButtonProps {
  auctionId: string;
}

export default function SectionOne({
  snftDetails,
  profileId,
}: SectionOneProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [auctionId, setAuctionId] = React.useState('');
  const [auctionData,setAuctionData] = React.useState('');
  const [nftMetadata, setNFTMetadata] = useState<{ [key: string]: NFTMetadata }>({});


  const [expiresIn, setExpiresIn] = React.useState('');
  const [submitOfferLoading, setSubmitOfferLoading] = React.useState(false);
  const [error, setError] = React.useState({
    amount: '',
    expiresIn: '',
  });
  console.log('amount, expiresIn', amount, expiresIn);

  console.log(snftDetails, 'all data');

  const { address, balance, chainId, signer, call } = useWebThree();
  useEffect(() => {
    // Function to be called
    async function fetchData() {
      // Call the function from useWebThree hook
      const result = await call();
      console.log(result);
    }

    // Call the function when the component mounts
    fetchData();
  }, []);

  console.log(address, balance, chainId, signer);
  const handleDeleteSnft = async () => {
    setLoading(true);
    //@ts-ignore
    const { error, message } = await deleteSnft(router?.query?.id);
    if (error) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      setLoading(false);
      return;
    }
    toast.success(
      CustomToastWithLink({
        icon: DoneIcon,
        title: 'Success',
        description: message,
        time: 'Now',
      })
    );
    setLoading(false);
    router.push('/marketplace');
  };

  const handleNewTransaction = async (data: any) => {
    const { error, message }: any = await createNewTransaction(data);
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
  };

  // const handleBuySnft = async (id: string) => {
  //   const { error, message }: any = await buySnft(id);
  //   if (error) {
  //     setLoading(false);
  //     toast.error(
  //       CustomToastWithLink({
  //         icon: ErrorIcon,
  //         title: 'Error',
  //         description: message,
  //         time: 'Now',
  //       })
  //     );
  //     return;
  //   }
  //   router.push({
  //     pathname: '/marketplace',
  //     query: { redirect: "MySNFTs" }
  //   }, '/marketplace')
  // };

  //connectivity functions starts here

  //1 for approval of tokens
  const doApproval: any = async (
    amt: string,
    transactionType: number | string
  ) => {
    if (transactionType == 0) {
      // Check if the transaction is for NPA tokens
      const npaTokenctr: any = await napaTokenContract(signer); // Get the NPA token contract
      console.log(npaTokenctr, 'npaTokenctr contract');
      console.log('isInString', amt);
      try {
        const alw1 = await approve(npaTokenctr, nftAddress, amt.toString()); // Call the approve function of the NPA token contract to allow spending of tokens
        console.log(await alw1.wait(), 'allowance of napa is in progress');
        return alw1;
      } catch (e) {
        console.log(e, 'approval error');
      }
    } else if (transactionType == 1) {
      // Check if the transaction is for USDT tokens
      const usdtTokenctr: any = await usdtTokenContract(signer); // Get the USDT token contract
      console.log(usdtTokenctr, 'usdtTokenctr contract');
      try {
        const alw1 = await approve(usdtTokenctr, nftAddress, amt.toString()); // Call the approve function of the USDT token contract to allow spending of tokens
        console.log(await alw1.wait(), 'allowance of usdt is in progress');
        return alw1;
      } catch (e) {
        console.log(e, 'approval error');
      }
    } else {
      // If the transaction is not for tokens, return -1
      console.log("don't need any approval check as you've opted for ether");
      return -1;
    }
  };

  //2 Main LazyMint function
  const LazyFunction = async (
    _tokenId: number,
    _supposedSeller: string,
    _ethFee: string,
    typeOfTransaction: number | string,
    _tokenUri: string,
    _transferToNapa: boolean,
    _setSaleMinter: boolean,
    callback: CallableFunction
  ) => {
    // get NftCtr instance from newNapaNftContract function
    const NftCtr: any = await newNapaNftContract(signer);

    try {
      if (typeOfTransaction == 0) {
        console.log('inside1 ');
        // Get additional Napa token fee for minting NFT
        let additional: any = await _NapaMintFee(NftCtr);
        let convertedEthFee: any = _ethFee;
        console.log(_ethFee, '_ethFee');
        // Calculate the total fee by adding the additional fee and eth fee
        const hit = Number(Number(_ethFee)) + Number(additional.toString());
        console.log(hit, 'new hit');
        // Check if total fee is greater than the provided eth fee
        if (hit > convertedEthFee) {
          // If yes, do token approval for Napa token and then mint NFT
          await doApproval(hit.toString(), typeOfTransaction)
            .then(async function checkApproval(res: any) {
              const mainRes = await res.wait();
              if (await mainRes) {
                const _lazy = await lazyMint(
                  NftCtr,
                  _tokenId,
                  _supposedSeller,
                  hit.toString(),
                  typeOfTransaction,
                  _tokenUri,
                  _transferToNapa,
                  _setSaleMinter
                );
                const _lazyRes = await _lazy.wait();
                console.log(await _lazyRes, '_lazy response');
                callback(undefined, _lazyRes);
              } else {
                console.log('waiting for confirmation');
                checkApproval(res);
              }
            })
            .catch((e: any) => {
              callback(e);
              console.log('Unknown error occured :', e);
              toast.error(
                CustomToastWithLink({
                  icon: ErrorIcon,
                  title: 'Error',
                  description: e?.error?.message,
                  time: 'Now',
                })
              );
            });
        }
      } else if (typeOfTransaction == 1) {
        // Get additional USDT fee for minting NFT
        console.log('inside 2 ');
        // Get additional Napa token fee for minting NFT
        let additional: any = await _UsdtMintFee(NftCtr);
        let convertedEthFee: any = _ethFee;
        console.log(_ethFee, '_eth Fee');
        // Calculate the total fee by adding the additional fee and eth fee
        const hit = Number(Number(_ethFee)) + Number(additional.toString());
        console.log(hit, 'new hit');

        // Check if total fee is greater than the provided eth fee
        if (hit > convertedEthFee) {
          // If yes, do token approval for Napa token and then mint NFT
          await doApproval(hit.toString(), typeOfTransaction)
            .then(async function checkApproval(res: any) {
              const mainRes = await res.wait();
              console.log(mainRes, 'approval response');
              if (await mainRes) {
                const _lazy = await lazyMint(
                  NftCtr,
                  _tokenId,
                  _supposedSeller,
                  hit.toString(),
                  1,
                  _tokenUri,
                  _transferToNapa,
                  _setSaleMinter
                );
                const _lazyRes = await _lazy.wait();
                console.log(await _lazyRes, '_lazy response');
                callback(undefined, _lazyRes);
              } else {
                console.log('waiting for confirmation');
                checkApproval(res);
              }
            })
            .catch((e: any) => {
              callback(e);
              console.log('Unknown error occured :', e);
              toast.error(
                CustomToastWithLink({
                  icon: ErrorIcon,
                  title: 'Error',
                  description: e?.error?.message,
                  time: 'Now',
                })
              );
            });
        }
      } else {
        // Calculate total fee for eth minting
        const etherFee = await ethFees(NftCtr);
        let hit = Number(Number(_ethFee)) + Number(etherFee.toString());
        console.log(_ethFee, etherFee.toString(), hit.toFixed(9), 'Problem');
        // Mint NFT with eth
        const _lazy = await lazyMintEth(
          NftCtr,
          _tokenId,
          _supposedSeller,
          hit.toString(),
          2,
          _tokenUri,
          false,
          false,
          { value: hit.toString() }
        );
        console.log('Hang on Lazymint with ETH is in process...');
        const _lazyRes = await _lazy.wait();
        console.log(await _lazyRes, 'Successful Lazymint with ETH ');
        callback(undefined, _lazyRes);
      }
    } catch (e: any) {
      callback(e);
      console.log(e.code, e.message, 'caught');
    }
  };

  //3 buynft from market place
  const _buyNftTokenFromMarket = async (
    transactionType: number | string,
    _tokenId: number | string,
    amount: string | number,
    callback: CallableFunction
  ) => {
    console.log('you are buying token :', _tokenId);
    const isApprovedTkn = await doApprovalForToken(transactionType, _tokenId);

    console.log('lvl2');
    const marketCtr: any = await marketPlaceContract(signer);
    if (Number(transactionType) == 0 && (await isApprovedTkn)) {
      console.log('buy from market in NAPA');
      await buyNftToken(marketCtr, 0, _tokenId)
        .then(async (res: any) => {
          const response = await res.wait();
          console.log(await response, 'buyNftToken res');
          callback(undefined, response);
        })
        .catch((e: any) => {
          callback(e);
          console.log(e);
          toast.error(
            CustomToastWithLink({
              icon: ErrorIcon,
              title: 'Error',
              description: e?.error?.message,
              time: 'Now',
            })
          );
        });
    } else if (Number(transactionType) == 1 && (await isApprovedTkn)) {
      console.log('buy from market in USDT');
      await buyNftToken(marketCtr, Number(transactionType), _tokenId)
        .then(async (res: any) => {
          const response = await res.wait();
          console.log(await response, 'buyNftToken res');
          callback(undefined, response);
        })
        .catch((e: any) => {
          callback(e);
          console.log(e);
          toast.error(
            CustomToastWithLink({
              icon: ErrorIcon,
              title: 'Error',
              description: e?.error?.message,
              time: 'Now',
            })
          );
        });
    } else {
      let valInEth = await calculateTokenAllowance(2, _tokenId);
      console.log(valInEth, 'valInEth');
      if (isApprovedTkn) {
        console.log('in to the ether put my stress right now');
        await buyNftTokenWithEth(marketCtr, Number(transactionType), _tokenId, {
          value: amount.toString(),
        })
          .then(async (res: any) => {
            const response = await res.wait();
            console.log(response, 'approve res');
            callback(undefined, response);
          })
          .catch((e: any) => {
            callback(e);
            console.log(e);
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: e?.error?.message,
                time: 'Now',
              })
            );
          });
      }
    }
  };

  //4 approve Napa Or Usdt Token
  // This function does the approval for a specific token contract
  const doApprovalForToken: any = async (
    transactionType: number,
    tokenId: string | number
  ) => {
    console.log('gg', tokenId);
    const amountToApprove: any = await calculateTokenAllowance(
      transactionType,
      tokenId
    );
    console.log((amountToApprove * 2).toString(), 'token allowance');
    if (transactionType == 0) {
      // Check if the transaction is for NPA tokens
      const npaTokenctr: any = await napaTokenContract(signer); // Get the NPA token contract
      console.log(npaTokenctr, 'npaTokenctr contract');
      const approveRes = await approve(
        npaTokenctr,
        marketPlace,
        (amountToApprove * 2).toString()
      ); // Call the approve function of the NPA token contract to allow spending of tokens
      console.log(approveRes, 'approve response of napa');
      return await approveRes.wait();
    } else if (transactionType == 1) {
      // Check if the transaction is for USDT tokens
      const usdtTokenctr: any = await usdtTokenContract(signer); // Get the USDT token contract
      console.log(usdtTokenctr, 'usdtTokenctr contract');
      const approveRes = await approve(
        usdtTokenctr,
        marketPlace,
        (amountToApprove * 2).toString()
      ); // Call the approve function of the USDT token contract to allow spending of tokens
      console.log(approveRes, 'approve response of usdt');
      return await approveRes.wait();
    } else {
      // If the transaction is not for tokens, return -1
      console.log("don't need any approval check as you've opted for ether");
      return -1;
    }
  };

  //5 calculates token allowance for each type
  const calculateTokenAllowance = async (
    transactionType: number,
    toknId: string | number
  ) => {
    // console.log(toknId),"gg";
    const decimals: number = 10 ** 18;
    const otherDecimals: number = 10 ** 10;
    const marketCtr: any = await marketPlaceContract(signer);
    const { salePrice } = await nftInfo(marketCtr, toknId.toString());
    console.log(salePrice.toString(), 'mysale', toknId);
    if (transactionType == 0 || transactionType == 1) {
      const _napaTokenAmount = await napaTokenAmount(marketCtr);
      const calculatedAmount = (await salePrice) / (await _napaTokenAmount);
      console.log(calculatedAmount * decimals, 'total allowance need');
      return calculatedAmount * decimals;
    } else {
      console.log('into ethers part');
      const _getLatestPrice: number = await getLatestPrice(marketCtr);
      console.log(_getLatestPrice.toString(), '_getLatestPrice aa');
      const calculatedAmount: number =
        (await salePrice) / (_getLatestPrice * otherDecimals);
      console.log(salePrice.toString(), 'salePrice');
      console.log(calculatedAmount, 'calculated');
      return calculatedAmount.toFixed(18);
    }
  };

  const handleCreateTransactionTable = async (err: any, data: any) => {
    console.log('error while buying listed item', err);
    console.log('lezy response data', data);
    // if (err) {
    //   setLoading(false);
    // } else {
    const newTransaction = {
      sellerWallet: data?.to ? data?.to : '',
      buyerWallet: data?.from ? data?.from : '',
      type: 'SNFT',
      itemId: snftDetails?.snftId,
      amount: snftDetails?.amount,
      currencyType: snftDetails?.currencyType,
      status: '1',
      txId: data?.transactionHash ? data?.transactionHash : '',
      contractAddress: data?.contractAddress ? data.contractAddress : '',
      tokenId: snftDetails?.tokenId,
      wallet: 'metamask',
      profileId: profileId,
      owner: data?.from ? data?.from : '',
    };
    await handleNewTransaction(newTransaction);
    router.push(
      {
        pathname: '/marketplace',
        query: { redirect: 'MySNFTs' },
      },
      '/marketplace'
    );
    // await handleBuySnft(snftDetails?.snftId as string);
    setLoading(false);
    // }
  };

  //6 lazy mint connectivity function
  const lazyMintHandler = async (data: any) => {
    const tokenId = data.tokenId.toString();
    const transactionType = data.currencyType;

    // console.log((data.currencyType).toString(), "LLL")
    const seller = data.generatorId;
    const _amount = data.amount;
    console.log(_amount, 'AMOUNTT');

    console.log('changes appeared', signer, address, data);
    const NFTCtr = await newNapaNftContract(signer);
    // data.tokenId.toString()
    let isNFTAvailable;
    try {
      isNFTAvailable = await NFTCtr._exists(tokenId);
      console.log(isNFTAvailable, 'NFAVA');
    } catch (e) {
      isNFTAvailable = 0;
      console.log(e, 'NOW it will go to Lazymint');
    }
    console.log('NFT AVAILABILITY', isNFTAvailable);
    if (isNFTAvailable) {
      let val = data.tokenId.toString();
      console.log('NFT exists', val);
      // alert("You are buying from market");
      console.log('You are buying from market');
      setLoading(true);
      _buyNftTokenFromMarket(
        transactionType,
        val,
        _amount,
        handleCreateTransactionTable
      );
    } else {
      console.log("NFT doesn't exists");
      // alert(`You are buying by Lazymint ${transactionType}`);
      console.log(`You are buying by Lazymint ${transactionType}`);
      console.log('IPFS url is being generated.....');
      const metadataUrl = await generateIPFS();
      console.log(metadataUrl, 'metadataUrl');
      try {
        setLoading(true);
        await LazyFunction(
          tokenId,
          seller,
          _amount,
          transactionType,
          metadataUrl,
          false,
          false,
          handleCreateTransactionTable
        )
          .then(async (res: any) => {
            console.log('hang on lazyint is in progress...');
            console.log(await res, 'lazymint response');
          })
          .catch((e: any) => {
            console.log(e, 'Error While Lazymint');
          });
      } catch (e) {
        console.log('error :', e);
      }
    }
  };

  //API Key: 60b6f40d19ff82e8547a
  //API Secret: bf8632acaad65c73cce04654ed9db02138961f6c80655b4996fa753941751522
  //7 Pinata IPFS setup
  const { profileDetails } = useProfile();
  const generateIPFS = async () => {
    setLoading(true);
    console.log('generating IPFS ... ');
    const data = {
      thumbnail: snftDetails?.thumbnail,
      videoURL: snftDetails?.videoURL,
      id: snftDetails?.snftId,
      userName: profileDetails?.profileName,
      avatar: profileDetails?.avatar,
      description: snftDetails?.SNFTDescription,
      title: snftDetails?.SNFTTitle,
    };
    const result = await pinToIPFS(data);
    const mainUrl: any = await result.data.data.IpfsHashURL;
    console.log('pinToIPFS result', mainUrl);
    return mainUrl;
  };
  
  const makeBid1 = async (auctionId: string, amount: string) => {
    const usdttokenContract = new ethers.Contract(usdtAddress, usdtAbi, signer);
    const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
    const amountInWei = ethers.utils.parseUnits(amount, "ether");

    console.log(amount);

    try {
      console.log(amountInWei.toString(), amount, auctionId, "Doneee")
      const approveTx = await usdttokenContract.approve(auctionaddress, amountInWei.toString());
      const approveTxReceipt = await approveTx.wait(); 
      console.log(`Approval transaction confirmed. Gas used: ${approveTxReceipt.gasUsed.toString()}`);

    } catch (error) {
      console.error("App error:", error);
      return;
    }
    try {
      const result = await auctionContract.makeBid("8", "10");
      console.log("Bid transaction hash:", result.hash);
    } catch (error) {
      console.error("Bid error:", error);
    }
  }

  

  // const CancelAuction = async (auctionId: string) => {
  //   const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
  //   try {
  //     const result = await auctionContract.cancelAuction("7");
  //     console.log("CancelAuction transaction hash:", result.hash);
  //   } catch (error) {
  //     console.error("CancelAuction error:", error);
  //   }
  // }

  const fetchAuctionData = async () => {
    const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
    try {
      const fetchedData = await auctionContract.fetchAllAuctionItems();
      const formattedData = fetchedData.map((item: any) => ({
        auctionId: Number(item.auctionId),
        creator: item.creator,
        nftId: Number(item.nftId),
        nftAddress: item.nftAddress,
        startTime: Number(item.startTime),
        endTime: Number(item.endTime),
        nextBidPercentage: Number(item.nextBidPercentage),
        paymentType: item.paymentType,
        totalAmountInAuction: Number(item.totalAmountInAuction),
        currentBid: Number(item.currentBid),
        isPrivate: item.isPrivate,
        isAlive: item.isAlive,
        memberAddress: item.memberAddress,
        auctionWinner: item.auctionWinner,
      }));

      setAuctionData(formattedData);

      for (const item of formattedData) {
        await fetchNFTMetadata(item.nftAddress, item.nftId);
      }
    } catch (error) {
      console.error('Error fetching auction data:', error);
    }
  };

  const fetchNFTMetadata = async (nftAddress: string, nftId: number) => {
    try {
      const response = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${nftAddress}/${nftId}?chain=sepolia&format=decimal&media_items=false`,
        {
          headers: {
            accept: 'application/json',
            'X-API-Key': '8BbCyE1nPfyXst0QUkeXtvIUpm8ndIdRiIyLxv1JNQrBgORmOgvad03SCxt98w4g',
          },
        }
      );  
      console.log(JSON.parse(response.data.metadata), ':Response.data');

      const { name, image } = JSON.parse(response.data.metadata);

      setNFTMetadata((prevMetadata) => ({
        ...prevMetadata,
        [`${nftAddress}-${nftId}`]: { name, image },
      }));
    } catch (error) {
      console.error('Error fetching NFT metadata:', error);
    } 
  };

  const CancelAuction = async (auctionId: string,auctionData:any) => {
    const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
    try {
     
      if (signer.address !== auctionData.creator ) {
        console.error("You're not the owner of this auction.");
      }else{
        const result = await auctionContract.cancelAuction("8");
        console.log("CancelAuction transaction hash:", result.hash);
      }
    } catch (error) {
      console.error("CancelAuction error:", error);
    }
  }
  
  const ClaimNFTButton = async (auctionId: string,auctionData:any) => {
    const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);   
    try {
      if (signer.address !== auctionData.auctionWinner ) {
        console.error("You're not the owner of this auction.");
      }else{
        const result = await auctionContract.claimNFT("8");
        console.log("Claim transaction hash:", result.hash);
      }
    } catch (error) {
      console.error("Claim error:", error);
    }
  }

  const withdrawBid = async (auctionId: string,auctionData:any) => {
    const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
    
      try {
        if (signer.address !== auctionData.auctionWinner ) {
          const result = await auctionContract.withDrawBid("7");
          console.log("withdrawBid transaction hash:", result.hash);
        }else{
          console.error("You are a highest bidder so you cann't withdrawbid");
        }
    } catch (error) {
      console.error("withdrawBid error:", error);
  }
}

  // const addmember = async (auctionId: string, members: string) => {
  //   const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
  //   try {
  //     const result = await auctionContract.withDrawBid("7");
  //     console.log("withdrawBid transaction hash:", result.hash);
  //   } catch (error) {
  //     console.error("withdrawBid error:", error);
  //   }
  // }

  const makeBid = async (auctionId: string, amount: string) => {

    setError({
      amount: '',
      expiresIn: '',
    });
    if (!expiresIn) {
      setError((prev) => {
        return {
          ...prev,
          expiresIn: 'Expire Days is required',
        };
      });
    }
    if (!amount) {
      setError((prev) => {
        return {
          ...prev,
          amount: 'Offer Amount is required',
        };
      });
    }
    if (!amount || !expiresIn) return;
    const newOffer = {
      snftId: snftDetails?.snftId as string,
      profileId: profileId as string,
      expiresIn,
      amount,
    };
    setSubmitOfferLoading(true);
    const { error, message } = await createOffer(newOffer);
    if (error) {
      setSubmitOfferLoading(false);
      setOpen(false);
      setAmount('');
      setExpiresIn('');
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
    setSubmitOfferLoading(false);
    setOpen(false);
    setAmount('');
    setExpiresIn('');
    toast.success(
      CustomToastWithLink({
        icon: DoneIcon,
        title: 'Success',
        description: 'Offer Was Submitted Successfully',
        time: 'Now',
      })
    );
  }; 

  return (
    <div className={styles.SectionOne}>
      <div className={styles.CustomGridContainer}>
        <div className={styles.CustomGrid}>
          <div className={styles.imgPerntScone}>
            {/* <Image
              src="/img/crat_nft_tow_aj.png"
              alt=""
              width={540}
              height={540}
            /> */}
            <video
              width={'100%'}
              height={'540px'}
              autoPlay
              controls
              muted
              loop
              src={snftDetails?.videoURL as string}
            ></video>
          </div>
        </div>
        <div className={styles.CustomGrid}>
          <div className={styles.ScOneLeftCont}>
            <h1>{snftDetails?.SNFTTitle}</h1>
            <p>{snftDetails?.SNFTDescription}</p>
            <div className={styles.imgAndperaFlex}>
              <img
                src={`${snftDetails?.userImage
                  ? snftDetails?.userImage
                  : '/assets/images/img_avatar.png'
                  }`}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: '50px' }}
              />
              <p>{snftDetails?.userName}</p>
            </div>
            <div className={styles.CurrentBitBox}>
              <div className={styles.CurrentBitBoxInrr}>
                <p>{snftDetails?.type == "Fixed Price" ? "Fixed Price" : "Best Offer"}</p>
                <div className={styles.imgAdnHH}>
                  {snftDetails?.currencyType == '0' ? (
                    <Image
                      src="/img/napa_ic.svg"
                      height="28px"
                      width="28px"
                      alt=""
                      className=""
                    />
                  ) : snftDetails?.currencyType == '1' ? (
                    <Image
                      src={UsdtYellowBgIcon}
                      alt=""
                      width="28px"
                      height="28px"
                    />
                  ) : (
                    <Image
                      src={EtheriumIcon}
                      alt=""
                      width="28px"
                      height="28px"
                    />
                  )}
                  <h3>{snftDetails?.amount ? snftDetails?.amount : '--'}</h3>
                </div>
              </div>
              <div className={styles.CurrentBitBoxInrr}>
                <p>Ending In</p>
                <div className={styles.imgAdnHH}>
                  <h3>
                    {snftDetails?.duration ? snftDetails?.duration : '--'}
                  </h3>
                </div>
              </div>
            </div> <br />
            <div
           onClick={() => { withdrawBid (auctionId,auctionData)} } 
              className={styles.BottomAction}
              > 
              <Button text="Withdraw" outlined />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className={styles.thrBtnPrnt}>
                {open && (
                  <div className={styles.submitModalContainer}>
                    <div className={styles.icon}>
                      <Image
                        className={styles.close}
                        onClick={() => {
                          setOpen(false);
                          setError({ amount: '', expiresIn: '' });
                          setAmount('');
                          setExpiresIn('');
                        }}
                        src="/img/exit_icon.svg"
                        alt=""
                        width="24px"
                        height="24px"
                      />
                    </div>
                    <div className={`col-lg-12 col-lg-12-rspnsv`}>
                      <div className={styles.max540}>
                        <div className={styles.TopLogo}></div>
                        <div className={styles.MiddleCont}>
                          {/* <div className={styles.exitBtnContainer}> */}
                          <div className={styles.MiddleContInn}>
                            <div className={styles.text}>
                              <label>Enter Offer Amount</label>
                            </div>
                            {/* </div> */}
                            <input
                              type="text"
                              placeholder="0.000"
                              value={amount}
                              onChange={(e) => {
                                if (
                                  /^\d{0,9}(?:\.\d{0,8})?$/.test(e.target.value)
                                ) {
                                  setAmount(e.target.value);
                                }
                              }}
                              disabled={submitOfferLoading}
                            />
                            {!amount && error.amount && (
                              <span className={styles.errmsg}>
                                {error.amount}
                              </span>
                            )}
                            {/* <span /> */}
                            {/* <p>NAPA</p> */}
                          </div>
                        </div>
                        <div className={styles.BottomCont}>
                          <div className={styles.text}>
                            <label>Offer Expires</label>
                          </div>
                          <ul>
                            <li>
                              <input
                                type="radio"
                                name="lock-amout"
                                id="amountOne"
                                value="1 Days"
                                onChange={(e) => setExpiresIn(e.target.value)}
                                disabled={submitOfferLoading}
                              />
                              <p>1 Days</p>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="lock-amout"
                                id="amountOne"
                                value="3 Days"
                                onChange={(e) => setExpiresIn(e.target.value)}
                                disabled={submitOfferLoading}
                              />
                              <p>3 Days</p>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="lock-amout"
                                id="amountOne"
                                value="5 Days"
                                onChange={(e) => setExpiresIn(e.target.value)}
                                disabled={submitOfferLoading}
                              />
                              <p>5 Days</p>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="lock-amout"
                                id="amountOne"
                                value="7 Days"
                                onChange={(e) => setExpiresIn(e.target.value)}
                                disabled={submitOfferLoading}
                              />
                              <p>7 Days</p>
                            </li>
                          </ul>
                          {!expiresIn && error.expiresIn && (
                            <span className={styles.errmsg}>
                              {error.expiresIn}
                            </span>
                          )}
                        </div>
                        {submitOfferLoading ? (
                          <div className={styles.loaderContainer}>
                            <FadeLoader color="#ffffff" />
                          </div>
                        ) : (
                          <div
                            onClick={() => { makeBid1(auctionId, amount) }}
                            className={styles.BottomAction}
                          >
                            <Button text="Submit" outlined />
                          </div>
                          
                        )}
                        {submitOfferLoading ? (
                          <div className={styles.loaderContainer}>
                            <FadeLoader color="#ffffff" />
                          </div>
                        ) : (
                          <div
                          onClick={() => { ClaimNFTButton (auctionId,auctionData)} } 
                          className={styles.BottomAction}
                        > 
                          <Button text="claim nft" outlined />
                        </div>
                        )}
                        {submitOfferLoading ? (
                          <div className={styles.loaderContainer}>
                            <FadeLoader color="#ffffff" />
                          </div>
                        ) : (
                          <div
                          onClick={() => { CancelAuction(auctionId,auctionData) }}
                          className={styles.BottomAction}
                        > 
                          <Button text="CancelAuction" outlined />
                        </div>
                        
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {profileId == snftDetails?.profileId && (
                  <Link href={`/list-item?id=${router?.query?.id}`}>
                    <a
                      className={`${styles.linkPernt} ${(snftDetails?.listed == '2' || snftDetails?.listed == '0') && styles.disabled
                        }`}
                    >
                      Edit
                    </a>
                  </Link>
                )}
                {/* {profileId == snftDetails?.profileId && (
                  <Link href="">
                    <a onClick={handleDeleteSnft} className={styles.linkPernt}>
                      Delist
                    </a>
                  </Link>
                )} */}
                {profileId == snftDetails?.profileId &&
                  (snftDetails?.listed == '1' ||
                    snftDetails?.listed == '2') && (
                    <Link href="">
                      <a
                        onClick={() =>
                          snftDetails?.listed == '1' && handleDeleteSnft()
                        }
                        className={`${styles.linkPernt} ${snftDetails?.listed == '2' && styles.disabled
                          }`}
                      >
                        {snftDetails?.listed == '2' ? 'Sold' : 'Delist'}
                      </a>
                    </Link>
                  )}
                {profileId == snftDetails?.profileId &&
                  snftDetails?.listed == '0' && (
                    <a
                      href="javascript:void(0);"
                      onClick={() =>
                        router.push(`/list-item?id=${router?.query?.id}`)
                      }
                      className={styles.linkPernt}
                    >
                      Sell
                    </a>
                  )}

                {profileId != snftDetails?.profileId && (
                  // <Link href="">
                  <a
                    href="javascript:void(0);"
                    className={`${styles.linkPernt} ${(snftDetails?.listed == '2' || snftDetails?.type == "Fixed Price") && styles.disabled
                      }`}
                    onClick={() => {
                      if (snftDetails?.type == 'Fixed Price') {
                        toast.error(
                          CustomToastWithLink({
                            icon: ErrorIcon,
                            title: 'Error',
                            description:
                              'You cant not submit offer for the fixed price',
                            time: 'Now',
                          })
                        );
                        return;
                      }
                      setOpen(true);
                    }}
                  >
                    Submit Offer
                  </a>
                  // </Link>
                )}
                {profileId != snftDetails?.profileId && (
                  <a
                    href="javascript:void(0);"
                    className={`${styles.linkPernt} ${snftDetails?.listed == '2' && styles.disabled
                      }`}
                    onClick={() => {
                      if (snftDetails?.listed == '2') {
                        return;
                      }
                      lazyMintHandler(snftDetails);
                    }}
                  >
                    {snftDetails?.listed == '2' ? (
                      <span>Sold</span>
                    ) : (
                      <span>
                        {' '}
                        <span
                          className={`${snftDetails?.currencyType == '0'
                            ? styles.blue
                            : snftDetails?.currencyType == '1'
                              ? styles.green
                              : styles.lightBlue
                            }`}
                        >{`${snftDetails?.amount}  ${snftDetails?.currencyType == '0'
                          ? 'NAPA'
                          : snftDetails?.currencyType == '1'
                            ? 'USDT'
                            : 'ETH'
                          }`}</span>
                      </span>
                    )}
                  </a>
                )}
                <div className={`${styles.RowLabel} ${styles.RowSeven}`}>
                  <div className={styles.butnPernt}>
                    <button
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="/img/tow_dot_white_img.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end drpdwn_list">
                      <li>
                        <a className="dropdown-item" href="#">
                          Add to Watchlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Ask DAVE
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="co-batching-pools">
                          Create New Pool
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// for create new pool the NFT or SFT will be added to co-bathing pools on step 2 //
