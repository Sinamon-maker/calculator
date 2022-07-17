const StringHolder = require("../stringHolder");
const counter = require("../counter");

describe("stringHolder", () => {
  it("should add element", () => {
    const stringHolder = new StringHolder(counter)
    stringHolder.add("4");
    const result = stringHolder.showLast();
    expect(result).toBe("4");
  });

  it("shoud return 0 if stack is empty", () => {
    const stringHolder = new StringHolder(counter);
    const result = stringHolder.countWhithinBrackets();
    expect(result).toBe(0);
  });

  it("shoud return 0 if stack is empty and contain one bracket", () => {
    const stringHolder = new StringHolder(counter);
    stringHolder.add("(");
    const result = stringHolder.countWhithinBrackets();
    expect(result).toBe(0);
  });

 it("shoud count priority operation", () => {
   const stringHolder = new StringHolder(counter);
   stringHolder.add("(");
   stringHolder.add("3");
   stringHolder.add("*");
   const result = stringHolder.countHighPriority(4);
   expect(result).toBe(12);
 });

 it("shoud return error if sth wrong with Priority Operation", () => {
   const stringHolder = new StringHolder(counter);
   stringHolder.add("(");
   stringHolder.add("3");
   stringHolder.add("5");

   expect(() => {
    stringHolder.countHighPriority(4).toThrow(error)
   })
 });

  it("shoud return error if sth wrong", () => {
    const stringHolder = new StringHolder(counter);
    stringHolder.add("(");
    stringHolder.add("3");
    stringHolder.add("5");

    expect(() => {
      stringHolder.countWhithinBrackets(4).toThrow(error);
    });
  });

});
