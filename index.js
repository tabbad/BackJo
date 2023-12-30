// index.js
const express = require('express')
const app = express()
const PORT = 4000
//read account.json file
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
   // res.status(200).json('Welcome, your app is working well');
  var account = readAccount();
    //res.status(200).send({account: account});
    const jsonData = {
        message: 'Hello, this is your JSON data!',
        test:account
      };
    
    res.json(jsonData);

})



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




// Export the Express API
module.exports = app