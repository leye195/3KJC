import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use("/static", express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  const html = fs.readFileSync(
    path.join(__dirname, "views/index.html"),
    "utf8"
  );
  res.send(html);
});

const handleListener = () => {
  console.log(`Express is running on http://localhost:${process.env.PORT}`);
};
app.listen(process.env.PORT, handleListener);
