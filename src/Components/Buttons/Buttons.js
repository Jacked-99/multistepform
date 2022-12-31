import styles from "./Buttons.module.css";
import { useContext } from "react";
import FormContext from "../Context/FormContext";

const Buttons = (props) => {
  const ctx = useContext(FormContext);
  const handleClick = () => {
    ctx.setPage({ type: "dec" });
  };
  return (
    <div className={styles.container}>
      <button
        className={`${styles.buttonPrev} ${ctx.page === 1 ? styles.hide : ""}`}
        onClick={handleClick}
      >
        Go Back
      </button>
      <button className={styles.buttonNext} onClick={props.onClick}>
        Next Step
      </button>
    </div>
  );
};
export default Buttons;
