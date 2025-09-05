// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function (num) {
  // console.log(num)
  for (let i = 1; i <= num; ++i) {
    if (i <= num) {
      console.log(i);
    } else {
      console.log(num);
      return num;
    }
  }
};

logNums(10);
