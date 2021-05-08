// import { Button, TextField, Typography } from "@material-ui/core";
// import React, { useState } from "react";

// function ChildComponent(props) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Typography style={{ fontSize: "2em", fontWeight: 600 }}>
//         Child Component
//       </Typography>
//       <div>
//         <p>You clicked {count} times</p>
//         <Button onClick={() => setCount(count + 1)}>Click me</Button>
//       </div>
//     </div>
//   );
// }

// export default ChildComponent;

// or we can use this too for handling Data.

import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

function ChildComponent(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Typography style={{ fontSize: "2em", fontWeight: 600 }}>
        Child Component
      </Typography>
      <div>
        <p>You clicked {count} times</p>
        <Button onClick={handleClick}>Click me</Button>
      </div>
    </div>
  );
}

export default ChildComponent;
