import classes from "./TopNav.css";

const NavBackground = (props) => {
  return (
    <div className={classes.container}>
      <span className={classes.number}>1</span>
      <span className={classes.number}>2</span>
      <span className={classes.number}>3</span>
      <span className={classes.number}>4</span>
    </div>
  );
};

export default NavBackground;
