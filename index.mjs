import express from "express";
import { dbConnect } from "./db/connectDB.mjs";
import UserData from "./schema/user.mjs";
const app = express();
const port = 3000;

app.use(express.json());

dbConnect();
app.get("/", (req, res) => {
  res.send("Express + JavaScript Server");
});

app.post("/saveUserData", function (req, res) {
  const saveUserData = new UserData({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  saveUserData
    .save()
    .then((result) => {
      res.status(201).send({
        message: "User Save Created Successfully",
        result,
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "Error creating user save",
        error,
      });
    });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
