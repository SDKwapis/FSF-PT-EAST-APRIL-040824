// TODO: Add a comment describing what the `position` parameter means for this function.
// the position is the spot you are at in the fibonacci sequence
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // if you at 0 or 1 in the fibonacii sequence when this runs it will console log that 0 or 1
  if (position < 2) {
    console.log(position)
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
// it takes the input position, subtracts 1, then adds it to the same position # -2
console.log(position)
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// 34
console.log(fibonacci(9));
