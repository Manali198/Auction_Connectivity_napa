export type CreateReportPayload = {
  type: string;
  status: string;
  typeId: string;
  referEmail: string;
  message: string;
  reporterId: string;
};

export type ReportResponse = {
  type: string;
  status: string;
  typeId: string;
  referEmail: string;
  message: string;
  reporterId: string;
};

export type CreateReportResponse = {
  data: ReportResponse;
  code: number;
  responseTime: string;
};
