const express = require('express');
const routerAPI = require('./routes');

// Webserver definition
const expressApp = express();
const expressPort = 3000;

// Middleware definition (To receive JSON over a Request)
expressApp.use(express.json());

// WebApp Listener
expressApp.listen(expressPort, () => {
  console.log('Collec-TJ Express webserver started...');
  console.log('Using port '+expressPort);
});

// WebApp Routes
expressApp.get('/', (request, response) => {
  response.send('Welcome to the root of my WebAPP');
});

expressApp.get('/something', (request, response) => {
  response.send('Welcome to the Something Page');
});

routerAPI(expressApp);
