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
  const [name, setName] = useState();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Typography style={{ fontSize: "2em", fontWeight: 600 }}>
        Child Component
      </Typography>
      <div>
        <p>You clicked {count} times</p>
        <Button variant="outlined" onClick={handleClick}>
          Click me
        </Button>
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <Typography style={{ marginRight: 20, marginTop: 20 }}>
          {name ? (
            <Typography>My Name is {name}</Typography>
          ) : (
            "Please Type Your Name ? "
          )}
        </Typography>
        <TextField
          onChange={handleChange}
          id="standard-basic"
          label="Standard"
        />
      </div>
    </div>
  );
}

export default ChildComponent;
