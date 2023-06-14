import { SOCIAL_ART_API_URL } from '../constants/url';
import {
  GetTotalNapaUsersCountResponse,
  GetUsersCountResponse,
} from '../types/payouts';
import axios, { AxiosResponse } from 'axios';

export const getUsersCount = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetUsersCountResponse>>(
      `${SOCIAL_ART_API_URL}/user/social/video/activeusers/count`
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

export const getTotalNapaUsersCount = async () => {
  try {
    const p = await axios.get<
      {},
      AxiosResponse<GetTotalNapaUsersCountResponse>
    >(`${SOCIAL_ART_API_URL}/user/social/video/napausers/count`);
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
