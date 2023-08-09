const { Client, types } = require('cassandra-driver');
const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Importer le module multer pour gérer les fichiers envoyés
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express.');
});

// Définir le dossier de destination des fichiers envoyés
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configurer multer pour gérer les fichiers envoyés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.post('/api/formdata', upload.single('image'), (req, res) => {
  const id = types.Uuid.random();
  

  const formData = req.body; // Récupérer les données du formulaire envoyées par Angular

  // Insérer les données dans la base de données Cassandra
  const query = 'INSERT INTO profil.userss( id, first_name, last_name, email, password, date_of_birth, gender, image_url, scolarite, situation_amoureuse, ville_actuelle, ville_origine) VALUES (?, ?, ?, ?, ?, ?, ? , ? , ? , ? ,? , ?)';
  const params = [id, formData.first_name, formData.last_name, formData.email, formData.password, formData.date_of_birth, formData.gender, req.file.path,formData.scolarite, formData.situation_amoureuse, formData.ville_actuelle, formData.ville_origine]; // Remplacez les noms des champs par ceux de votre formulaire

  client.execute(query, params, { prepare: true })
    .then(() => {
      // Les données ont été insérées avec succès dans la base de données
      res.status(200).json({ message: 'Données enregistrées avec succès.' });
    })
    .catch(err => {
      // Une erreur s'est produite lors de l'insertion des données
      console.error('Erreur lors de l\'insertion des données dans Cassandra', err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement des données.' });
    });
});

// Servir les fichiers uploadés
app.use('/uploads', express.static(uploadDir));