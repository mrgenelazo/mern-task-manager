require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");

const app = express();

//connectDB();

//MIddleare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
