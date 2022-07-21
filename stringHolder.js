class StringHolder {
  constructor(counter) {
    this.counter = counter;
    this.stack = [];
  }

  add(elem) {
    this.stack.push(elem);
  }

  showLast() {
    return this.stack[this.stack.length - 1];
  }

  countHighPriority(el) {
    try {
      const operation = this.stack.pop();
      const num = this.stack.pop();

      return this.counter.count(num, el, operation);
    } catch (error) {
      throw new Error(error);
    }
  }
  countWhithinBrackets(closeBracket = false) {
    let tempstack = [];
    let i = this.stack[this.stack.length - 1];
    while (this.stack[this.stack.length - 1] !== "(" && this.stack.length) {
      tempstack.unshift(this.stack.pop());

      i = i - 1;
    }
    const openBracket = this.stack.pop();
    if (openBracket === "(" && !closeBracket)
      throw new Error("Closed bracket is needed");
    const result = this._simpleOperations(tempstack);

    return result;
  }

  _simpleOperations(stack) {
    try {
      console.log(stack);
      if (stack.length === 0) return 0;
      let res = stack.pop();

      if (stack.length === 0 && !["+", "-"].includes(res)) {
        return res;
      }

      if (["+", "-"].includes(res)) throw new Error("Your string is incorrect");
      if (stack.length && stack[stack.length - 1] === "-") {
        res = res * -1;
        stack.pop();
        if (stack[stack.length - 1] !== "+") {
          stack.push("+");
        }
      }
      while (stack.length) {
        const operation = stack.pop();

        if (stack.length !== 0) {
          let num = stack.pop();
          if (stack[stack.length - 1] === "-") {
            num = num * -1;
            stack.pop();
            if (stack[stack.length - 1] !== "+") {
              stack.push("+");
            }
          }

          res = this.counter.count(res, num, operation);
        }
      }
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = StringHolder;
