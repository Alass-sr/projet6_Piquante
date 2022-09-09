const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const sauceRouter = require('./models/Sauces');

const userRouter = require("./router/user");



mongoose
.connect(
  "mongodb+srv://Alass:mongoland@cluster0.4fdo616.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then(() => {
    console.log("Connexion réussie !");
  })
  .catch(() => {
    console.log("Connexion échouée !");
  });
  
  const app = express();
  
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.use((req, res) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
// });
app.use(express.json())
app.use(bodyParser.json());

app.use("/api/sauces", sauceRouter);
app.use("/api/auth", userRouter);



module.exports = app;
