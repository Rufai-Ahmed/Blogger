import { Router } from "express";
import {
  createWebData,
  getDefault,
  getWebData,
  getWebDataBySearch,
  updateWebData,
  updateWebDataLike,
} from "../controller/webController";

const router: Router = Router();

router.route("/").get(getDefault);
router.route("/get-web").get(getWebData);
router.route("/search").get(getWebDataBySearch);

router.route("/create-web").post(createWebData);
router.route("/update-web/:ID").patch(updateWebData);
router.route("/update-web-like/:ID").patch(updateWebDataLike);

export default router;
