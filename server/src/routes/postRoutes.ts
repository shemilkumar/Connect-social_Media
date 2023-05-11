import { Router } from "express";
import { createPost, getAllPost } from "../controllers/postController";

const router = Router();

router.route("/").get(getAllPost).post(createPost);

export default router;
