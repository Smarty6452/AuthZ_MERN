import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected succesfully");
  })
  .catch((err) => {
    console.log("db not conneccted" + err);
  });

const app = express();

app.use(express.json())

app.listen(3000, () => {
  console.log(`server listening on 3000 `);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
