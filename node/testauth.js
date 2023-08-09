const { Client } = require('cassandra-driver');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

const port = 3000;

const corsOptions = {
  origin: ['http://localhost:4200'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'profil'
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
  const formData = req.body;

  const query = 'INSERT INTO profil.users( first_name, last_name, email, password, date_of_birth, gender, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const params = [formData.first_name, formData.last_name, formData.email, formData.password, formData.date_of_birth, formData.gender, req.file.path];

  client.execute(query, params, { prepare: true })
    .then(() => {
      res.status(200).json({ message: 'Données enregistrées avec succès.' });
    })
    .catch(err => {
      console.error('Erreur lors de l\'insertion des données dans Cassandra', err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement des données.' });
    });
});

// Servir les fichiers uploadés
app.use('/uploads', express.static(uploadDir));

app.get('/api/login', (req, res) => {
  res.status(200).json({ message: 'Authentification réussie.' });
});

app.post('/api/login', (req, res) => {
  const formData = req.body;

  const query = 'SELECT * FROM profil.users WHERE email = ? AND password = ? ALLOW FILTERING';
  const params = [formData.email, formData.password];

  client.execute(query, params, { prepare: true })
    .then(result => {
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const tokenPayload = {
          email: formData.email,
          image_url: user.image_url
        };
        const token = jwt.sign(tokenPayload, 'your-secret-key');

        res.status(200).json({ token: token, message: 'Authentification réussie.' });
      } else {
        res.status(401).json({ message: 'Identifiants invalides.' });
      }
    })
    .catch(err => {
      console.error('Erreur lors de la vérification des informations d\'identification dans Cassandra', err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'authentification.' });
    });
});

app.get('/api/user', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'your-secret-key');

  const query = 'SELECT * FROM profil.users WHERE email = ?';
  const params = [decodedToken.email];

  client.execute(query, params, { prepare: true })
    .then(result => {
      if (result.rows.length > 0) {
        const user = result.rows[0];

        res.status(200).json({
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          gender: user.gender,
          date_of_birth: user.date_of_birth,
          image_url: user.image_url
        });
      } else {
        res.status(404).json({ message: 'Utilisateur non trouvé.' });
      }
    })
    .catch(err => {
      console.error('Erreur lors de la récupération des données de l\'utilisateur dans Cassandra', err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération des données de l\'utilisateur.' });
    });
});

// Gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).json({ message: 'Ressource non trouvée.' });
});

// Gérer les erreurs 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur s\'est produite sur le serveur.' });
});