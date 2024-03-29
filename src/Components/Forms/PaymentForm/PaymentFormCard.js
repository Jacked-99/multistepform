import styles from "./PaymentFormCard.module.css";

const PaymentFormCard = (props) => {
  const select = props.state;

  const priceCheck = () => {
    let price = props.price;
    if (props.plan === false) {
      return price;
    } else {
      return price;
    }
  };
  const handleClick = () => {
    if (select === false) {
      const obj = { plan: props.name, price: priceCheck() };
      props.onClick(obj);
    }
  };
  return (
    <section
      className={`${styles.plan} ${
        select === true ? styles["plan-select"] : ""
      }`}
      onClick={handleClick}
    >
      <div>
        <img src={props.src} alt={`${props.name} plan picture`}></img>
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
