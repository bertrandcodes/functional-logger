export const createLogger = (fn, dateObj) => ({
  debug: () => {
    fn()
  }
})