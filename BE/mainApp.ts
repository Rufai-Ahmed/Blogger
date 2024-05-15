import { log } from "console";
import { Application, Request, Response } from "express";
import web from "./router/webRouter";
import bookMark from "./router/bookMarkRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/", web);
    app.use("/api/", bookMark);

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          msg: "Welcome to the API",
        });
      } catch (error) {
        log(error);
      }
    });
  } catch (error) {
    return error;
  }
};
