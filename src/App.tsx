import React from "react";
import { Couter } from "./Counter";

// props
// hooks
// render props

const App: React.FC = () => {
  return (
    <div>
      <Couter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Couter>
      yo
    </div>
  );
};

export default App;
