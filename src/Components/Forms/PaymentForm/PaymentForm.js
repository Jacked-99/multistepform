import { forwardRef, useState } from "react";
import styles from "./PaymentForm.module.css";

const PaymentForm = forwardRef((props, ref) => {
  const [plan, setPlan] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.checked);
    setPlan(e.target.checked);
  };
  return (
    <form className={styles.form}>
      <h2 className={styles.h2}>Select your plan</h2>
      <p className={styles.p}>
        You have the option of monthly or yearly billing
      </p>
      <section>
        <div></div>
        <div>
          <h3>Plan name</h3>
          <p>{!plan ? "$9/month" : "$90/year"}</p>
          <span>{!plan ? "" : "2 months free"}</span>
        </div>
      </section>
      <section>
        <div></div>
        <div>
          <h3>Plan name</h3>
          <p>{!plan ? "$12/month" : "$120/year"}</p>
          <span>{!plan ? "" : "2 months free"}</span>
        </div>
      </section>
      <section>
        <div></div>
        <div>
          <h3>Plan name</h3>
          <p>{!plan ? "$15/month" : "$150/year"}</p>
          <span>{!plan ? "" : "2 months free"}</span>
        </div>
      </section>
      <section>
        <input type="checkbox" onChange={handleChange}></input>
        <span></span>
      </section>
      <button className={styles.button} type="submit"></button>
    </form>
  );
});

export default PaymentForm;
