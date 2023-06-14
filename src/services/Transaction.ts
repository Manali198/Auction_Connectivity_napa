import axios, { AxiosResponse } from 'axios';
import { SOCIAL_ART_API_URL } from '../constants/url';
import {
  CreateNewTransactionResponse,
  NewTransaction,
} from '../types/transaction';

export const createNewTransaction = async (transaction: NewTransaction) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateNewTransactionResponse>>(
      `${SOCIAL_ART_API_URL}/user/transaction/new`,
      transaction
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
