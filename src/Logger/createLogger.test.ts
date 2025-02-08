import { describe } from "riteway";
import { default as sinon } from "sinon";
import { createLogger } from "./createLogger";

describe("createLogger()", async assert => {
  const testData = {
    url: "www.sampleurl.com",
    data: {
      field1: "foo",
      field2: 2,
      field3: true
    }
  }
  const timeStamp = new Date(1970, 0, 1)
  const nowDate = () => timeStamp
  {
    const logSpy = sinon.spy()
    const logger = createLogger(logSpy, { nowDate })
    
    logger.debug('log debug', testData)
    logger.info('log info', testData)
    logger.warn('log warn', testData)
    logger.error('log error', testData)
    logger.fatal('log fatal', testData)

    assert({
      given: "calls for each public log method",
      should: "call the underlying LogFn with expected data",
      actual: [
        logSpy.callCount,
      ]
    })
  }
})