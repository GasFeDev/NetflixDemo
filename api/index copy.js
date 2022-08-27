const express = require("express");
const app = express();

const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

/* PARA DEPLOY EN HEROKU */
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

/* app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
}); */

/* const port = process.env.PORT || 8800;

app.listen(port, "0.0.0.0", function () {
  console.log("Listening on Port 8800");
}); */

/* const server = app.listen(process.env.PORT || 8800, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
 */
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
