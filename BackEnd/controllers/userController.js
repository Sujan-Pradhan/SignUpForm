const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.userRegister = async (req, res) => {
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  user = await user.save();
  if (!user) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(user);
};
