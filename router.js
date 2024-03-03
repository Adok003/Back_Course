import Router from "express";
import PostController from "./PostController.js";
import UserController from "./UserController.js";

const router = new Router()


router.post("/posts", PostController.create)
router.get("/posts", PostController.getAll)
router.get("/posts/:id", PostController.getOne)
router.put("/posts", PostController.update)
router.delete("/posts/:id", PostController.delete)

router.post("/user", UserController.create)
router.get("/user", UserController.getAll)
router.get("/user/:id", UserController.getOne)
router.put("/users", UserController.update)
router.delete("/user/:id", UserController.delete)

export default router;