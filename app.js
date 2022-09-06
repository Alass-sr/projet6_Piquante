const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// const sauceRouter = require("./router/sauce");
const userRouter = require('./router/user');

// const { json } = require("body-parser");

mongoose
.connect(
  "mongodb+srv://Alass:mongoland@cluster0.4fdo616.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => {
      console.log("Connexion réussie !");
    })
    .catch(() => {
      console.log("Connexion échouée !");
    });
    
    const app = express();

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// app.use((req, res) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
// });
app.use(bodyParser.json());

// app.use('/api/sauces', sauceRouter);
app.use('/api/auth', userRouter);



app.post('/api/sauces', (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body
  });
  sauce.save()
  .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
  .catch(error => res.status(400).json({ error: error}));
})

app.use('/api/sauces', (req, res, next) => {
  Sauce.find()
  Then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
})


module.exports = app;


