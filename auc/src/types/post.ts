export type CreateNewPostResponse = {
  data: Post;
  code: number;
  responseTime: string;
};

export type GetPostsResponse = {
  data: Post;
  code: number;
  responseTime: string;
};

export type GetMostViewedPostsResponse = {
  data: MostViewedPosts;
  code: number;
  responseTime: string;
};

export type GetLikePostResponse = {
  data: string;
  code: number;
  responseTime: string;
};

export type GetAwardPostResponse = {
  data: string;
  code: number;
  responseTime: string;
};

export type NewPost = {
  videoTitle: string;
  videoFile: string | ArrayBuffer | null;
  videoType: string;
  videoCaption: string;
  accountId: string;
  minted: string;
  userName: string;
  userImage: string;
};

export type Post = {
  postId: string;
  videoTitle: string;
  videoURL: string;
  videoType: string;
  videoCaption: string;
  accountId: string;
  postedBy: string;
  profileId: string;
  minted: string;
  createdAt: string;
  updatedAt: string;
  profileName: string;
  avatar: string;
  likedByUsers: string | null;
  commentByUser: string | null;
  awardsByUsers: string;
  mintedTimeStamp: string;
  isExpired: string;
};

export type MostViewedPosts = {
  postId: string;
  awards?: number;
  likes?: number;
  comments?: number;
  userName: string;
  avatar: string;
  mintId: string;
  thumbnail: string;
};

export type activePost = {
  postId: string;
  type: string;
  index: number | null;
};
