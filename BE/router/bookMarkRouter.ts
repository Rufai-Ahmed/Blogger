import { Router } from "express";
import {
  addToBookMarkData,
  getBookMarkData,
} from "../controller/bookMarksController";

const router: Router = Router();

router.route("/book-mark").get(getBookMarkData);
router.route("/create-book-mark/:ID").post(addToBookMarkData);

export default router;
