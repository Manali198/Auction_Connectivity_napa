import { SOCIAL_ART_API_URL } from '../constants/url';
import {
  CreateNewSnftResponse,
  DeleteSnftResponse,
  GetSnftsResponse,
  NewSnft,
} from '../types/marketplace';
import axios, { AxiosResponse } from 'axios';

export const createNewSnft = async (nft: NewSnft) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateNewSnftResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/new`,
      nft
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

export const updateSnft = async (nft: NewSnft) => {
  try {
    const p = await axios.post<{}, AxiosResponse<GetSnftsResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/update/${nft.mintId}`,
      nft
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

export const getAllSnfts = async (limit: number) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetSnftsResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/list?limit=${limit}`
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

export const getMySnfts = async (ids:any) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetSnftsResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/mysnfts/list`,
      {
        params : {
          ids: ids.join(",")
        }
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

// export const getMySnfts = async (ids:any) => {
//   try {
//     const p = await axios.get<{}, AxiosResponse<GetSnftsResponse>>(
//       `${SOCIAL_ART_API_URL}/user/marketplace/mysnfts/list`,
//       {
//         params : {
//           ids: JSON.stringify(ids)
//         }
//       }
//     );
//     return {
//       data: p.data,
//       message: '',
//       error: false,
//     };
//   } catch (error) {
//     return {
//       data: null,
//       error: true,
//       message: error?.response?.data?.message,
//     };
//   }
// };

export const getSnft = async (id: string) => {
  try {
    const p = await axios.get<{}, AxiosResponse<GetSnftsResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/${id}`
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

export const deleteSnft = async (id: string) => {
  try {
    const p = await axios.post<{}, AxiosResponse<DeleteSnftResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/delete/${id}`
    );
    return {
      message: p.data.message,
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

export const buySnft = async (id: string) => {
  try {
    const p = await axios.post<{}, AxiosResponse<GetSnftsResponse>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/snft/buy/${id}`
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

// export const pinToIPFS = async (data: any) => {
  // try {
  //   const p = await axios.post<{}, AxiosResponse<any>>(
  //     `${SOCIAL_ART_API_URL}/user/marketplace/pinToIPFS`,
  //     data
  //   );
  //   return {
  //     data: p.data,
  //     message: '',
  //     error: false,
  //   };
  // } catch (error) {
  //   return {
  //     data: null,
  //     error: true,
  //     message: error?.response?.data?.message,
  //   };
  // }


export const pinToIPFS = async (data: any) => {
  try {
    const p = await axios.post<{}, AxiosResponse<any>>(
      `${SOCIAL_ART_API_URL}/user/marketplace/pinToIPFS`,
      data
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
  };
}
