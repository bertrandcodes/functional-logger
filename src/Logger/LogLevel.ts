/*

enum LogLevel {
  INFO,
  WARN,
  ERROR
}

Unfortunately the above option is not robust enough. Because Typescript cares about the structure of data and because each enum don't have an associated value, Typescript sees each as comparable to an empty object {}.
For our logger to work, we must be able to compare the weight of a level for filtering purposes. We also need access to both the string and numerical value from the LogLevel directly.

Goals:

- Satisfies `instanceof` comparison: `LogLevel.DEBUG instanceof LogLevel === true`
- Each enum value is only `===` equivalent to itself. TS enums can compare to literal number or string values.
- Can be order-compared using `>`, `>=`, `<`, `<=` for log filtering
- Can output the correct string representation using `String(LogLevel.DEBUG)
*/

const instSymbol: unique symbol = Symbol("LogLevelInst");

type LogLevelInstanceSymbol = typeof instSymbol;

type LogLevel = { [Key in LogLevelInstanceSymbol]: true };

let isClosed = false;

const LogLevel = (name, value) => {
  if (isClosed) {
    throw new Error("LogLevel has been frozen");
  }
  const inst = Object.create(LogLevel.prototype);
  Object.assign(inst, {
    [Symbol.toPrimitive](hint: string) {
      return hint === "string" ? name : value;
    },
    valueOf() {
      return value;
    },
    toString() {
      return name;
    },
    toJson() {
      return name;
    },
    [instSymbol]: true,
  });
  return Object.freeze(inst);
};

LogLevel.prototype = {
  constructor: LogLevel,
};

LogLevel.DEBUG = LogLevel("DEBUG", 10);
LogLevel.INFO = LogLevel("INFO", 20);
LogLevel.WARN = LogLevel("WARN", 30);
LogLevel.ERROR = LogLevel("ERROR", 40);
LogLevel.FATAL = LogLevel("FATAL", 50);
LogLevel.DISABLED = LogLevel("DISABLED", 100);

isClosed = true;

export { LogLevel };
