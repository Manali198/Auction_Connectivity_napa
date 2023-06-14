export type CreateNewTokenResponse = {
    data: TokenResponse;
    code: number;
    responseTime: string;
  };
  
  export type TokenResponse = {
    rowId: string;
    tokenId: string;
    profileId: string;
    napaWalletAccount: string;
    networkId: string;
    decimals: string;
    name: string;
    symbol: string;
  };
  
  export type GetTokenResponse = {
    data: TokenResponse;
    code: number;
    responseTime: string;
  };
  
  export type NewToken = {
    profileId: string;
    napaWalletAccount: string;
    networkId: string;
    decimals: string;
    name: string;
    symbol: string;
  };
  