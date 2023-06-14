import { SOCIAL_ART_API_URL } from '../constants/url';
import {
  CreateNewCommentResponse,
  GetCommentsResponse,
  NewComment,
} from '../types/comment';
import axios, { AxiosResponse } from 'axios';

export const createNewComment = async (comment: NewComment) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateNewCommentResponse>>(
      `${SOCIAL_ART_API_URL}/user/social/comment/new`,
      comment
    );
    return {
      data: p.data,
      message: '',
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
      message: error?.response?.data?.message,
    };
  }
};

export const getAllComments = async (postId: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetCommentsResponse>>(
      `${SOCIAL_ART_API_URL}/user/social/comment/${postId}`
    );
    return {
      data: p.data,
      message: '',
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
      message: error?.response?.data?.message,
    };
  }
};

export const likeComment = async (
  commentId: string,
  postId: string,
  likedByUsers: string
) => {
  try {
    const p = await axios.patch<{}, AxiosResponse<GetCommentsResponse>>(
      `${SOCIAL_ART_API_URL}/user/social/comment/${postId}/like`,
      {
        commentId,
        likedByUsers,
      }
    );
    return {
      data: p.data,
      message: '',
      error: false,
    };
  } catch (error) {
    return {
      data: null,
      error: true,
      message: error?.response?.data?.message,
    };
  }
};
