const express = require("express");
const app = express();
const cors = require("cors");
const RavanaRoute = require("./API/Routes/Ravana/routes");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working!!!");
});

app.use("/api", RavanaRoute);

// app.set("port", PORT);

server.listen(port, () => {
  console.log("App is running on port " + port);
});
