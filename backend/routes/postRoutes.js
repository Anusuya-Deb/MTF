// import express from "express";
// const router = express.Router();
// import {
//   createPost,
//   deletePost,
//   getAllPosts,
//   getPost,
//   updatePost,
// } from "../controllers/postControllers";
// import { authGuard, adminGuard } from "../middleware/authMiddleware";

// router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
// router
//   .route("/:slug")
//   .put(authGuard, adminGuard, updatePost)
//   .delete(authGuard, adminGuard, deletePost)
//   .get(getPost);

// export default router;

import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postControllers";
import { authGuard, adminGuard } from "../middleware/authMiddleware";
import { invalidPathHandler } from "../middleware/errorHandler";

router
  .route("/")
  .post(authGuard, adminGuard, createPost)
  .get(getAllPosts)
  .all(invalidPathHandler);

router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost)
  .all(invalidPathHandler);

export default router;

// import express from "express";
// const router = express.Router();
// import {
//   createPost,
//   deletePost,
//   getAllPosts,
//   getPost,
//   updatePost,
// } from "../controllers/postControllers";
// import { authGuard, adminGuard } from "../middleware/authMiddleware";

// router.post("/", authGuard, adminGuard, createPost);
// router.get("/", getAllPosts);
// router.put("/:slug", authGuard, adminGuard, updatePost);
// router.delete("/:slug", authGuard, adminGuard, deletePost);
// router.get("/:slug", getPost);

// export default router;
