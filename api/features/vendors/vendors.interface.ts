import { Document } from "mongoose";

export interface IVendorDocument extends Document {
  _id: string;
  businessName: string;
  buinessPhoto: string;
  email: string;
  phoneNumber: string;
  password: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  paymentOptions: String[];
  accountStatus: string;
  approved: boolean;
  rating: {
    totalRatingSum: number;
    ratingCount: number;
    averageRating: number;
  };
  dateJoined: Date;
  dateUpdated: Date;
}
