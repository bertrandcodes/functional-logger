/*
Goals:

- Satisfies `instanceof` comparison: `LogLevel.DEBUG instanceof LogLevel === true`
- Each enum value is only `===` equivalent to itself. TS enums can compare to literal number or string values.
- Can be order-compared using `>`, `>=`, `<`, `<=` for log filtering
- Can output the correct string representation using `String(LogLevel.DEBUG)
*/
