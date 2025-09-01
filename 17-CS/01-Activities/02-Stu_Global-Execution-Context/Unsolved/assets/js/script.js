// 1) Where is carNoise stored?
// in the global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// in the global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // once the execution context is created, its stored within the function execution context
  
  // 5) Where is makeNoise stored?
  //its stored in the function execution context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // calling the makeNoise function places it on the call stack which creates a new function execution context
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// if the alert is confirmed 'ok' the goFast function is placed on the call stack which creates a new function execution context
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
