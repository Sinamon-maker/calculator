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
  countWhithinBrackets() {
    let tempstack = [];
    let i = this.stack[this.stack.length - 1];
    while (this.stack[this.stack.length - 1] !== "(" && this.stack.length) {
      tempstack.unshift(this.stack.pop());

      i = i - 1;
    }
    this.stack.pop();

    return this._simpleOperations(tempstack);
  }

  _simpleOperations(stack) {
    try {
      if (stack.length === 0) return 0;
      let res = stack.pop();

      if (stack.length === 0 && ["+", "-"].includes(res)) {
        return 0;
      }

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
