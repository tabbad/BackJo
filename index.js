// index.js
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = 4000
//read account.json file
const path = require('path');
const fs = require('fs');

function readAccount() {
  var file = fs.readFileSync('account.json', 'utf8');
  return JSON.parse(file);
}
//const data = fs.readFileSync('account.json');
//const accounts = JSON.parse(data);

app.use(bodyParser.json());

app.get('/home', (req, res) => {
   //return data 
    //res.send(accounts)
    res.status(200).json('Welcome, your app is working well');
})

app.get('/recuperer-json', (req, res) => {
  const filePath = path.join(__dirname, 'test/account.json');

  // Lire le fichier JSON depuis le système de fichiers
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier JSON :', err);
      res.status(500).json({ error: 'Erreur lors de la lecture du fichier JSON' });
      return;
    }

    // Parser le contenu du fichier JSON
    const jsonData = JSON.parse(data);

    // Renvoyer le fichier JSON en tant que réponse
    res.json(jsonData);
  });
});

app.post('/modifier-json', (req, res) => {
  const filePath = path.join(__dirname, 'test/account.json');

  // Lire le fichier JSON depuis le système de fichiers
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier JSON :', err);
      res.status(500).json({ error: 'Erreur lors de la lecture du fichier JSON' });
      return;
    }

    const jsonData = JSON.parse(data);

    // Mettre à jour les données avec celles reçues dans la requête
    const updatedData = Object.assign({}, jsonData, req.body);



    // Écrire les modifications dans le fichier JSON
    fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture du fichier JSON :', err);
        res.status(500).json({ error: 'Erreur lors de l\'écriture du fichier JSON' ,json: updatedData });
        return;
      }

      res.json({ message: 'Fichier JSON modifié avec succès' });
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// Export the Express API
module.exports = app