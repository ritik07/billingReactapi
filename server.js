const express = require("express");
const app = express();
const cors = require("cors");
const RavanaRoute = require("./API/Routes/Ravana/routes");

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working!!!");
});

app.use("/api", RavanaRoute);

app.listen(port, () => {
  console.log("server up and running");
});
