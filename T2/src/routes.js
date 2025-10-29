const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('./logger');

router.use((req, res, next) => {
  logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
  next();
});

router.get('/counter-increase', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-increase'`);
  const newCount = counter.increase();
  res.json({ count: newCount });
});

router.get('/counter-read', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-read'`);
  const currentCount = counter.read();
  res.json({ count: currentCount });
});

router.get('/counter-reset', (req, res) => {
  logger.info(`[ENDPOINT] GET '/counter-reset'`);
  const resetCount = counter.zero();
  res.json({ count: resetCount });
});

module.exports = router;
