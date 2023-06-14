export type GetRecentEventsResponse = {
  data: RecentEvents;
  code: number;
  responseTime: string;
};

export type RecentEvents = {
  eventId: string;
  eventTitle: string;
  eventImageBanner: string;
  eventImageOne: string;
  eventImageTwo: string;
  address: string;
  city: string;
  updatedAt: string;
};
