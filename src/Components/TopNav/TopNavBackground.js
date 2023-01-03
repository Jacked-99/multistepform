import { useContext } from "react";
import classes from "./TopNav.module.css";
import FormContext from "../Context/FormContext";

const NavBackground = (props) => {
  let ctx = useContext(FormContext);
  let state = ctx.page;

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.section}>
          <span
            id="1"
            className={`${classes.number} ${1 === state ? classes.active : ""}`}
          >
            1
          </span>
          <div className={classes.head}>
            <span className={classes.step}>STEP 1</span>
            <span className={classes.planName}>YOUR INFO</span>
          </div>
        </div>
        <div className={classes.section}>
          <span
            id="2"
            className={`${classes.number} ${2 === state ? classes.active : ""}`}
          >
            2
          </span>
          <div className={classes.head}>
            <span className={classes.step}>STEP 2</span>
            <span className={classes.planName}>SELECT PLAN</span>
          </div>
        </div>
        <div className={classes.section}>
          <span
            id="3"
            className={`${classes.number} ${3 === state ? classes.active : ""}`}
          >
            3
          </span>
          <div className={classes.head}>
            <span className={classes.step}>STEP 3</span>
            <span className={classes.planName}>ADD-ONS</span>
          </div>
        </div>
        <div className={classes.section}>
          <span
            id="4"
            className={`${classes.number} ${
              state === 4 || state === 5 ? classes.active : ""
            }`}
          >
            4
          </span>
          <div className={classes.head}>
            <span className={classes.step}>STEP 4</span>
            <span className={classes.planName}>SUMMARY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBackground;
