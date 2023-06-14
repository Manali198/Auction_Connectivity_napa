import { SOCIAL_ART_API_URL } from '../constants/url';
import { GetRecentEventsResponse } from '../types/event';
import axios, { AxiosResponse } from 'axios';

export const getRecentEvents = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetRecentEventsResponse>>(
      `${SOCIAL_ART_API_URL}/user/social/events/list`
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
