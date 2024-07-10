const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(process.env.Local_URL)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB