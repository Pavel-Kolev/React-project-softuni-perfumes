const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: [5, "Too short"],
    match: [/^[a-zA-Z0-9]+$/, "user is not in restrictions"],
    unique: { value: true, message: "Username already exists" },
  },
  password: {
    type: String,
    minLength: [9, "Password is too short"],
    
    },
    email:{
    type:String,
    
     

    },
  },

);
 


userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);
module.exports = User;