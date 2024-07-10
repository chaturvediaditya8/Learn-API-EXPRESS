const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  
    image: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "User",
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel
