import styles from "./PaymentFormCard.module.css";
import { useState } from "react";

const PaymentFormCard = (props) => {
  const [select, setSelect] = useState(false);
  const priceCheck = () => {
    let price = props.price;
    if (!props.plan) {
      return price;
    } else {
      return price * 10;
    }
  };
  const handleClick = () => {
    setSelect((prevState) => !prevState);
    if (select === false) {
      const obj = { plan: props.name, price: priceCheck() };
      props.onClick(obj);
    }
  };
  return (
    <section
      className={`${styles.plan} ${select ? styles["plan-select"] : ""}`}
      onClick={handleClick}
    >
      <div>
        <img src={props.src}></img>
      </div>
      <div className={styles["plan-content"]}>
        <h3>{props.name}</h3>
        <p>{!props.plan ? `$${props.price}/mo` : `$${props.price * 10}/yr`}</p>
        <span>{!props.plan ? "" : "2 months free"}</span>
      </div>
    </section>
  );
};

export default PaymentFormCard;
