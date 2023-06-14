import {
  CreateNewTokenResponse,
  GetTokenResponse,
  NewToken,
} from '../types/tokens';
import axios, { AxiosResponse } from 'axios';
import { API_URL } from '../constants/url';

export const importNewToken = async (token: NewToken) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateNewTokenResponse>>(
      `${API_URL}/tokens/new`,
      token
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

export const getImportedTokens = async (
  napaWalletAccount: string,
  networkId: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetTokenResponse>>(
      `${API_URL}/tokens`,
      {
        params: {
          napaWalletAccount,
          networkId,
        },
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
