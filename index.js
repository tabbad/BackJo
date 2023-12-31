// index.js
const express = require('express')
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


app.get('/home', (req, res) => {
   //return data 
    //res.send(accounts)
    res.status(200).json('Welcome, your app is working well');
   

})

app.get('/recuperer-json', (req, res) => {
  const filePath = path.join(__dirname, 'account.json'); // Remplacez 'nom-du-fichier.json' par le nom de votre fichier JSON

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



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// Export the Express API
module.exports = app