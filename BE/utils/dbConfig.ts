import { log } from "console";
import { connect } from "mongoose";

const URL: string = "mongodb://localhost:27017/webDB";

export const dbConfig = async () => {
  try {
    return await connect(URL).then(() => log("DB connected"));
  } catch (err: any) {
    log(err);
    return err;
  }
};
