// TODO: Create a `name` variable
const name = 'Stephan';
// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = 'This is so cool!';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          
          <h1>Hi! My name is {name}</h1>
          
          <h2>My name has {name.length} letters</h2>
          
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
