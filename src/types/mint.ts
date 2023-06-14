export type CreateNewMintResponse = {
  data: MintResponse;
  code: number;
  responseTime: string;
};

export type MintResponse = {
  postId: string;
  mintedId: string;
  SNFTAddress: string;
  networkTxId: string;
  owner: string;
  status: string;
};

export type GetMintPostsResponse = {
  data: MintPost;
  code: number;
  responseTime: string;
};

export type GetRecentMintPostsResponse = {
  data: RecentMintPost;
  code: number;
  responseTime: string;
};

export type RecentMintPost = {
  postId: string;
  mintId: string;
  profileId: string;
  thumbnail: string;
  profileName: string;
  avatar: string;
};

export type MintPost = {
  id: string;
  postId: string;
  mintId: string;
  videoType: string;
  generatorId: string;
  profileId: string;
  network: string;
  status: string;
  SNFTTitle: string;
  SNFTCollection: string;
  SNFTDescription: string;
  location: string;
  taggedPeople: string;
  genre: string;
  tags: string;
  live: string;
  payoutApproved: string;
  SNFTAddress: string;
  networkTxId: string;
  owner: string;
  timeMinted: string;
  videoURL?: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  marketplace_listed?: string;
  snftId?: string;
  napaTokenEarned?: string;
  tokenId?: string;
  tokenUri?: string;
  payoutsCategory: string;
  closingDate?: string;
};

export type NewMint = {
  postId: string;
  videoType: string;
  generatorId: string;
  profileId: string;
  network: string;
  status: string;
  SNFTTitle: string;
  SNFTCollection: string;
  SNFTDescription: string;
  location: string;
  taggedPeople: string;
  genre: string;
  tags: string;
  live: string;
  payoutApproved: string;
  SNFTAddress: string;
  networkTxId: string;
  owner: string;
  thumbnail: string;
};
