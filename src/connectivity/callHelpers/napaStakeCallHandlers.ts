/**
    all the 'read' and 'write' functions of @contract @NAPAStakeContract
*/

// READ FUNCTIONS

//1 checkReward
export const checkReward = async (contract: any,_plan:number) => {
    return await contract.checkReward(_plan);
}

//2 UserPlanDetails
export const UserPlanDetails = async (contract: any, address: string, _plan: number) => {
    return await contract.UserPlanDetails(address, _plan);
}

//3 owner
export const owner = async (contract: any) => {
    return await contract.owner();
}

//4 pendingRewards
export const pendingRewards = async (contract: any) => {
    return await contract.pendingRewards();
}

//5 totalStaked
export const totalStaked = async (contract: any) => {
    return await contract.totalStaked();
}


//6 treasuryWallet
export const treasuryWallet = async (contract: any) => {
    return await contract.treasuryWallet();
}

//7 userStakeDetails
export const userStakeDetails = async (contract: any, _plan: number) => {
    return await contract.userStakeDetails(_plan);
}

//8 usersAllActivePlans
export const usersAllActivePlans = async (contract: any, address: string, _plan: number) => {
    return await contract.usersAllActivePlans(address, _plan);
}



// WRITE FUNCTIONS

//1 _claim
export const _claim = async (contract: any,_plan:number) => {
    return await contract._claim(_plan);
}

//2 renounceOwnership
export const renounceOwnership = async (contract: any) => {
    return await contract.renounceOwnership();
}

//3 stakeTokens
export const stakeTokens = async (contract: any, _amount: number | string, _plan: number) => {
    return await contract.stakeTokens(_amount, _plan);
}

//4 transferOwnership
export const transferOwnership = async (contract: any, newOwner: string) => {
    return await contract.transferOwnership(newOwner);
}

//5 UnstakeTokens
export const UnstakeTokens = async (contract: any,_plan:number) => {
    return await contract.UnstakeTokens(_plan);
}

//6 updateTreasuryWallet
export const updateTreasuryWallet = async (contract: any, _treasuryWallet: string) => {
    return await contract.updateTreasuryWallet(_treasuryWallet);
}

//7 withdrawAnyTokens
export const withdrawAnyTokens = async (contract: any, _token: string, recipient: string, amount: number) => {
    return await contract.withdrawAnyTokens(_token, recipient, amount);
}

//8 withdrawFunds
export const withdrawFunds = async (contract: any) => {
    return await contract.withdrawFunds();
}