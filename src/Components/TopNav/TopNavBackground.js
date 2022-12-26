import { useState } from "react";
import classes from "./TopNav.module.css";

const NavBackground = (props) => {
  let state = props.state;

  //   const styles = `${classes.number}${id == state ? classes.active : ""}`;
  return (
    <div className={classes.container}>
      <span
        id="1"
        className={`${classes.number} ${1 == state ? classes.active : ""}`}
      >
        1
      </span>
      <span
        id="2"
        className={`${classes.number} ${2 == state ? classes.active : ""}`}
      >
        2
      </span>
      <span
        id="3"
        className={`${classes.number} ${3 == state ? classes.active : ""}`}
      >
        3
      </span>
      <span
        id="4"
        className={`${classes.number} ${4 == state ? classes.active : ""}`}
      >
        4
      </span>
    </div>
  );
};

export default NavBackground;
