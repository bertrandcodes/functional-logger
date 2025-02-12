export const createLogger = (log = createAppLogFn(), dateObj) => ({
  debug: (messageString, data) => {
    log(messageString);
  },
});

const createAppLogFn = () => {
  return (arg) => {
    console.log(arg, "logging args");
  };
};
