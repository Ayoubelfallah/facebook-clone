const { Client } = require('cassandra-driver');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const jwt = require('jsonwebtoken');

const port = 3000;
const corsOptions = {
  origin: ['http://localhost:4200'], // Remplacez les domaines par ceux de votre application Angular
  optionsSuccessStatus: 200 // facultatif : spécifie le statut de réussite pour les requêtes OPTIONS
};
app.use(cors(corsOptions));

const client = new Client({
  contactPoints: ['127.0.0.1'], // Remplacez par les adresses IP de vos nœuds Cassandra
  localDataCenter: 'datacenter1', // Remplacez par le nom de votre datacenter
  keyspace: 'profil' // Remplacez par le nom de votre keyspace
});

client.connect()
  .then(() => {
    console.log('Connecté à Cassandra');
    app.listen(port, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
    });
  })
  .catch(err => console.error('Erreur de connexion à Cassandra', err));
  app.get('/api/login', (req, res) => {
          res.status(200).json({ message: 'Authentification réussie.' });
        });
        app.post('/api/login', (req, res) => {
          const formData = req.body; // Récupérer les données du formulaire envoyées par Angular
        
          // Vérifier les informations d'identification dans la base de données
          const query = 'SELECT * FROM profil.userss WHERE email = ? AND password = ? ALLOW FILTERING';

          const params = [formData.email, formData.password]; // Utilisez formData.email et formData.password
        
          client.execute(query, params, { prepare: true })
            .then(result => {
              if (result.rows.length > 0) {
                // Générer un jeton d'authentification
                const token = jwt.sign({ email: formData.email }, 'your-secret-key'); // Remplacez 'your-secret-key' par votre clé secrète
        
                // Renvoyer le jeton d'authentification à l'application cliente
                res.status(200).json({ token: token, message: 'Authentification réussie.' });
              } else {
                // Informations d'identification invalides
                res.status(401).json({ message: 'Identifiants invalides.' });
              }
            })
            .catch(err => {
              console.error('Erreur lors de la vérification des informations d\'identification dans Cassandra', err);
              res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'authentification.' });
            });
        });
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express.');
})