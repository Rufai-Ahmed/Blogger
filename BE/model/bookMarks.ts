import { Document, Schema, model } from "mongoose";

export interface iProps {
  bookMark: {}[];
}

interface iUserData extends Document, iProps {}

const bookMarkModel = new Schema<iUserData>(
  {
    bookMark: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iUserData>("bookMarks", bookMarkModel);
