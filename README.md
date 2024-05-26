# Enhanced Logger

Enhanced Logger is a simple yet powerful logging utility for Node.js applications. It supports different log levels, structured logging, and multiple transports (console and file).

## Installation

You can install the Enhanced Logger package via npm:

```sh
npm install enhanced-logger

const EnhancedLogger = require('enhanced-logger');

const logger = new EnhancedLogger({
  logLevel: 'debug',
  transports: ['console', 'file'],
  logFilePath: 'myapp.log'
});

logger.info('This is an info message');
logger.error('This is an error message', { errorCode: 123 });
logger.debug('Debugging info', { debugData: { key: 'value' } });

const EnhancedLogger = require('enhanced-logger');

const logger = new EnhancedLogger({
  logLevel: 'debug',
  transports: ['console', 'file'],
  logFilePath: 'myapp.log'
});

logger.info('This is an info message');
logger.error('This is an error message', { errorCode: 123 });
logger.debug('Debugging info', { debugData: { key: 'value' } });


This README file provides a clear overview of the package, its installation, configuration options, usage examples, and licensing information. You can further customize it as needed before publishing your package to npm.
