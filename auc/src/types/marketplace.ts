export type CreateNewSnftResponse = {
  data: SnftResponse;
  code: number;
  responseTime: string;
};

export type DeleteSnftResponse = {
  message: string;
  code: number;
  responseTime: string;
};

export type SnftResponse = {
  snftId: string;
  currencyType: string;
  amount: string;
  duration: string;
  maxOffer?: string;
  mintId: string;
  postId: string;
  SNFTDescription?: string;
  SNFTTitle?: string;
  SNFTCollection?: string;
  SNFTAddress?: string;
  generatorId?: string;
  generatorName?: string;
  genre?: string;
  marketplace_listed?: string;
  napaTokenEarned?: string;
  profileId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  thumbnail?: string;
  videoURL?: string;
  userName?: string;
  userImage?: string;
  tokenUri?: string;
  accountId?: string;
  tokenId?: string;
  listed?: string;
  lazyMinted?: string;
  payoutsCategory?: string;
};

export type GetSnftsResponse = {
  data: SnftResponse;
  code: number;
  responseTime: string;
};

export type NewSnft = {
  currencyType: string;
  type: string;
  amount: string;
  duration: string;
  mintId?: string;
  profileId?: string;
  postId?: string;
  maxOffer?: string;
};
