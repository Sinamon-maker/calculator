const operations = ["+", "-", "*", "/"];
const notNumbers = ["+", "-", "*", "/", " ", "(", " "];

const StringHolder = require("./stringHolder");
const counter = require("./counter");

function calculate(string) {
  const stringHolder = new StringHolder(counter);
  const str = string.trim();

  const re = /[a-z]/;
  try {
    if (["*", "/"].includes(str[0])) {
      throw new Error(`Your string should not start with ${str[0]}`);
    }

    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === " ") continue;
      if (str[i] === "(") {
        stringHolder.add("(");

        continue;
      }
      if (operations.includes(str[i])) {
        stringHolder.add(str[i]);

        continue;
      }
      if (str[i] === ")") {
        let res = stringHolder.countWhithinBrackets();

        if (["*", "/"].includes(stringHolder.showLast())) {
          res = stringHolder.countHighPriority(res);
        }
        stringHolder.add(res);
        continue;
      }
      let s = "" + str[i];

      while (i + 1 < str.length && !notNumbers.includes(str[i + 1])) {
        s += str[i + 1];
        i += 1;
      }
      if (re.test(s)) {
        throw new Error("Your string contains letter");
      }
      if (["*", "/"].includes(stringHolder.showLast())) {
        const res = stringHolder.countHighPriority(s);
        stringHolder.add(res);
      } else {
        stringHolder.add(s);
      }
    }
    return stringHolder.countWhithinBrackets();
  } catch (error) {
    return error;
  }
}

module.exports = calculate;
