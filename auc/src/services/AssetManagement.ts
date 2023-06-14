import { ASSET_MANAGEMENT_API_URL } from '@/constants/url';
import axios, { AxiosResponse } from 'axios';

export const getTransactionHistory = async (
  chainId: string,
  wallet_address: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/transactions`,
      {
        params: {
          chainId,
          wallet_address,
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

export const getNativeTokenWalletBalance = async (
  chainId: string,
  wallet_address: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/nativeBalance`,
      {
        params: {
          chainId,
          wallet_address,
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

export const getCustomTokenWalletBalance = async (
  chainId: string,
  wallet_address: string,
  tokenAddresses: any
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/customBalance`,
      {
        params: {
          chainId,
          wallet_address,
          tokenAddresses,
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

export const getSendNativeToken = async (
  private_key: string,
  chainId: string,
  sender_address: string,
  receiver_address: string,
  amount: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/sendNativeToken`,
      {
        params: {
          private_key,
          chainId,
          sender_address,
          receiver_address,
          amount
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

export const getSendCustomToken = async (
  private_key: string,
  chainId: string,
  contract_address: string,
  receiver_address: string,
  amount: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/sendCustomToken`,
      {
        params: {
          private_key,
          chainId,
          contract_address,
          receiver_address,
          amount
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

export const getImportToken = async (
  chainId: string,
  contracts: string,
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/importTokens`,
      {
        params: {
          chainId,
          contracts,
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

export const getImportAccountFromPrivateKey = async (privateKey: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/importAccountFromPrivateKey`,
      {
        params: {
          privateKey,
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

export const getImportAccountFromPhrase = async (phrase: any) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/importAccountFromPhrase`,
      {
        params: {
          phrase,
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

export const getImportNFTs = async (
  private_key: string,
  contract_address: string,
  tknId: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/importNFTs`,
      {
        params: {
          private_key,
          contract_address,
          tknId,
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

export const getSwitchNetwork = async (id: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/switchNetwork`,
      {
        params: {
          id,
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

export const getCurrentNetwork = async () => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/getCurrentNetwork`
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

export const getStakeNapaTokens = async (
  amount: any,
  private_key: string,
  address: string,
  plan: string
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/stakeNapaTokens`,
      {
        params: {
          amount,
          private_key,
          address,
          plan,
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

export const getAllNFTsOfUser = async (
  chainId: string,
  address: string,
) => {
  try {
    const p = await axios.get<{}, AxiosResponse<{}>>(
      `${ASSET_MANAGEMENT_API_URL}/getAllNFTsOfUser`,
      {
        params: {
          chainId,
          address,
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
