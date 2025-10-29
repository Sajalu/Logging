const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

app.listen(PORT, () => {
  logger.info('[MAIN] Starting');
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', () => {
  logger.info('[MAIN] Stopping');
  process.exit();
});
