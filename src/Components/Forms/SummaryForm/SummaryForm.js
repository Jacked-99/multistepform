import styles from "./SummaryForm.module.css";
import { useContext, forwardRef } from "react";
import FormContext from "../../Context/FormContext";

const SummaryForm = forwardRef((props, ref) => {
  const ctx = useContext(FormContext);
  const handleClick = () => {
    ctx.setPage({ type: "dec" });
    ctx.setPage({ type: "dec" });
  };
  const sum = () => {
    let addonSum = 0;
    if (ctx.data.addons.length > 0) {
      for (let addon of ctx.data.addons) {
        addonSum += addon.price;
      }
      return addonSum;
    } else {
      return (addonSum = 0);
    }
  };
  const fullSum = () => {
    let addons = sum();
    return ctx.data.planPrice + addons;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    ctx.setPage({ type: "inc" });
  };
  const addons = ctx.data.addons.map((addon) => {
    return (
      <div className={styles.addon} key={addon.name}>
        <span>{addon.name}</span>
        <span>{`+$${addon.price}/${
          ctx.data.duration === "month" ? "mo" : "yr"
        }`}</span>
      </div>
    );
  });
  return (
    <form className={styles.Form} onSubmit={submitHandler}>
      <h2 className={styles.h2}>Finishing up</h2>
      <p className={styles.p}>
        Double-check everything looks OK before confirming
      </p>
      <div className={styles.summary}>
        <section className={styles.prices}>
          <div className={styles.plan}>
            <div className={styles.mainPlan}>
              <span className={styles["plan_name"]}>{`${ctx.data.planName} (${
                ctx.data.duration === "month" ? "Monthly" : "Yearly"
              })`}</span>
              <span className={styles.Change} onClick={handleClick}>
                Change
              </span>
            </div>
            <span className={styles.planPrice}>{`$${ctx.data.planPrice}/${
              ctx.data.duration === "month" ? "mo" : "yr"
            }`}</span>
          </div>
          <hr className={styles.hr}></hr>
          <div>{addons}</div>
        </section>
        <div className={styles.total}>
          <span>{`Total (${
            ctx.data.duration === "month" ? "per month" : "per year"
          })`}</span>
          <span className={styles["total_price"]}>{`$${fullSum()}/${
            ctx.data.duration === "month" ? "mo" : "yr"
          }`}</span>
        </div>
      </div>
      <button className={styles.btn} ref={ref}></button>
    </form>
  );
});

export default SummaryForm;
