export type CreateNewClaimedTransactionResponse = {
    data: ClaimedTransactionResponse;
    code: number;
    responseTime: string;
  };
  
  export type ClaimedTransactionResponse = {
    rowId: string;
    claimTransactionUUID: string;
    stakingTransactionUUID: string;
    profileId: string;
    accountNumber: string;
    profileName: string;
    stakingPeriod: string;
    amountClaimed: string;
    closingDate: string;
    apy: string;
    maturityDate: string;
    redeemed: string;
    lockedTxID: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type GetClaimedTransactionResponse = {
    data: ClaimedTransactionResponse;
    code: number;
    responseTime: string;
  };
  
  export type NewClaimTransaction = {
    stakingTransactionUUID: string;
    profileId: string;
    accountNumber: string;
    profileName: string;
    stakingPeriod: string;
    amountClaimed: string;
    apy: string;
    maturityDate: string;
    redeemed: string;
    lockedTxID: string;
    rewardsEarned?: string;
  };
  