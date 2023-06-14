import { SOCIAL_ART_API_URL } from '../constants/url';
import { CreateReportPayload, CreateReportResponse } from '../types/report';
import axios, { AxiosResponse } from 'axios';

export const createReport = async (report: CreateReportPayload) => {
  try {
    const p = await axios.post<{}, AxiosResponse<CreateReportResponse>>(
      `${SOCIAL_ART_API_URL}/report/create`,
      report
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
