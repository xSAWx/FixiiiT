import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";


const app = express();
const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("MongDB Connected");
  } catch (error) {
    console.log({ error });
  }
})();

// app.use("/api/auth", userRoutes);



app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(1337, console.log("http://localhost:1337"));
