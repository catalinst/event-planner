const express = require('express');
const mongoose = require('mongoose')
const categoriesRouter = require('./Categories/Controller')
const eventsRouter = require('./Events/Controller')
const populateDB = require('./populateDB');
const cors = require("cors");

const app = express()

const startServer = () => {
  app.listen(4000, () => console.log(`Server is running on port 4000`))
}

const startDatabaseConnection = () => {
  mongoose.connect('mongodb://localhost:27017/').then(() => console.log('Connected to Database'))
}

const initRoutes = () => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });
  app.use(express.json());

  app.use(cors({
    origin: '*'

    // for whitelisting certain domains
    //  origin: ['https://www.9gag.com', 'https://www.google.com/']
  }));


  app.use('/categories', categoriesRouter);
  app.use('/events', eventsRouter);
}


const startApp = () => {
  startServer()
  startDatabaseConnection()
  initRoutes()
  populateDB()
}

startApp()
