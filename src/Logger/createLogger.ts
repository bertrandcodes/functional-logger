export const createLogger = (logFn = createAppLogFn()) => ({
  debug: (message, auditData = {}) => {
    logFn({
      level: "debug",
      message,
      auditData,
    });
  },
});

// Debug
// Info
// Warn
// Error
// Fatal

/**
 *
 * @returns default log function that takes in logData and passes it through consoleLogger and aggregatorLogger
 */

const createAppLogFn = ({
  consoleLevel,
  consoleDriver,
  aggregatorLevel,
  aggregatorSend,
  aggregatorUrl,
}) => {
  // const consoleLogger
  // const aggregatorLogger
  // return sequence([
  //   consoleLogger,
  //   aggregatorLogger,
  // ])
  return (message, auditData) => {
    if (consoleLevel === "debug") {
      consoleDriver(message, auditData);
    }
  };
};
