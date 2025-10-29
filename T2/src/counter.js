const logger = require('./logger');

class Counter {
  constructor() {
    this.count = 0;
  }

  read() {
    logger.info(`[COUNTER] read ${this.count}`);
    return this.count;
  }

  increase() {
    this.count += 1;
    logger.info(`[COUNTER] increase ${this.count}`);
    return this.count;
  }

  zero() {
    this.count = 0;
    logger.info(`[COUNTER] zeroed ${this.count}`);
    return this.count;
  }
}

module.exports = new Counter();
