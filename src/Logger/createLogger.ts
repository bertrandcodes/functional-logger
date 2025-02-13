export const createLogger = (logFn = createAppLogFn()) => ({
  debug: (message, auditData = {}) => {
    logFn({
      level: "debug",
      message,
      auditData,
    });
  },
});

// debug
// info
// warn
// error
// fatal

/**
 * 
 * @returns default log function that takes in logData and passes it through consoleLogger and aggregatorLogger
 */

const createAppLogFn = () => (arg) => {
  if (arg.level === "debug") {
    console.log(arg, "logging args");
  } else {
    console.log("ignore");
  }
};
