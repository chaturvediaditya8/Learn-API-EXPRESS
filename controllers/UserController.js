const UserModel = require("../model/User");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt");
cloudinary.config({
  cloud_name: "djjzy96fu",
  api_key: "248116893734283",
  api_secret: "sX9x4jLJxgMuqx97qKZPwUBWxd4",
});
class UserController {
  static getUSer = async (req, res) => {
    try {
      res.send("Hello User Ready to learn API");
    } catch (error) {
      console.log(error);
    }
  };
  static InsertUser = async (req, res) => {
    try {
      console.log(req.body);
      // console.log(req.files.image)
      const file = req.files.image;
      //image upload cloudianry
      const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "USERProfileAPI",
      });
      // console.log(imageUpload)
      const { name, email, pass, cpass } = req.body;
      const user = await UserModel.findOne({ email: email });
      // console.log(user)
      if (user) {
        res
          .status(401)
          .json({ status: "failed", message: "This Email is already exists" });
      } else {
        if (name && email && pass && cpass) {
          if (pass === cpass) {
            const hashPassword = await bcrypt.hash(pass, 10);
            const result = new UserModel({
              name: name,
              email: email,
              password: hashPassword,
              image: {
                public_id: imageUpload.public_id,
                url: imageUpload.secure_url,
              },
            });
            await result.save();
            // if (userdata) {
            //   var token = jwt.sign({ ID: userdata._id }, "Aditya@1234");
            //   // console.log(token)
            //   res.cookie("Token", token);
            //   this.sendVerifymail(name, email, userdata._id);
            //   //To redirect to login page
            //   req.flash(
            //     "error",
            //     "Your Registration has been successfully.Please verify your mail. ."
            //   );
            //   res.redirect("/register");
            // } else {
            //   req.flash("error", "Not Register.");
            //   res.redirect("/register");
            // }
            res
              .status(201)
              .json({ status: "success", message: "Register Successfuly " });
          } else {
            res
              .status(401)
              .json({
                status: "failed",
                message: "Password and Confirm password does not match.",
              });
          }
        } else {
          res
            .status(401)
            .json({ status: "failed", message: "ALL fields are required" });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = UserController;
