export const createLogger = (fn, dateObj) => ({
  debug: (messageString, data) => {
    fn(messageString)
    return messageString
  }
})