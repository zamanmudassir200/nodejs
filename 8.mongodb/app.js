const express = require("express");
const userModel = require("./usermodel");
const app = express();

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Mudassir",
    username: "mudassir",
    email: "mudassirzaman@yahoo.com",
  });
  res.send(createdUser);
});
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});
app.get("/update", async (req, res) => {
  const updateduser = await userModel.findOneAndUpdate(
    { username: "mudassir" },
    { name: "Muhammad Mudassir zaman" },
    { new: true }
  );
  res.send(updateduser);
});
app.get("/delete", async (req, res) => {
  const deleteUser = await userModel.findOneAndDelete({ username: "mudassir" });
  res.send(deleteUser);
});
app.listen(3000, () => console.log("Server Started!"));
