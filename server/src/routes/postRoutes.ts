import { Router } from "express";
import * as postController from "../controllers/postController";
import { protect } from "../controllers/authController";
import commentRouter from "./commentRoutes";

const router = Router();

router.use("/:postId/comments", commentRouter);

router
  .route("/")
  .get(postController.getAllPost)
  .post(protect, postController.setUser, postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .delete(protect, postController.deletePost);

export default router;
