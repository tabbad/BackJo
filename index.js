// index.js
const express = require('express')
const app = express()
const PORT = 4000
//read account.json file
const fs = require('fs');
const data = fs.readFileSync('account.json');
const accounts = JSON.parse(data);


app.get('/home', (req, res) => {
   //return all accounts
    res.json(accounts);
})



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// Export the Express API
module.exports = app