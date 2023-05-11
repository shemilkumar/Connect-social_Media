import { Router } from "express";
import * as postController from "../controllers/postController";
import { protect } from "../controllers/authController";

const router = Router();

router
  .route("/")
  .get(postController.getAllPost)
  .post(protect, postController.createPost);

router
  .route("/:id")
  .get(postController.getPost)
  .delete(protect, postController.deletePost);

export default router;
