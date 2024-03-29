import { forwardRef, useEffect, useState, useContext } from "react";
import styles from "./PaymentForm.module.css";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import PaymentFormCard from "./PaymentFormCard";
import FormContext from "../../Context/FormContext";

const PaymentForm = forwardRef((props, ref) => {
  let ctx = useContext(FormContext);
  const [plan, setPlan] = useState(false);
  const [currentPlan, setCurrentPlan] = useState({ plan: "", price: 0 });
  const [currentCheck, setCurrentCheck] = useState({
    arcade: false,
    advanced: false,
    pro: false,
  });
  useEffect(() => {
    console.log(plan);
    if (plan === true) {
      currentPlan.price = currentPlan.price * 10;
      ctx.setData({ duration: "year" });
    } else if (plan === false) {
      if (currentPlan.price > 20) {
        currentPlan.price = currentPlan.price / 10;
      }

      ctx.setData({ duration: "month" });
    }

    console.log(currentPlan);
  }, [plan, currentPlan]);
  const handleChange = (e) => {
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
    setCurrentPlan(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.setData({ planName: currentPlan.plan, planPrice: currentPlan.price });
    ctx.setPage({ type: "inc" });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button
        className={styles.button}
        type="submit"
        ref={ref}
        disabled={currentPlan.price === 0}
      ></button>
    </form>
  );
});

export default PaymentForm;
