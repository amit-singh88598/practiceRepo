import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ChildComponent from "./childComponent";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  ageStyle: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const Stydents = [
  {
    name: "amit",
    age: 23,
  },
  {
    name: "ankit",
    age: 21,
  },
  {
    name: "Sumit",
    age: 20,
  },
  {
    name: "Piyush",
    age: 19,
  },
];

function HomeParentComponent(props) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <div className={classes.root}>
          <Typography>MAP FUNCTION EXAMPLE</Typography>
        </div>
        {Stydents.map((item, index) => (
          <div key={index}>
            <Typography>{item.name}</Typography>
            <Typography className={classes.ageStyle}>{item.age}</Typography>
          </div>
        ))}
      </div>
      <ChildComponent />
    </div>
  );
}

export default HomeParentComponent;
