import { ethers } from "ethers";
// import marketAbi from "../utils/abis/market.json"
import nftAbi from "../abis/NAPANft.json"
import anyAbi from "../abis/anyToken.json"
import marketAbi from "../abis/market.json"
import originalNapaTokenAbi from "../abis/originalNapaToken.json"
import napaStakingAbi from "../abis/napaStaking.json"
import { NapaTokenAddress, UsdtTokenAddress, nftAddress, marketPlace, originalNapatokenAddress, originalNapaStakingAddress, auctionaddress, nftcollectionAddress, napaAddress, usdtAddress } from "../addressHelpers/addressHelper";
import auctionAbi from "../abis/Auction.json"
import nftcollectionAbi from "../abis/nftscollection.json"
import napatokenabi from "../abis/napaToken.json"
import usdttokenAbi from "../abis/usdtToken.json"

export const newNapaNftContract = async (signer: any) => {
    try {
        return new ethers.Contract(nftAddress, nftAbi.abi, signer);
    } catch (e) {
        return e
    }
}

export const napaTokenContract = async (signer: any) => {
    try {
        return new ethers.Contract(NapaTokenAddress, anyAbi.abi, signer);
    } catch (e) {
        return e
    }
}

export const usdtTokenContract = async (signer: any) => {
    try {
        return new ethers.Contract(UsdtTokenAddress, anyAbi.abi, signer);
    } catch (e) {
        return e
    }
}

export const marketPlaceContract = async (signer: any) => {
    try {
        return new ethers.Contract(marketPlace, marketAbi.abi, signer);
    } catch (e) {
        return e
    }
}



// original NAPAToken Contract
export const originalNapaTokenContract = async (signer: any) => {
    try {
        return new ethers.Contract(originalNapatokenAddress, originalNapaTokenAbi.abi, signer);
    } catch (e) {
        return e
    }
}


// original NAPAStaking Contract
export const originalNapaStakingContract = async (signer: any) => {
    try {
        return new ethers.Contract(originalNapaStakingAddress, napaStakingAbi.abi, signer);
    } catch (e) {
        return e
    }
}

//auction 
// auctionContract, napatokenContract, nftcollectonContract, usdttokenContract

export const auctionContract = async (signer:any) => {
    try {
        return new ethers.Contract(auctionaddress, auctionAbi.abi, signer);
    } catch (e) {
        return e
    }
}

export const napatokenContract = async (signer:any) => {
    try {
        return new ethers.Contract(napaAddress, napatokenabi.abi, signer);
    } catch (e) {
        return e
    }
}

export const nftcollectonContract = async (signer:any) => {
    try {
        return new ethers.Contract(nftcollectionAddress, nftcollectionAbi.abi, signer);
    } catch (e) {
        return e
    }
}
export const usdttokenContract = async (signer:any) => {
    try {
        return new ethers.Contract(usdtAddress, usdttokenAbi.abi, signer);
    } catch (e) {
        return e
    }
}

export { auctionAbi };
