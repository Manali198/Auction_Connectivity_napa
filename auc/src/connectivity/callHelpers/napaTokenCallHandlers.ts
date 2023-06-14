/**
    all the 'read' and 'write' functions of @contract @NAPATokenContract
*/

// READ FUNCTIONS

//1 uniswapRouter
export const uniswapRouter = async (contract: any) => {
    return await contract.uniswapRouter();
}

//2 treasuryWallet
export const treasuryWallet = async (contract: any) => {
    return await contract.treasuryWallet();
}

//3 automatedMarketMakerPairs
export const automatedMarketMakerPairs = async (contract: any, address: string) => {
    return await contract.automatedMarketMakerPairs(address);
}

//4 buyLimit
export const buyLimit = async (contract: any) => {
    return await contract.buyLimit();
}

//5 sellLimit
export const sellLimit = async (contract: any) => {
    return await contract.sellLimit();
}

//6 buyTimeLock
export const buyTimeLock = async (contract: any) => {
    return await contract.buyTimeLock();
}

//7 sellTimeLock
export const sellTimeLock = async (contract: any) => {
    return await contract.sellTimeLock();
}


//8 paused
export const paused = async (contract: any) => {
    return await contract.paused();
}

//9 _isBlacklisted
export const _isBlacklisted = async (contract: any, address: string) => {
    return await contract._isBlacklisted(address);
}

//10 _isExcludedFromFee
export const _isExcludedFromFee = async (contract: any, address: string) => {
    return await contract._isExcludedFromFee(address);
}

//11 allowance
export const allowance = async (contract: any, owner: string, spender: string) => {
    return await contract.allowance(owner, spender);
}

//12 balanceOf
export const balanceOf = async (contract: any, account: string) => {
    return await contract.balanceOf(account);
}

//12 decimals
export const decimals = async (contract: any) => {
    return await contract.decimals();
}

//13 name
export const name = async (contract: any) => {
    return await contract.name();
}

//14 owner
export const owner = async (contract: any) => {
    return await contract.owner();
}

//15 symbol
export const symbol = async (contract: any) => {
    return await contract.symbol();
}

//16 timeLimit
export const timeLimit = async (contract: any) => {
    return await contract.timeLimit();
}

//17 totalSupply
export const totalSupply = async (contract: any) => {
    return await contract.totalSupply();
}



// WRITE FUNCTIONS

//1 addToBlacklist
export const addToBlacklist = async (contract: any, account: string) => {
    return await contract.addToBlacklist(account);
}

//2 approve
export const approve = async (contract: any, spender: string, amount: number|string) => {
    return await contract.approve(spender, amount);
}

//3 decreaseAllowance
export const decreaseAllowance = async (contract: any, spender: string, subtractedValue: number) => {
    return await contract.decreaseAllowance(spender, subtractedValue);
}

//4 excludeFromFees
export const excludeFromFees = async (contract: any, account: string, excluded: boolean) => {
    return await contract.excludeFromFees(account, excluded);
}

//5 excludeMultipleAccountsFromFees
export const excludeMultipleAccountsFromFees = async (contract: any, accounts: Array<string>, excluded: boolean) => {
    return await contract.excludeMultipleAccountsFromFees(accounts, excluded);
}

//6 increaseAllowance
export const increaseAllowance = async (contract: any, spender: string, addedValue: number) => {
    return await contract.increaseAllowance(spender, addedValue);
}

//7 removeFromBlacklist
export const removeFromBlacklist = async (contract: any, account: string) => {
    return await contract.removeFromBlacklist(account);
}

//8 renounceOwnership
export const renounceOwnership = async (contract: any) => {
    return await contract.renounceOwnership();
}

//9 setAutomatedMarketMakerPair
export const setAutomatedMarketMakerPair = async (contract: any, pair: string, value: boolean) => {
    return await contract.setAutomatedMarketMakerPair(pair, value);
}

//10 transfer
export const transfer = async (contract: any, to: string, amount: number) => {
    return await contract.transfer(to, amount);
}

//11 transferFrom
export const transferFrom = async (contract: any, from: string,
    to: string,
    amount: number) => {
    return await contract.transferFrom(from, to, amount);
}

//12 transferOwnership
export const transferOwnership = async (contract: any, newOwner: string) => {
    return await contract.transferOwnership(newOwner);
}

//13 updateBuyFee
export const updateBuyFee = async (contract: any, _fee: number) => {
    return await contract.updateBuyFee(_fee);
}

//14 updateBuyLimit
export const updateBuyLimit = async (contract: any, limit: number) => {
    return await contract.updateBuyLimit(limit);
}

//15 updateBuyTimeLimit
export const updateBuyTimeLimit = async (contract: any, _time: number) => {
    return await contract.updateBuyTimeLimit(_time);
}

//16 updatePauseState
export const updatePauseState = async (contract: any) => {
    return await contract.updatePauseState();
}

//17 updateSellFee
export const updateSellFee = async (contract: any, _fee: number) => {
    return await contract.updateSellFee(_fee);
}

//18 updateSellLimit
export const updateSellLimit = async (contract: any, limit: number) => {
    return await contract.updateSellLimit(limit);
}

//19 updateSellTimeLimit
export const updateSellTimeLimit = async (contract: any, _time: number) => {
    return await contract.updateSellTimeLimit(_time);
}

//20 updateTreasuryWallet
export const updateTreasuryWallet = async (contract: any, newAddress: string) => {
    return await contract.updateTreasuryWallet(newAddress);
}

//21 updateUniswapRouter
export const updateUniswapRouter = async (contract: any, newUniswapRouter: string) => {
    return await contract.updateUniswapRouter(newUniswapRouter);
}