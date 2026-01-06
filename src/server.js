require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3333, () => {
  console.log("GateKeeper API rodando 🚀");
});
