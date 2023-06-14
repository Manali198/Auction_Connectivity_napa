import { SOCIAL_ART_API_URL } from '../constants/url';
import { GetRecentTrendingsResponse } from '../types/trending';
import axios, { AxiosResponse } from 'axios';

export const getRecentTrendings = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetRecentTrendingsResponse>>(
      `${SOCIAL_ART_API_URL}/user/trending/feed/list`
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
