import { Document } from "mongoose";

export interface IPuppy extends Document {
  //   id: string;
  breed: string;
  name: string;
  dob: string;
}
