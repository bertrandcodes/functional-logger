export const createLogger = (log = createAppLogFn()) => ({
  debug: (message, auditData = {}) => {
    log({
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

const createAppLogFn = () => {
  return (arg) => {
    if (arg.level === "debug") {
      console.log(arg, "logging args");
    } else {
      console.log("ignore");
    }
  };
};
