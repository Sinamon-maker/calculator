class Counter {
  count(num1, num2, operator) {
    switch (operator) {
      case "+":
        return this.summ(num1, num2);
      case "-":
        return this.minus(num1, num2);
      case "*":
        return this.multiply(num1, num2);
      case "/":
        return this.del(num1, num2);
      default: {
        throw new Error(`Ops, something wrong num1:${num1} num2:${num2} operator:${operator}`);
      }
    }
  }
  summ(num1, num2) {
    return +num1 + +num2;
  }
  minus(num1, num2) {
    return +num1 - +num2;
  }
  del(num1, num2) {
    return +num1 / +num2;
  }
  multiply(num1, num2) {
    return +num1 * +num2;
  }
}

const counter = new Counter();

module.exports = counter;
