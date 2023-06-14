import { SOCIAL_ART_API_URL } from "@/constants/url";
import { CreateNewOfferResponse, GetOffersResponse, NewOffer } from "@/types/offers";
import axios, { AxiosResponse } from "axios";

export const createOffer = async (offer: NewOffer) => {
    try {
      const p = await axios.post<{}, AxiosResponse<CreateNewOfferResponse>>(
        `${SOCIAL_ART_API_URL}/user/offer/new`,
        offer
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

  export const getOffers = async (id: string) => {
    try {
      const p = await axios.get<{}, AxiosResponse<GetOffersResponse>>(
        `${SOCIAL_ART_API_URL}/user/offer?id=${id}`,
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