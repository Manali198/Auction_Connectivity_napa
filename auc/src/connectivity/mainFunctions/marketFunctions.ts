// import { ethers } from 'ethers';
// import Web3Modal from 'web3modal';
// import providerOptions from '../providers/providerOptions';

import {
    NapaMintFee as _NapaMintFee,
    UsdtMintFee as _UsdtMintFee,
    approve,
    buyNftToken,
    buyNftTokenWithEth,
    nftInfo,
    setSaleFromWallet,
    setApprovalForAll,
    ownerOf,
    isApprovedForAll,
    napaTokenAmount,
    getLatestPrice,
    // allowance
} from '../callHelpers/callHelper1';
import {
    marketPlaceContract,
    napaTokenContract,
    newNapaNftContract,
    usdtTokenContract,
} from '../contractObjects/contractObject1';
import {
    marketPlace as marketPlaceAddress,
} from '../addressHelpers/addressHelper';

let _signer: any = '';
const decimals: number = 10 ** 18;
const otherDecimals: number = 10 ** 10;
let CurrentWalletAddress: string = "";


//#1 buynft from market place
export const _buyNftToken = async (transactionType: number, _tokenId: number | string) => {
    // const _tokenId: number = 88;
    console.log("you are buying token :", _tokenId);
    const isApprovedTkn = await doApprovalForToken(transactionType);
    console.log("after isApprovedTkn ");
    console.log(await checkOwner(_tokenId),"current owner");

    console.log("lvl2");
    const marketCtr: any = await marketPlaceContract(_signer);
    if (Number(transactionType) == 0 && await isApprovedTkn) {
        console.log("buy from market in NAPA");
        await buyNftToken(marketCtr, 0, _tokenId).then(async (res: any) => {
            await res.wait();
            console.log(await res.wait(), "buyNftToken res");
        }).catch((e: any) => {
            console.log(e)
        })
    } else if (Number(transactionType) == 1 && await isApprovedTkn) {
        console.log("buy from market in USDT");
        await buyNftToken(marketCtr, 1, _tokenId).then(async (res: any) => {
            await res.wait();
            console.log(await res.wait(), "buyNftToken res");
        }).catch((e: any) => {
            console.log(e)
        })
    } else {
        let valInEth = await calculateTokenAllowance(2);
        console.log(valInEth, "valInEth");
        if (isApprovedTkn) {
            console.log("in to the ether put my stress right now");
            await buyNftTokenWithEth(marketCtr, Number(transactionType), _tokenId, { value: "100000000000000" }).then(async (res: any) => {
                await res.wait();
                console.log(await res.wait(), "approve res");
            }).catch((e: any) => {
                console.log(e)
            })
        }
    }
}

//#2 NFT info
export const _nftInfo = async (_tknId: number | string) => {
    const marketCtr: any[] | unknown = await marketPlaceContract(_signer);
    const _nftInfoRes = await nftInfo(marketCtr, _tknId);
    console.log("owner", _nftInfoRes[0]);
    console.log("salePrice", _nftInfoRes[1].toString(), "in round digits", Number(_nftInfoRes[1].toString()) / decimals);
    console.log("saleStatus", _nftInfoRes[2]);
    console.log("firstTimeSell", _nftInfoRes[3]);
}

//#3 setSale from market place *Working 
export const _setSaleFromWallet = async (_tokenId:number|string) => {
    let _salePrice: number = 0.001 * decimals;
    const marketCtr: any = await marketPlaceContract(_signer);
    await setSaleFromWallet(marketCtr, _tokenId.toString(), _salePrice.toString()).then(async (res: any) => {
        await res.wait();
        console.log(await res.wait(), "awaited _setSaleWltRes");
    }).catch((e: any) => {
        console.log(e)
    })
}


//#4 setApprovalForAll;
export const doApprovalForMarketContract = async () => {
    let flag: boolean = false;
    const NftCtr: any = await newNapaNftContract(_signer);
    await setApprovalForAll(NftCtr, marketPlaceAddress, true).then(async (res: any) => {
        await res.wait();
        console.log(await res.wait(), "approve res");
        flag = true;
    }).catch((e: any) => {
        console.log(e);
        flag = false;
    })
    return flag
}

//#5 checkOwner
const checkOwner = async (_tknId: string | number) => {
    const NftCtr: any = await newNapaNftContract(_signer);
    await ownerOf(NftCtr, _tknId).then(async (res: any) => {
        console.log(_tknId, `Owner is ${await res}`);
    }).catch((e: any) => {
        console.log(e);
    })
}


//#6 checkApproval
export const checkApprovalFroMarketContract = async () => {
    const NftCtr: any = await newNapaNftContract(_signer);
    await isApprovedForAll(NftCtr, CurrentWalletAddress, marketPlaceAddress).then(async (res: any) => {
        // await res.wait();
        console.log(await res, "approve res");
    }).catch((e: any) => {
        console.log(e)
    })
}

//#7 approve Napa Or Usdt Token
// This function does the approval for a specific token contract
const doApprovalForToken: any = async (transactionType: number) => {
    const amountToApprove: any = await calculateTokenAllowance(transactionType);
    console.log(((amountToApprove * 2).toString()), "token allowance");
    if (transactionType == 0) { // Check if the transaction is for NPA tokens
        const npaTokenctr: any = await napaTokenContract(_signer); // Get the NPA token contract
        console.log(npaTokenctr, "npaTokenctr contract");
        const approveRes = await approve(npaTokenctr, marketPlaceAddress, ((amountToApprove * 2).toString())); // Call the approve function of the NPA token contract to allow spending of tokens
        console.log(approveRes, "approve response of napa");
        return await approveRes.wait();
    } else if (transactionType == 1) { // Check if the transaction is for USDT tokens
        const usdtTokenctr: any = await usdtTokenContract(_signer); // Get the USDT token contract
        console.log(usdtTokenctr, "usdtTokenctr contract");
        const approveRes = await approve(usdtTokenctr, marketPlaceAddress, ((amountToApprove * 2).toString())); // Call the approve function of the USDT token contract to allow spending of tokens
        console.log(approveRes, "approve response of usdt");
        return await approveRes.wait();
    } else { // If the transaction is not for tokens, return -1
        console.log("don't need any approval check as you've opted for ether");
        return -1;
    }
}

// #8 calculates token allowance for each type
export const calculateTokenAllowance = async (transactionType: number) => {
    const marketCtr: any = await marketPlaceContract(_signer);
    const { salePrice } = await nftInfo(marketCtr, (452610601930869570).toString());

    if (transactionType == 0 || transactionType == 1) {
        const _napaTokenAmount = await napaTokenAmount(marketCtr);
        const calculatedAmount = await salePrice / await _napaTokenAmount;
        console.log(calculatedAmount * decimals, "total allowance need");
        return calculatedAmount * decimals;
    } else {
        console.log("into ethers part")
        const _getLatestPrice: number = await getLatestPrice(marketCtr);
        console.log(_getLatestPrice.toString(), "_getLatestPrice aa");
        const calculatedAmount: number = await salePrice / (_getLatestPrice * otherDecimals);
        console.log(salePrice.toString(), "salePrice");
        console.log(calculatedAmount, "calculated");
        return (calculatedAmount.toFixed(18));
    }
}

// #9 checks token approval 
// const checkTokenApproval = async (transactionType: number) => {
//     // Check the transactionType to determine which contract to use
//     if (transactionType == 0) {
//         // If transactionType is 0, get the NPA token contract using the _signer object
//         const npaTokenctr: any = await napaTokenContract(_signer);
//         // Get the allowance of the NPA token for the current wallet address and the nftAddress
//         const alw1 = await allowance(npaTokenctr, CurrentWalletAddress, marketPlaceAddress)
//         // Log the allowance of the NPA token
//         console.log(alw1.toString(), "allowance of napa")
//         // Return the allowance of the NPA token as a string
//         return alw1.toString()
//     } else if (transactionType == 1) {
//         // If transactionType is 1, get the USDT token contract using the _signer object
//         const usdtTokenctr: any = await usdtTokenContract(_signer);
//         // Get the allowance of the USDT token for the current wallet address and the nftAddress
//         const alw1 = await allowance(usdtTokenctr, CurrentWalletAddress, marketPlaceAddress)
//         // Log the allowance of the USDT token
//         console.log(alw1.toString(), "allowance of usdt")
//         // Return the allowance of the USDT token as a string
//         return alw1.toString()
//     } else {
//         // If transactionType is not 0 or 1, no approval check is needed
//         console.log("don't need any approval check");
//         // Return -1 to indicate no approval check is needed
//         return -1
//     }
    // The function is checking the approval status of a token before a transaction can be made on the contract. It first checks the transaction type to determine which token contract to use. If the transaction type is 0, the NPA token contract is used, and if the transaction type is 1, the USDT token contract is used. It then gets the allowance of the token for the current wallet address and the nftAddress, logs the allowance value, and returns the allowance value as a string. If the transaction type is neither 0 nor 1, it logs that no approval check is needed and returns -1.
// }
