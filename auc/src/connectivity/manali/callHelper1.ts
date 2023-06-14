import { ErrorIcon } from '../../components/assets';
import { CustomToastWithLink } from '../../components/CustomToast/CustomToast';
import { toast } from 'react-toastify';

// SNFT Function

//1 lazyMint with Napa and USDT
export const lazyMint = async (
  contract: any,
  _tknId: number,
  _seller: string,
  salePrice: string | undefined,
  _TokenSelect: number | string,
  tokenUri: string,
  _transferToNapa: boolean,
  _setSaleMinter: boolean
) => {
  return await contract.lazyMint(
    _tknId,
    _seller,
    salePrice,
    _TokenSelect,
    tokenUri,
    _transferToNapa,
    _setSaleMinter
  );
};

//2 lazyMint with eth
export const lazyMintEth = async (
  contract: any,
  _tknId: number,
  _seller: string,
  salePrice: string,
  _TokenSelect: number | string,
  tokenUri: string,
  _transferToNapa: boolean,
  _setSaleMinter: boolean,
  tx?: any
) => {
  return await contract.lazyMint(
    _tknId,
    _seller,
    salePrice,
    _TokenSelect,
    tokenUri,
    _transferToNapa,
    _setSaleMinter,
    tx
  );
};


export interface AuctionStruct {
  auctionId: number;
  creator: string;
  nftId: number;
  nftAddress: string;
  startTime: number;
  endTime: number;
  nextBidPercentage: number;
  paymentType: string;
  totalAmountInAuction: number;
  currentBid: number;
  isPrivate: boolean;
  isAlive: boolean;
  memberAddress: AuctionMemberStruct[];
  auctionWinner: string;
}

export interface AuctionMemberStruct {
  // Define the properties of AuctionMemberStruct if applicable
}

export interface NFTMetadata {
  name: string;
  image: string;
  // Add other relevant metadata properties
}



//3 fetchEthFee
export const ethFee = async (contract: any) => {
  return await contract.ethFee();
};

//4 NapaMintFee
export const NapaMintFee: any = async (contract: any) => {
  return await contract.NapaMintFee();
};

//5 fetchEthFee
export const UsdtMintFee = async (contract: any) => {
  return await contract.UsdtMintFee();
};

//6 approve
export const approve = async (
  contract: any,
  approveTo: string,
  _amount: string
) => {
  try {
    return await contract.approve(approveTo, _amount);
  } catch (e: any) {
    console.log(e.message, e.code, 'Error Caught');
    toast.error(
      CustomToastWithLink({
        icon: ErrorIcon,
        title: 'Error',
        description: e.message,
        time: 'Now',
      })
    );
  }
};

//7 allowance
export const allowance = async (
  contract: any,
  _from?: string,
  _to?: string
) => {
  return await contract.allowance(_from, _to);
};

//8 marketPlace
export const marketPlace = async (contract: any) => {
  return await contract.marketPlace();
};

//9  updateMarketPlace
export const updatemarketPlaceAddress = async (
  contract: any,
  _newMarketAddress: string
) => {
  return await contract.updatemarketPlaceAddress(_newMarketAddress);
};

// setApprovalForAll(address operator, bool _approved)

//10  setApprovalForAll
export const setApprovalForAll = async (
  contract: any,
  operator: string,
  _approved: boolean
) => {
  return await contract.setApprovalForAll(operator, _approved);
};

//11  isApprovedForAll
export const isApprovedForAll = async (
  contract: any,
  owner: string,
  operator: string
) => {
  return await contract.isApprovedForAll(owner, operator);
};

//12  ownerOf
export const ownerOf = async (contract: any, _tokenId: number | string) => {
  return await contract.ownerOf(_tokenId);
};

//13  currentTokenId
export const currentTokenId = async (contract: any) => {
  return await contract.currentTokenId();
};

//-------------------------------------  MarketPlaceContract Functions -----------------------------------------------

//1 nftInfo
export const nftInfo = async (contract: any, _nftId: number | string) => {
  return await contract.nftInfo(_nftId);
};

export const makeBid = async (
  contract: any,
  auctionId: number,
  amount: number | string
) => {
  return await contract.makeBid(auctionId, amount);
};


//2.0 buyNftToken
export const buyNftToken = async (
  contract: any,
  _tokenSelect: number,
  _tokenID: number | string
) => {
  return await contract.buyNftToken(_tokenSelect, _tokenID);
};

//2.1 buyNftTokenWithEth
export const buyNftTokenWithEth = async (
  contract: any,
  _tokenSelect: number,
  _tokenID: number | string,
  _tx: any
) => {
  return await contract.buyNftToken(_tokenSelect, _tokenID, _tx);
};

//3 setSaleFromWallet
export const setSaleFromWallet = async (
  contract: any,
  _tokenId: number | string,
  salePrice: number | string
) => {
  return await contract.setSaleFromWallet(_tokenId, salePrice);
};

//5 napaTokenAmount
export const napaTokenAmount = async (contract: any) => {
  return await contract.napaTokenAmount();
};

//6 getLatestPrice
export const getLatestPrice = async (contract: any) => {
  return await contract.getLatestPrice({ gasLimit: 5000000 });
};


//7.0 buyOtherNftToken
export const buyOtherNftToken = async (
  contract: any,
  _tokenSelect: string | number,
  _tokenId: number | string,
  nftAddress: string
) => {
  return await contract.buyOtherNftToken(_tokenSelect, _tokenId, nftAddress);
};


//7.1 buyOtherNftTokenWithEth
export const buyOtherNftTokenWithEth = async (
  contract: any,
  _tokenSelect: string | number,
  _tokenId: number | string,
  nftAddress: string,
  _tx: any
) => {
  return await contract.buyOtherNftToken(_tokenSelect, _tokenId, nftAddress, _tx);
};
