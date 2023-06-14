import { ethers } from "ethers";
// import marketAbi from "../utils/abis/market.json"
import nftAbi from "../abis/NAPANft.json"

export const commanNFTContract = async (signer: any, nftAddress: string) => {
    try {
        return new ethers.Contract(nftAddress, nftAbi.abi, signer);
    } catch (e) {
        return e
    }
}