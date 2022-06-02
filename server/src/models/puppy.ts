import { IPuppy } from "../types/puppy";
import { model, Schema } from "mongoose";

const puppySchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: false,
    },

    breed: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IPuppy>("Puppy", puppySchema);
