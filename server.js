const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/medicalProjectDB')
    .then(() => console.log('CONNECT TO DATABASE SUCCESSFULY'))
    .catch(err => console.error('FAILED CONNECT', err));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`SERVER WORK ON PORT: ${PORT}`);
});