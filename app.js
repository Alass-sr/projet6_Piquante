const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Sauce = require("./models/sauce");
const { json } = require("body-parser");

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

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body
  });
  sauce.save()
  .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
  .catch(error => res.status(400).json({ error: error}));
})

app.use('/api/stuff', (req, res, next) => {
  Sauce.find()
  Then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
})


module.exports = app;

// app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// });

// // Import module npm : ajout de plugins externes
// const express = require("express");

// // //
// const bodyParser = require("body-parser");

// // Import moogose pour utiliser dans la base de données
// const mongoose = require("mongoose");

// const app = express();

// app.use((req, res, next) => {
// //   // on indique que les ressources peuvent être partagées depuis n'importe quelle origine
//   res.setHeader("Access-Control-Allow-Origin", "*");
// //   // on indique les entêtes qui seront utilisées après la pré-vérification cross-origin afin de donner l'autorisation
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
// //   // on indique les méthodes autorisées pour les requêtes HTTP
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
// //   // on autorise ce serveur à fournir des scripts pour la page visitée
//   res.setHeader("Content-Security-Policy", "default-src 'self'");
//   next();
// });

// app.use(bodyParser.json());
