import { Document } from "mongoose";
import { IVendorDocument } from "../vendors";
import { PRODUCT_STATUS } from "../../utils";

export interface IProductCategoryDocument extends Document {
  _id: string;
  name: string;
}

export interface IProductDocument extends Document {
  _id: string;
  name: string;
  image: string;
  description: string;
  quantity: number;
  cost: string;
  tags: string[];
  addOns: [{ item: string; cost: string }];
  category: IProductCategoryDocument;
  vendor: IVendorDocument["_id"];
  status: PRODUCT_STATUS;
}
