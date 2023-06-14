import axios from 'axios';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';


export const call = async () => {
    async function connect() {
        const externalProvider = await web3Modal.connect();
        return new ethers.providers.Web3Provider(externalProvider);
    }
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
    });
    const provider = await connect();
    // const { chainId } = await provider.getNetwork()
    await provider.getNetwork();
    const signer = await provider.getSigner(0);
    const address = await signer.getAddress();
    console.log(address, '-=-address-==-');
    return { signer, address };
};


export const fetchNFTs = async () => {
    const callData = await call();
    const accAddress = callData.address;
    let localArr: any[] = [];
    try {
        const config = {
            method: 'get',
            url: `https://deep-index.moralis.io/api/v2/${accAddress}/nft?chain=goerli&format=decimal`,
            headers: { 'X-API-Key': "D8Kfm2KtjFHVEpqvPmTVgaNLvY8TFEhrIBi8h71wjcTfFIdlmSKFlYJcEGATK8dr" }
        }
        let res = await axios(config)
        console.log(res, "all nfts of user")
        for (let i = 0; i < res.data.result.length; i++) {
            fetch(res.data.result[i].token_uri)
                .then(response => response.json())
                .then((jsonData) => {
                    localArr.push(jsonData);
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    } catch (e) {
        console.log(e);
    }
    return localArr
}


  //#1 buynft from market place
  // const _buyNftTokenFromMarket = async (transactionType: number, _tokenId: number | string) => {
  //   // const _tokenId: number = 88;
  //   console.log("you are buying token :", _tokenId);
  //   const isApprovedTkn = await doApprovalForToken(transactionType);

  //   console.log("lvl2");
  //   const marketCtr: any = await marketPlaceContract(signer);
  //   if (Number(transactionType) == 0 && await isApprovedTkn) {
  //     console.log("buy from market in NAPA");
  //     await buyNftToken(marketCtr, 0, _tokenId).then(async (res: any) => {
  //       await res.wait();
  //       console.log(await res.wait(), "buyNftToken res");
  //     }).catch((e: any) => {
  //       console.log(e)
  //     })
  //   } else if (Number(transactionType) == 1 && await isApprovedTkn) {
  //     console.log("buy from market in USDT");
  //     await buyNftToken(marketCtr, 1, _tokenId).then(async (res: any) => {
  //       await res.wait();
  //       console.log(await res.wait(), "buyNftToken res");
  //     }).catch((e: any) => {
  //       console.log(e)
  //     })
  //   } else {
  //     let valInEth = await calculateTokenAllowance(2, _tokenId);
  //     console.log(valInEth, "valInEth");
  //     if (isApprovedTkn) {
  //       console.log("in to the ether put my stress right now");
  //       await buyNftTokenWithEth(marketCtr, Number(transactionType), _tokenId, { value: "100000000000000" }).then(async (res: any) => {
  //         await res.wait();
  //         console.log(await res.wait(), "approve res");
  //       }).catch((e: any) => {
  //         console.log(e)
  //       })
  //     }
  //   }
  // }

  //#7 approve Napa Or Usdt Token
  // This function does the approval for a specific token contract
  // const doApprovalForToken: any = async (transactionType: number, tokenId: string | number) => {
  //   const amountToApprove: any = await calculateTokenAllowance(transactionType, tokenId);
  //   console.log(((amountToApprove * 2).toString()), "token allowance");
  //   if (transactionType == 0) { // Check if the transaction is for NPA tokens
  //     const npaTokenctr: any = await napaTokenContract(signer); // Get the NPA token contract
  //     console.log(npaTokenctr, "npaTokenctr contract");
  //     const approveRes = await approve(npaTokenctr, marketPlace, ((amountToApprove * 2).toString())); // Call the approve function of the NPA token contract to allow spending of tokens
  //     console.log(approveRes, "approve response of napa");
  //     return await approveRes.wait();
  //   } else if (transactionType == 1) { // Check if the transaction is for USDT tokens
  //     const usdtTokenctr: any = await usdtTokenContract(signer); // Get the USDT token contract
  //     console.log(usdtTokenctr, "usdtTokenctr contract");
  //     const approveRes = await approve(usdtTokenctr, marketPlace, ((amountToApprove * 2).toString())); // Call the approve function of the USDT token contract to allow spending of tokens
  //     console.log(approveRes, "approve response of usdt");
  //     return await approveRes.wait();
  //   } else { // If the transaction is not for tokens, return -1
  //     console.log("don't need any approval check as you've opted for ether");
  //     return -1;
  //   }
  // }

  // #8 calculates token allowance for each type
  // const calculateTokenAllowance = async (transactionType: number, toknId: string | number) => {
  //   const decimals: number = 10 ** 18;
  //   const otherDecimals: number = 10 ** 10;
  //   const marketCtr: any = await marketPlaceContract(signer);
  //   const { salePrice } = await nftInfo(marketCtr, (toknId).toString());

  //   if (transactionType == 0 || transactionType == 1) {
  //     const _napaTokenAmount = await napaTokenAmount(marketCtr);
  //     const calculatedAmount = await salePrice / await _napaTokenAmount;
  //     console.log(calculatedAmount * decimals, "total allowance need");
  //     return calculatedAmount * decimals;
  //   } else {
  //     console.log("into ethers part")
  //     const _getLatestPrice: number = await getLatestPrice(marketCtr);
  //     console.log(_getLatestPrice.toString(), "_getLatestPrice aa");
  //     const calculatedAmount: number = await salePrice / (_getLatestPrice * otherDecimals);
  //     console.log(salePrice.toString(), "salePrice");
  //     console.log(calculatedAmount, "calculated");
  //     return (calculatedAmount.toFixed(18));
  //   }
  // }