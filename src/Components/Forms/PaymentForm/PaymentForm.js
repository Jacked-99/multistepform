import { forwardRef, useState } from "react";
import styles from "./PaymentForm.module.css";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import PaymentFormCard from "./PaymentFormCard";

const PaymentForm = forwardRef((props, ref) => {
  const [plan, setPlan] = useState(false);
  const [currentCheck, setCurrentCheck] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });

  const handleChange = (e) => {
    console.log(e.target.checked);
    setPlan(e.target.checked);
  };
  const handleClick = (e) => {
    if (e.plan === "Arcade") {
      setCurrentCheck({ arcade: true, advanced: false, pro: false });
    } else if (e.plan === "Advanced") {
      setCurrentCheck({ arcade: false, advanced: true, pro: false });
    } else if (e.plan === "Pro") {
      setCurrentCheck({ arcade: false, advanced: false, pro: true });
    }
    console.log(e);
  };
  return (
    <form className={styles.form}>
      <h2 className={styles.h2}>Select your plan</h2>
      <p className={styles.p}>
        You have the option of monthly or yearly billing
      </p>
      <div className={styles.plans}>
        <PaymentFormCard
          name="Arcade"
          src={arcade}
          plan={plan}
          price={9}
          onClick={handleClick}
          state={currentCheck.arcade}
        />
        <PaymentFormCard
          name="Advanced"
          src={advanced}
          plan={plan}
          price={12}
          onClick={handleClick}
          state={currentCheck.advanced}
        />
        <PaymentFormCard
          name="Pro"
          src={pro}
          plan={plan}
          price={15}
          onClick={handleClick}
          state={currentCheck.pro}
        />
      </div>
      <section className={styles.sliderSection}>
        <label htmlFor="slider" className={styles.monthly}>
          Monthly
        </label>
        <label>
          <input
            className={styles.slider}
            id="slider"
            type="checkbox"
            onChange={handleChange}
          ></input>
          <span className={styles.sliderCircle}></span>
        </label>
        <label htmlFor="slider">Yearly</label>
      </section>
      <button className={styles.button} type="submit" ref={ref}></button>
    </form>
  );
});

export default PaymentForm;
