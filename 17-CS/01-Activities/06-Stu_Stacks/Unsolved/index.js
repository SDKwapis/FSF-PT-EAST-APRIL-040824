// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container = []) {
    this.container = container;
  }
  addToStack(el) {
    return this.container.push(el);
  }
  removeFromStack() {
    return this.container. pop();
  }
}//pop is an array method that literally means to pop out the last element added to an array

module.exports = Stack;
