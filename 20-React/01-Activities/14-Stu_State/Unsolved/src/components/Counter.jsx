// import { useState } from 'react';
import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// exports a single value, in this case a function
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // const [count, setCount] = useState(0);
  // a react hook that lets you add state to functional components
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // it adds 1 to the state count, its a click even handler
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // another click event handler that reduces 1 from the state count
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* count is passed to cardbody so it can display the current count, handleIncrement displays the new value as does handleDecrement */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
