// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    const backwards = []
    for (let i = 1; i <= num; i++) {
        backwards.push(i);
    }
    backwards.reverse();
    for (let i = 0; i < backwards.length; i++) {
        console.log(backwards[i])
    }
};

countdown(10);