import express from "express";
import { protect } from "../controllers/authController";
import * as commentController from "../controllers/commentController";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(commentController.getAllComment)
  .post(
    protect,
    commentController.setUserPostIds,
    commentController.createComment
  );
router.route("/:id").delete(protect, commentController.deleteComment);

export default router;
