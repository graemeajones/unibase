// Imports ---------------------------------------
import express from 'express';
import cors from 'cors';

import AIISRouter from './projects/AIIS/endpoints.js';
import eventsRouter from './projects/eventbooking/endpoints.js';
import staysafeRouter from './projects/staysafev1/endpoints.js';
import unibaseRouter from './projects/unibase/endpoints.js';

import API_URL from '#root/apiURL.js';

// Configurexpress app -------------------------
const app = new express();

// Configure middleware --------------------------
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APIs ------------------------------------------

const listOfAPIs = [
  {
    name: 'AIIS',
    api: `${API_URL}/aiis/api`,
  },
  {
    name: 'Events',
    api: `${API_URL}/events/api`,
  },
  {
    name: 'StaysafeV1',
    api: `${API_URL}/staysafe/v1/api`,
  },
  {
    name: 'Unibase',
    api: `${API_URL}/api`,
  },
];

app.use('/aiis/api', AIISRouter);
app.use('/events/api', eventsRouter);
app.use('/staysafe/v1/api', staysafeRouter);
app.use('/api', unibaseRouter);

app.get('/', (req, res) =>
  res.status(200).json({
    message: 'List of available APIs',
    listOfAPIs,
  })
);

app.get('/*', (req, res) =>
  res.status(404).json({
    message: 'Specified API not found',
    listOfAPIs,
  })
);

// Start server ----------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
