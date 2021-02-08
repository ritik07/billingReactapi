const express = require("express");
const app = express();
const cors = require("cors");
const ravana = require('./routes/ravana/routes')
app.use(cors());
app.use(express.json());

app.get('/', (req , res) => {res.send("Asdasd")})
app.use('/api' ,  ravana.routes )

app.listen(process.env.PORT || 7000, () => {
  console.log("server up and running");
});
