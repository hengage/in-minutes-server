import { Document } from "mongoose";

import { ORDER_STATUS } from "../../utils";
import { IVendorDocument } from "../vendors";

export interface IAddOn {
  item: string;
  cost: string;
}

export interface IOrderItem {
  product: string;
  quantity: number;
  cost: string;
  vendor: IVendorDocument["_id"];
  addOns: IAddOn[];
}

export interface IOrdersDocuments extends Document {
  _id: string;
  customer: string;
  rider?: string;
  items: IOrderItem[];

  deliveryAddress: string;
  deliveryLocation: {
    type: string;
    coordinates: [number, number];
  };
  h3Index: string;
  deliveryFee: string;
  totalProductCost: string;
  totalCost: string;
  status: ORDER_STATUS;
}