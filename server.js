const express = require("express");
const app = express();
const cors = require("cors");
const ravanaroutes = require("./api/Routes/Ravana/routes");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", ravanaroutes);

app.listen(process.env.PORT || 7000, () => {
  console.log("server up and running");
});
