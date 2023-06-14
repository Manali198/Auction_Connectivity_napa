import {
  lazyMint,
  ethFee as ethFees,
  NapaMintFee as _NapaMintFee,
  UsdtMintFee as _UsdtMintFee,
  lazyMintEth,
  approve,
} from '../callHelpers/callHelper1';
import {
  napaTokenContract,
  newNapaNftContract,
  usdtTokenContract,
} from '../contractObjects/contractObject1';
import { nftAddress } from '../addressHelpers/addressHelper';
import { ErrorIcon } from '../../components/assets';
import { CustomToastWithLink } from '../../components/CustomToast/CustomToast';
import { toast } from 'react-toastify';

let _signer: any = '';

/**
function to connect to wallet and get the address
This is an asynchronous function called "call" that initializes a web3Modal object,
connects to an Ethereum provider, sets the provider and signer, gets the current wallet address,
and logs the chain ID and the address. It also sets the connection status and current wallet address
using the "setConn" and "setCurrentWalletAddress" functions.
*/

/**
function to make approval from @walletAddress to @NFTcontract 
*/

// This function does the approval for a specific token contract
const doApproval: any = async (amt: string, transactionType: number) => {
  if (transactionType == 0) {
    // Check if the transaction is for NPA tokens
    const npaTokenctr: any = await napaTokenContract(_signer); // Get the NPA token contract
    console.log(npaTokenctr, 'npaTokenctr contract');
    try {
      const alw1 = await approve(npaTokenctr, nftAddress, amt.toString()); // Call the approve function of the NPA token contract to allow spending of tokens
      console.log(alw1, 'allowance of napa');
      return alw1;
    } catch (e) {
      console.log(e, 'approval error');
    }
  } else if (transactionType == 1) {
    // Check if the transaction is for USDT tokens
    const usdtTokenctr: any = await usdtTokenContract(_signer); // Get the USDT token contract
    console.log(usdtTokenctr, 'usdtTokenctr contract');
    try {
      const alw1 = await approve(usdtTokenctr, nftAddress, amt.toString()); // Call the approve function of the USDT token contract to allow spending of tokens
      console.log(alw1, 'allowance of usdt');
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

// const LazyButton = async () => {
//     let tknId = 1;
//     let supposedSeller = "0x20845c0782D2279Fd906Ea3E3b3769c196032C46";
//     let _ethFee = "1";
//     let typeOfTransaction = 0;
//     let _tokenUri = "https://www.ww.com";
//     let _transferToNapa = false;
//     let _setSaleMinter = false;

//     await LazyFunction(tknId, supposedSeller, _ethFee, typeOfTransaction, _tokenUri, _transferToNapa, _setSaleMinter);
// }

export const LazyFunction = async (
  _tokenId: number,
  _supposedSeller: string,
  _ethFee: string,
  typeOfTransaction: number,
  _tokenUri: string,
  _transferToNapa: boolean,
  _setSaleMinter: boolean,
  callback: CallableFunction
) => {
  const tknId = 1;
  // get NftCtr instance from newNapaNftContract function
  const NftCtr: any = await newNapaNftContract(_signer);
  // console.log(await NftCtr, "nannananananana")
  const supposedSeller: string = '0x20845c0782D2279Fd906Ea3E3b3769c196032C46';

  try {
    if (typeOfTransaction == 0) {
      console.log('inside1 ');
      // Get additional Napa token fee for minting NFT
      let additional: any = await _NapaMintFee(NftCtr);
      let convertedEthFee: any = _ethFee;
      console.log(_ethFee, '_ethFeeeeeeeeeeeee');
      // Calculate the total fee by adding the additional fee and eth fee
      const hit =
        Number(Number(_ethFee) * 10 ** 18) + Number(additional.toString());
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
                0,
                _tokenUri,
                _transferToNapa,
                _setSaleMinter
              );
              const _lazyRes = await _lazy.wait();
              console.log(await _lazyRes, '_lazy response');
              callback(undefined, _lazyRes)
            } else {
              console.log('waiting for confirmation');
              checkApproval(res);
            }
          })
          .catch((e: any) => {
            callback(e)
            console.log('Unknown error occured :', e);
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: e.error.message,
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
      console.log(_ethFee, '_eth Feeeeeeeeeeeee');
      // Calculate the total fee by adding the additional fee and eth fee
      const hit =
        Number(Number(_ethFee) * 10 ** 18) + Number(additional.toString());
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
                1,
                _tokenUri,
                _transferToNapa,
                _setSaleMinter
              );
              const _lazyRes = await _lazy.wait();
              console.log(await _lazyRes, '_lazy response');
            } else {
              console.log('waiting for confirmation');
              checkApproval(res);
            }
          })
          .catch((e: any) => {
            callback(e)
            console.log('Unknown error occured :', e);
            toast.error(
              CustomToastWithLink({
                icon: ErrorIcon,
                title: 'Error',
                description: e.error.message,
                time: 'Now',
              })
            );
          });
      }
    } else {
      // Calculate total fee for eth minting
      const etherFee = await ethFees(NftCtr);
      let hit =
        Number(Number(_ethFee) * 10 ** 18) + Number(etherFee.toString());
      // Mint NFT with eth
      const _lazy = await lazyMintEth(
        NftCtr,
        tknId,
        supposedSeller,
        hit.toString(),
        2,
        'www.ww.com',
        false,
        false,
        { value: hit.toString() }
      );
      console.log(await _lazy);
    }
  } catch (e: any) {
    callback(e)
    console.log(e.code, e.message, 'caught');
  }
};
