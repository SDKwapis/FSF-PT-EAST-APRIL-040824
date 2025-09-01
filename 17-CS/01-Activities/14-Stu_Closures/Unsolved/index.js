// TODO: Complete the 'counter' function below.
function counter() {
  let count = 0;
  return {
    increment: function () {
      count += 1;
      console.log(count);
      return count; 
    },
  };
}
const studentCounter = counter();
studentCounter.increment();
module.exports = counter;
