const UserController = {
  address: require("./auth/usercontroller.address"),
  register: require("./auth/usercontroller.register"),
  getUser: require("./auth/userecontroller.getUser"),
  deleteUserAddress: require("./auth/userecontroller.deleteUser"),
  forgetPassword: require("./auth/userecontroller.forgetPassword"),
  getAllUserDetails: require("./auth/userecontroller.getAllUserDetails"),
  login: require("./auth/userecontroller.login"),
  profileImage: require("./auth/userecontroller.profileImage"),
  reset: require("./auth/usercontroller.reset")
};

module.exports = UserController;
