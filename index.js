import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import './env.js';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use

const app = express();

// config firebase
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSppqC35R2DFtaY_RUa1gXhy6OO6hI9hw",
  authDomain: "sda-arrioja.firebaseapp.com",
  projectId: "sda-arrioja",
  storageBucket: "sda-arrioja.appspot.com",
  messagingSenderId: "85486249573",
  appId: "1:85486249573:web:4c19160d680a02d2acc88c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// config bcrypt
const saltRounds = 15;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});