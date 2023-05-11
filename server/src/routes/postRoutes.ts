import { Router } from "express";
import { createPost, getAllPost } from "../controllers/postController";
import { protect } from "../controllers/authController";

const router = Router();

router.route("/").get(getAllPost).post(protect, createPost);

export default router;
