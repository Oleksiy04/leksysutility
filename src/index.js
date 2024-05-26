const fs = require('fs');
const path = require('path');

class EnhancedLogger {
  constructor(options = {}) {
    this.levels = ['error', 'warn', 'info', 'debug'];
    this.logLevel = options.logLevel || 'info';
    this.transports = options.transports || ['console'];
    this.logFilePath = options.logFilePath || 'app.log';
  }

  log(level, message, meta = {}) {
    if (this.levels.indexOf(level) <= this.levels.indexOf(this.logLevel)) {
      const logEntry = this.formatLog(level, message, meta);

      if (this.transports.includes('console')) {
        this.logToConsole(logEntry);
      }

      if (this.transports.includes('file')) {
        this.logToFile(logEntry);
      }
    }
  }

  formatLog(level, message, meta) {
    const timestamp = new Date().toISOString();
    return JSON.stringify({ timestamp, level, message, ...meta });
  }

  logToConsole(logEntry) {
    console.log(logEntry);
  }

  logToFile(logEntry) {
    fs.appendFileSync(this.logFilePath, logEntry + '\n', 'utf8');
  }

  error(message, meta) {
    this.log('error', message, meta);
  }

  warn(message, meta) {
    this.log('warn', message, meta);
  }

  info(message, meta) {
    this.log('info', message, meta);
  }

  debug(message, meta) {
    this.log('debug', message, meta);
  }
}

module.exports = EnhancedLogger;
