import { default as sinon } from "sinon";
import { createLogger } from "./createLogger";

describe("createLogger()", () => {
  it("should call log function with expected data", () => {
    const testData = {
      url: "www.sampleurl.com",
      data: { field1: "foo", field2: 2, field3: true },
    };

    const logSpy = sinon.spy();
    const logger = createLogger(logSpy);

    logger.debug("log debug", testData);

    expect(logSpy.callCount).toBe(1);
    expect(logSpy.getCall(0).args[0]).toBe("log debug");
  });
});
