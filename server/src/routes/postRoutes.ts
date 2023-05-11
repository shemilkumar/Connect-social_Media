import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPost,
  getPost,
} from "../controllers/postController";
import { protect } from "../controllers/authController";

const router = Router();

router.route("/").get(getAllPost).post(protect, createPost);

router.route("/:id").get(getPost).delete(protect, deletePost);

export default router;
