export type GetRecentTrendingsResponse = {
  data: RecentTrendings;
  code: number;
  responseTime: string;
};

export type RecentTrendings = {
  userProfilePic: string;
  articleTitle: string;
  updatedAt: string;
};
