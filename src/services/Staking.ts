import { STAKING_API_URL } from '@/constants/url';
import {
  CreateNewStakingResponse,
  GetStakingResponse,
  NewStaking,
} from '@/types/staking';
import axios, { AxiosResponse } from 'axios';

export const createNewStaking = async (staking: NewStaking) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateNewStakingResponse>>(
      `${STAKING_API_URL}/user/staking/new`,
      staking
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

export const getStakingTransactions = async (profileId: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetStakingResponse>>(
      `${STAKING_API_URL}/user/staking`,
      {
        params: {
          profileId
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
