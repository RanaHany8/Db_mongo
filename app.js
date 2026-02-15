const express = require('express');
const connection = require('./Databases/dbConnection');

const app = express();


connection();


app.use(express.json());



app.use('/auth', require('./Modules/Auth/auth.route'));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
