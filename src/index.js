"use strict";

import express from 'express';
import api from './routes';
import cors from 'cors';

const app = express();

// require middleware
app.use(cors());
app.use('/v1', api);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
