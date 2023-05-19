const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db_url = process.env.DB_URL
mongoose.connect(db_url);

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'ajkdnaksndjkwbfalndalksndasknlknakcas';

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
        username, 
        password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json('ok');
        })
    } else {
        res.status(400).json('Wrong Credentials');
    }
})

app.listen(4000, () => {
  console.log("Server listening on Port 4000");
});