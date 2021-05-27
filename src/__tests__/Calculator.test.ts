import { describe, expect, it } from "@relcu/test";
import { Calculator }           from "../Calculator";

describe("Calculator", () => {
  it("should sum", () => {
    let cal = new Calculator();
    expect(cal.add(5, 6)).toBe(11);
  });
  it("should sub", () => {
    let cal = new Calculator();
    expect(cal.sub(5, 6)).toBe(-1);
  });
  it("testing failure", () => {
    let cal = new Calculator();
    expect(cal.sub(5, 6)).toBe(1);
  });
});
