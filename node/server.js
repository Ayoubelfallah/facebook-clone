const { Client } = require('cassandra-driver');
const express = require('express');
const cors = require('cors');
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
          app.post('/api/formdata', (req, res) => {
                    const formData = req.body; // Récupérer les données du formulaire envoyées par Angular
                  
                    // Insérer les données dans la base de données Cassandra
                    const query = 'INSERT INTO profil.users( first_name, last_name, email, password, date_of_birth,  gender) VALUES (?, ?, ?, ?, ?, ?)';
                    const params = [formData.first_name, formData.last_name, formData.email,formData.password, formData.date_of_birth, formData.gender]; // Remplacez les noms des champs par ceux de votre formulaire
                  
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
                  
                