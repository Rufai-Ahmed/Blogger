import { Request, Response } from "express";
import { log } from "console";
import webModel from "../model/webModel";

export const getDefault = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
      msg: "Created new todo successfully",
    });
  } catch (error) {
    log(error);
    return res.status(404).json({
      msg: "Error creating new todo",
    });
  }
};

export const getWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getAll = await webModel.find();

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

export const getWebDataBySearch = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { category } = req.query;

    const getAll = await webModel.find({ category });

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

export const createWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { readTime, title, image, category } = req.body;

    const getAll = await webModel.create({ readTime, title, image, category });

    return res.status(200).json({
      msg: "Data created successfully successfully",
      data: getAll,
    });
  } catch (error) {
    log(error);
    return res.status(404).json({
      msg: "Error creating new todo",
    });
  }
};

export const updateWebData = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;
    const { readTime, title, image, category } = req.body;

    const getAll = await webModel.findByIdAndUpdate(
      ID,
      {
        readTime,
        title,
        image,
        category,
      },
      { new: true }
    );

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

export const updateWebDataLike = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { ID } = req.params;
    const model = await webModel.findById(ID);

    const like: string = `${Math.floor(Math.random() * Date.now())}`;

    const getAll = await webModel.findByIdAndUpdate(
      ID,
      {
        likes: [...model?.likes!, like],
      },
      { new: true }
    );

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
