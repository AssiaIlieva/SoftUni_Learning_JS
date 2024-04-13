import { isOddOrEven } from "../2.evenOrOdd.js";
import { expect } from "chai";

describe("isOddOrEven function tests", () => {
  it("should return undefined if parameter is a number", () => {
    expect(isOddOrEven(1)).to.equal(undefined);
  });
  it("should return undefined if parameter is a object", () => {
    expect(isOddOrEven({})).to.equal(undefined);
  });
  it("should return undefined if parameter is an array", () => {
    expect(isOddOrEven([])).to.equal(undefined);
  });
  it("should return undefined if parameter is undefined", () => {
    expect(isOddOrEven(undefined)).to.equal(undefined);
  });
  it("should return undefined if parameter is null ", () => {
    expect(isOddOrEven(null)).to.equal(undefined);
  });
  it('should return "odd" if the parameter length is odd number', () => {
    expect(isOddOrEven("Hello")).to.equal("odd");
  });
  it('should return "even" if the parameter length is event number', () => {
    expect(isOddOrEven("Hi")).to.equal("even");
  });
});
