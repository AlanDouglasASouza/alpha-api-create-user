require("dotenv/config");
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes.js");
const cors = require("cors");
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
app.use("/static", express.static(__dirname + "/public"));

app.listen(PORT, () => {
    console.log("Server ON!");
});
