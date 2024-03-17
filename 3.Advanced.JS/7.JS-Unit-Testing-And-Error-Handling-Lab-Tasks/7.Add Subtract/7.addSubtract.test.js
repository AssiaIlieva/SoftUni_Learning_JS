import { createCalculator } from "./7.addSubtract.js";
import { expect } from "chai";

describe("createCalculator", function () {
  let calc = null;

  beforeEach(() => {
    calc = createCalculator();
  });
  it("check if has all methods", () => {
    expect(calc).to.has.ownProperty("add");
    expect(calc).to.has.ownProperty("subtract");
    expect(calc).to.has.ownProperty("get");
  });
  it("returns zero initial value", () => {
    expect(calc.get()).to.equal(0);
  });
  it("can add numbers", () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });
  it("can add more than 1 number", () => {
    calc.add(1);
    calc.add(1);
    expect(calc.get()).to.equal(2);
  });
  it("can subtract numbers", () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });
  it("can subtract more than one number", () => {
    calc.subtract(1);
    calc.subtract(1);
    expect(calc.get()).to.equal(-2);
  });
  it("can add and subtract", () => {
    calc.add(1);
    calc.subtract(2);
    expect(calc.get()).to.equal(-1);
  });
  it("number as a string", () => {
    calc.add("1");
    calc.add("1");
    calc.subtract("1");
    expect(calc.get()).to.equal(1);
  });
});
