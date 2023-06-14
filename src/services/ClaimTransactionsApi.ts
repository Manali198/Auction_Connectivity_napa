import { STAKING_API_URL } from '@/constants/url';
import {
  CreateNewClaimedTransactionResponse,
  GetClaimedTransactionResponse,
  NewClaimTransaction,
} from '@/types/claim-transactions';
import axios, { AxiosResponse } from 'axios';

export const createNewClaimTransaction = async (transaction: NewClaimTransaction) => {
  try {
    const p = await axios.post<
      {},
      AxiosResponse<CreateNewClaimedTransactionResponse>
    >(`${STAKING_API_URL}/user/claim/new`, transaction);
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

export const getClaimedTransactions = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetClaimedTransactionResponse>>(
      `${STAKING_API_URL}/user/claim`
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
