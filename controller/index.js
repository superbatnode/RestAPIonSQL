const UserController = {
  address: require("./auth/usercontroller.address"),
  register: require("./auth/usercontroller.register"),
  getUser: require("./auth/userecontroller.getUser"),
  delete: require("./auth/userecontroller.deleteUser"),
  forgetPassword: require("./auth/userecontroller.forgetPassword"),
  getAllUserDetails: require("./auth/userecontroller.getAllUserDetails"),
  login: require("./auth/userecontroller.login"),
  profileImage: require("./auth/userecontroller.profileImage"),
};

module.exports = UserController;
