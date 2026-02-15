const User = require("../../Databases/Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  const { email, password, name, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });
  await user.save();
  res.status(201).send({ message: "User registered successfully" });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).send({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, "lab4key");
  res.status(200).send({ message: "Login successful", token });
};
