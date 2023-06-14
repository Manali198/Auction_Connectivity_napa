import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/url';

export const getNapaAccounts = async (profileId: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(`${API_URL}/napaccounts`, {
      params: {
        profileId,
      },
    });
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
