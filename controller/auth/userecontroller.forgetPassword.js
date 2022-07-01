const verifyEmail = require("../../model/crud/verifyEmail");
const email = require("../../services/email/email");
const CustomError = require("../../services/error/CustomError");
const optEmail = require("../../templates/optEmail");
const forgetPassword = async (req, res, next) => {
  const log = await verifyEmail(req.body.email);
  console.log(log);
  let status;
  try {
    status = await email({
      email:req.body.email,
      subject: "Reset Your Password",
      template: optEmail(log.firstName, log.otp),
    });
    console.log(status);
    res.json({ verificationEmailSent: status.status });
  } catch (e) {
    console.log(e);
    return next(CustomError.internalServerError("Unable to send Email"));
  }
};


module.exports = forgetPassword;
