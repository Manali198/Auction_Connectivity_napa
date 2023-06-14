export enum NapaLoungeTab {
  TIPS_AND_TUTORIALS = 'TIPS_AND_TUTORIALS',
  CO_BATCHING_POOLS = 'CO_BATCHING_POOLS',
  UPCOMING_NFT_PROJECTS = 'UPCOMING_NFT_PROJECTS',
  EVENTS = 'EVENTS',
  ACTIVE_MINTED_POSTS = 'ACTIVE_MINTED_POSTS',
  EARNED_NAPA_TOKENS = 'EARNED_NAPA_TOKENS',
}

export type Options = {
  name: string;
  value: string;
};

export type ProfileDetails = {
  profileId: string;
  profileName: string;
  primaryCurrency: string;
  metamaskAccountNumber: string;
  language: string;
  timezone: string;
  napaSocialMediaAccount: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  avatar: string;
  awardsEarned: number;
  awardsGiven: number;
  netAwardsAvailable: number;
  emailAddress: string;
  napaWalletAccount: string
};
