const { Client, types } = require('cassandra-driver');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

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

app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express.');
});

app.post('/api/formdata', upload.single('image'), (req, res) => {
  const id = types.Uuid.random();
  const formData = req.body;

  // const query = 'INSERT INTO profil.userss1( id, first_name, last_name, email, password, date_of_birth, gender, image_url, scolarite, situation_amoureuse, ville_actuelle, ville_origine) VALUES (?, ?, ?, ?, ?, ?, ? , ? , ? , ? ,? , ?)';
  // const params = [id, formData.first_name, formData.last_name, formData.email, formData.password, formData.date_of_birth, formData.gender, req.file.path,formData.scolarite, formData.situation_amoureuse, formData.ville_actuelle, formData.ville_origine];
  const query = 'INSERT INTO profil.userss1( email, date_of_birth, first_name, gender ,id,image_url, last_name, password, scolarite, situation_amoureuse, ville_actuelle, ville_origine) VALUES (?, ?, ?, ?, ?, ?, ? , ? , ? , ? ,? , ?)';
  const params = [formData.email,formData.date_of_birth, formData.first_name, formData.gender,id ,req.file.path,  formData.last_name,  formData.password, formData.scolarite, formData.situation_amoureuse, formData.ville_actuelle, formData.ville_origine]; 
  client.execute(query, params, { prepare: true })
    .then(() => {
      res.status(200).json({ message: 'Données enregistrées avec succès.' });
    })
    .catch(err => {
      console.error('Erreur lors de l\'insertion des données dans Cassandra', err);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de l\'enregistrement des données.' });
    });
});


app.get('/api/users', (req, res) => {
    const jwtToken = req.headers.authorization.split(' ')[1];
  
    try {
      const decodedToken = jwt.verify(jwtToken, 'your-secret-key');
      const email = decodedToken.email; // Récupérez l'e-mail de l'utilisateur
  
      const query = 'SELECT * FROM profil.userss1 WHERE email = ? LIMIT 1';
      client.execute(query, [email], { prepare: true })
        .then(result => {
          const user = result.rows[0];
          if (user) {
            res.status(200).json(user);
          } else {
            res.status(401).json({ message: 'Identifiants invalides.' });
          }
        })
        .catch(err => {
          console.error('Erreur lors de la récupération de l\'utilisateur dans Cassandra', err);
          res.status(500).json({ message: 'Une erreur s\'est produite lors de la récupération de l\'utilisateur.' });
        });
    } catch (error) {
      console.error('Erreur lors de la vérification du token JWT', error);
      res.status(401).json({ message: 'Token invalide.' });
    }
  });
  

app.get('/api/login', (req, res) => {
  res.status(200).json({ message: 'Authentification réussie.' });
});

app.post('/api/login', (req, res) => {
  const formData = req.body;

  const query = 'SELECT * FROM profil.userss1 WHERE email = ? AND password = ? ALLOW FILTERING';
  const params = [formData.email, formData.password];

  client.execute(query, params, { prepare: true })
    .then(result => {
      if (result.rows.length > 0) {
        const token = jwt.sign({ email: formData.email }, 'your-secret-key');
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

app.put('/api/profile/:email', (req, res) => {
  const userEmail = req.params.email;
  const formData = req.body;

  const query = 'UPDATE userss1 SET date_of_birth = ?, first_name = ?, gender = ?,id = ? ,image_url = ?, last_name = ?, password = ?, scolarite = ?, situation_amoureuse = ?, ville_actuelle = ?, ville_origine = ? WHERE email = ?';
  const params = [
    formData.date_of_birth,
    formData.first_name,
    formData.gender,
    formData.id,
    formData.image_url,
    formData.last_name,
    formData.password,
    formData.scolarite,
    formData.situation_amoureuse,
    formData.ville_actuelle,
    formData.ville_origine,
    userEmail
  ];

  client.execute(query, params, { prepare: true }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error updating profile in Cassandra' });
    } else {
      console.log('Profile updated in Cassandra');
      res.status(200).json({ message: 'Profile updated in Cassandra' });
    }
  });
});