import { API_URL } from '../constants/url';
import axios, { AxiosResponse } from 'axios';

export const getQrCode = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${API_URL}/user/account/generateQrCode`
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
