export type UsersCountResponse = {
  weeklyCount: string;
  monthlyCount: string;
};

export type GetUsersCountResponse = {
  data: UsersCountResponse;
  code: number;
  responseTime: string;
};

export type TotalNapaUsersCountResponse = {
  totalUsers: string;
};

export type GetTotalNapaUsersCountResponse = {
  data: TotalNapaUsersCountResponse;
  code: number;
  responseTime: string;
};

export type UsersCount = {
  weeklyActiveUsers: string;
  monthlyActiveUsers: string;
};
