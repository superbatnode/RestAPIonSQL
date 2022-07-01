const express = require("express");
const UserController = require("../controller");
const auth = require("../middleware/auth");
const router = express.Router();
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/get", auth, UserController.getUser);
router.get("/getall", auth, UserController.getAllUserDetails);
router.post("/address", auth, UserController.address);
router.delete("/deleteAddress/:id", auth, UserController.deleteUserAddress);
router.post("/forgetPassword", UserController.forgetPassword);
router.post("/forgetPassword/reset", UserController.reset);
router.post(
  "/uploadPhoto",auth,
  UserController.photoUpload.upload.single("avatar"),
  UserController.photoUpload.photoUpload
);

module.exports = router;
