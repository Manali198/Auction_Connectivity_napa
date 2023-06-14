export type CreateNewCommentResponse = {
  data: CommentResponse;
  code: number;
  responseTime: string;
};

export type CommentResponse = {
  commentId: string;
  commentText: string;
  postId: string;
  profileId: string;
  profileName: string;
  avatar: string;
  replies: CommentResponse[];
  likedByUsers: string;
  parentCommentId: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCommentsResponse = {
  data: CommentResponse;
  code: number;
  responseTime: string;
};

export type NewComment = {
  commentText: string;
  postId: string;
  profileId: string;
  parentCommentId: string;
};
