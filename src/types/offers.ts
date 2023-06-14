export type CreateNewOfferResponse = {
  data: Offer;
  code: number;
  responseTime: string;
};

export type GetOffersResponse = {
  data: Offer;
  code: number;
  responseTime: string;
};

export type NewOffer = {
  snftId: string;
  profileId: string | ArrayBuffer | null;
  amount: string;
  expiresIn: string;
};

export type Offer = {
  auctionId: any;
  bidderAddress: string;
  bidId: string;
  offerId: string;
  snftId: string;
  profileId: string;
  amount: string;
  userName: string;
  expiresIn: string;
  pay: string,
  createdAt: string;
  updatedAt: string;
};
