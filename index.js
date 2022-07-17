


const calculate = require("./calculator");

const pp = (x) =>x*2

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    const res = calculate(chunk.toString())
   process.stdout.write(`data: ${res}\n`)
  }
});