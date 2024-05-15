import { Request, Response } from "express";
import bookMarks from "../model/bookMarks";
import { log } from "console";
import webModel from "../model/webModel";

export const getBookMarkData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await bookMarks.find();

    return res.status(200).json({
      msg: "Created new todo successfully",
      data: getAll,
    });
  } catch (error) {
    log(error);
    return res.status(404).json({
      msg: "Error creating new todo",
    });
  }
};

export const addToBookMarkData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;
    const getWebFile = await webModel.findById(ID);

    const getBookMarks = await bookMarks.create({
      bookMark: getWebFile,
    });

    return res.status(200).json({
      msg: "Created new todo successfully",
      data: getBookMarks,
    });
  } catch (error) {
    log(error);
    return res.status(404).json({
      msg: "Error creating new todo",
    });
  }
};
