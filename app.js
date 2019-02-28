"use strict";

import express from 'express';
import api from './routes';

const app = express();

// require middleware
app.use('/api', api);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
