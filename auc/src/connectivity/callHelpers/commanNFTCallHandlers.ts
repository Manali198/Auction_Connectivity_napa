//1 approveNFT
export const approve = async (
    contract: any,
    _address: string, _tokenId: string | number
) => {
    try {
        return await contract.approve(_address, _tokenId);
    } catch (e: any) {
        console.log(e.message, e.code, 'Error Caught');
    }
};

//2 getApproved check if NFT is approved to the market place or not
export const getApproved = async (contract: any, tokenId: string | number) => {
    try {
        return await contract.getApproved(tokenId);
    } catch (e: any) {
        console.log(e.message, e.code, 'Error Caught');
    }
};


//3 transferFrom
export const transferFrom = async (
    contract: any,
    from: string,
    to: string,
    tokenId: number | string) => {
    try {
        return await contract.transferFrom(from, to, tokenId);
    } catch (e: any) {
        console.log(e.message, e.code, 'Error Caught');
    }
};

