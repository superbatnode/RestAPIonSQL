const sendMail = require("./gmail");
const email = async (option) => {
  const options = {
    to: option.email,
    subject: option.subject,
    html: option.template,
    textEncoding: "base64",
    headers: [
      { key: "Jr Node Dev", value: "Sandeep Soni" },
    ],
  };
  const messageId = await sendMail(options);
  return messageId;
};
module.exports = email; 
email({email:"sandeepkumar8842@gmail.com", subject:"none", template:"test"}).then(console.log)