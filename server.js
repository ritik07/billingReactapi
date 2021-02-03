const express = require("express");
const app = express();
const cors = require("cors");
const RavanaRoute = require("./API/Routes/Ravana/routes");

const PORT = process.env.PORT || "8080";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working!!!");
});

app.use("/api", RavanaRoute);

app.set("port", PORT);

// app.listen(PORT, () => {
//   console.log("server up and running");
// });
