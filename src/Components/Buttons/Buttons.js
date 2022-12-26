import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.buttonPrev}>Go Back</button>
      <button className={styles.buttonNext}>Next Step</button>
    </div>
  );
};
export default Buttons;
