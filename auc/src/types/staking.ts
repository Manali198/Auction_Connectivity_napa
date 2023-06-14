export type CreateNewStakingResponse = {
    data: StakingResponse;
    code: number;
    responseTime: string;
  };
  
  export type StakingResponse = {
    rowId: string;
    stakingTransactionUUID: string;
    profileId: string;
    accountNumber: string;
    profileName: string;
    stakingPeriod: string;
    lockDuration: string;
    amountStaked: string;
    lockStartDate: string;
    lockEndDate: string;
    apy: string;
    dailyApy: string;
    maturityDate: string;
    amountAccruedTD: string;
    amountAccruedDaily: string;
    redeemed: string;
    lockedTxID: string;
    rewardsEarned: string;
    createdAt: string;
    updatedAt: string;
  };
  
  export type GetStakingResponse = {
    data: StakingResponse;
    code: number;
    responseTime: string;
  };
  
  export type NewStaking = {
    profileId: string;
    profileName: string;
    accountNumber: string;
    stakingPeriod: string;
    lockDuration: string;
    amountStaked: string;
    apy: string;
    maturityDate: string;
    amountAccruedTD: string;
    amountAccruedDaily: string;
    redeemed: string;
    lockedTxID: string;
  };
  