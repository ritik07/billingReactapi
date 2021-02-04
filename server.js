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

app.set("port", process.env.PORT || 5000);

// Start node server
app.listen(app.get("port"), function () {
  console.log("Node server is running on port " + app.get("port"));
});
